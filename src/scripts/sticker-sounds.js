/**
 * Sounds for the tech stack stickers: a "lift" when a sticker starts peeling
 * and a "stick" when it is pressed back down. Voices are synthesized with Web
 * Audio; any sound can be swapped for a recorded sample.
 */
const VOICES = {
  // A rounded sine blip on lift.
  bubble: {
    lift: [{ type: 'sine', from: 330, to: 540, duration: 0.09, gain: 0.1 }],
    // A dry press: a muted thump of filtered noise over a short low body.
    stick: [
      { noise: true, from: 1100, to: 450, q: 0.8, duration: 0.035, gain: 0.32, attack: 0.002 },
      { type: 'sine', from: 150, to: 95, duration: 0.045, gain: 0.14, attack: 0.002 },
    ],
  },
  // Paper-like: a soft filtered swish, then a muted tap.
  paper: {
    lift: [{ noise: true, from: 1400, to: 3200, q: 1.4, duration: 0.14, gain: 0.12 }],
    stick: [
      { noise: true, from: 900, to: 500, q: 0.9, duration: 0.06, gain: 0.14 },
      { type: 'sine', from: 210, to: 150, duration: 0.08, gain: 0.12 },
    ],
  },
  // Playful marimba-like notes, rising on lift and resolving on stick.
  chime: {
    lift: [{ type: 'triangle', from: 784, to: 784, duration: 0.16, gain: 0.07 }],
    stick: [
      { type: 'sine', from: 659, to: 659, duration: 0.22, gain: 0.1 },
      { type: 'sine', from: 988, to: 988, duration: 0.3, gain: 0.07, delay: 0.07 },
    ],
  },
};

// Scrubbing: the playhead catches up with the peel over SCRUB_LAG seconds,
// within a playback-rate range that keeps the recording natural.
const SCRUB_LAG = 0.1;
const SCRUB_MIN_RATE = 0.4;
const SCRUB_MAX_RATE = 2;
const SCRUB_DEADBAND = 0.004;

let noiseBuffer = null;

function getNoise(context) {
  if (noiseBuffer) return noiseBuffer;
  noiseBuffer = context.createBuffer(1, context.sampleRate * 0.5, context.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return noiseBuffer;
}

/** Schedule one sound (a list of layers) on any (offline) audio context. */
export function renderSound(context, layers, start = context.currentTime, volume = 1) {
  for (const layer of layers) {
    const at = start + (layer.delay || 0);
    const end = at + layer.duration;
    const envelope = context.createGain();
    envelope.gain.setValueAtTime(0.0001, at);
    envelope.gain.exponentialRampToValueAtTime(layer.gain * volume, at + (layer.attack ?? 0.008));
    envelope.gain.exponentialRampToValueAtTime(0.0001, end);
    envelope.connect(context.destination);

    let source;
    if (layer.noise) {
      source = context.createBufferSource();
      source.buffer = getNoise(context);
      const filter = context.createBiquadFilter();
      filter.type = 'bandpass';
      filter.Q.value = layer.q;
      filter.frequency.setValueAtTime(layer.from, at);
      filter.frequency.exponentialRampToValueAtTime(layer.to, end);
      source.connect(filter).connect(envelope);
    } else {
      source = context.createOscillator();
      source.type = layer.type;
      source.frequency.setValueAtTime(layer.from, at);
      source.frequency.exponentialRampToValueAtTime(layer.to, end);
      source.connect(envelope);
    }
    source.start(at);
    source.stop(end + 0.02);
  }
}

/**
 * `samples` maps a sound name to an audio file URL; it plays instead of the
 * synthesized voice once decoded (the voice covers the first moments).
 */
export function createStickerSounds(voice = 'bubble', volume = 1, samples = {}) {
  const sounds = VOICES[voice] || VOICES.bubble;
  const buffers = {};
  let context = null;

  const getContext = () => {
    context ??= new (window.AudioContext || window.webkitAudioContext)();
    return context;
  };

  return {
    // Fetch and decode samples ahead of the first interaction.
    preload() {
      for (const [name, src] of Object.entries(samples)) {
        fetch(src)
          .then((response) => response.arrayBuffer())
          .then((data) => getContext().decodeAudioData(data))
          .then((buffer) => {
            buffers[name] = buffer;
          })
          .catch(() => {});
      }
    },
    /**
     * Scrub a sample with a 0..1 progress: the playhead chases
     * `progress * duration`, so a fast peel plays it fast, a slow peel slowly,
     * holding still goes quiet and an early release fades it out unfinished.
     */
    scrub(name, gain = 1) {
      const buffer = buffers[name];
      if (!buffer) {
        this.play(name, gain);
        return { update() {}, end() {} };
      }
      const ctx = getContext();
      if (ctx.state === 'suspended') ctx.resume();
      const source = ctx.createBufferSource();
      const level = ctx.createGain();
      source.buffer = buffer;
      source.playbackRate.value = 0;
      level.gain.value = 0;
      source.connect(level).connect(ctx.destination);
      source.start();

      const duration = buffer.duration;
      let target = 0;
      let playhead = 0;
      let last = performance.now();
      let frame = 0;
      let ended = false;

      const tick = (now) => {
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        const gap = target - playhead;
        const moving = gap > SCRUB_DEADBAND;
        const rate = moving ? Math.min(Math.max(gap / SCRUB_LAG, SCRUB_MIN_RATE), SCRUB_MAX_RATE) : 0;
        source.playbackRate.value = rate;
        level.gain.setTargetAtTime(moving ? volume * gain : 0, ctx.currentTime, 0.03);
        playhead += rate * dt;
        if (playhead >= duration) return stop(0.02);
        frame = requestAnimationFrame(tick);
      };

      const stop = (fade) => {
        if (ended) return;
        ended = true;
        cancelAnimationFrame(frame);
        level.gain.setTargetAtTime(0, ctx.currentTime, fade);
        source.stop(ctx.currentTime + fade * 5);
      };

      frame = requestAnimationFrame(tick);
      return {
        update(progress) {
          target = Math.max(target, Math.min(progress, 1) * duration);
        },
        end() {
          stop(0.04);
        },
      };
    },
    play(name, gain = 1) {
      try {
        const ctx = getContext();
        if (ctx.state === 'suspended') ctx.resume();
        const buffer = buffers[name];
        if (!buffer) {
          renderSound(ctx, sounds[name], ctx.currentTime + 0.005, volume * gain);
          return;
        }
        const source = ctx.createBufferSource();
        const level = ctx.createGain();
        source.buffer = buffer;
        level.gain.value = volume * gain;
        source.connect(level).connect(ctx.destination);
        source.start();
      } catch {
        // Audio is decoration only.
      }
    },
  };
}

export { VOICES };
