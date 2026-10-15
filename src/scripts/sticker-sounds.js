/**
 * Sounds for the tech stack stickers: a "lift" when a sticker starts peeling
 * and a "stick" when it is pressed back down. Voices are synthesized with Web
 * Audio; any sound can be swapped for a recorded sample.
 */
const VOICES = {
  // Rounded sine blips: a small rise on lift, a falling "plop" on stick.
  bubble: {
    lift: [{ type: 'sine', from: 330, to: 540, duration: 0.09, gain: 0.1 }],
    stick: [{ type: 'sine', from: 560, to: 240, duration: 0.12, gain: 0.16 }],
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
    envelope.gain.exponentialRampToValueAtTime(layer.gain * volume, at + 0.008);
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
