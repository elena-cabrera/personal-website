# Sticker Forge (vendored)

Minified copy of `public/embed/sticker-forge.es.js` from
https://github.com/CatsJuice/sticker-forge (commit 068caa49eef69745564a5debbc01bab3fcd31042),
MIT licensed (see `LICENSE`). Loaded lazily by `src/scripts/tech-stickers.js`.

## Local patches

Two edits on the minified file, tuned for small (~50px) logos:

- `uInteractionHint.value=1` -> `uInteractionHint.value=0`: disables the blue
  dashed "grab the edge" hint shown when clicking the sticker's interior.
- `Math.min(this.artwork.width,this.artwork.height)*.13` -> `*.5` (2 matches):
  lifts the cap on `peel.grabWidth`, so a click anywhere on a small sticker
  grabs the nearest edge.
