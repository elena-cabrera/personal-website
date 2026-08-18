const root = document.querySelector('[data-collections]');
if (!root) {
  throw new Error('collections root missing');
}

const searchInput = root.querySelector('[data-collections-search]');
const countEl = root.querySelector('[data-collections-count]');
const emptyEl = root.querySelector('[data-collections-empty]');
const items = [...root.querySelectorAll('[data-collection-item]')];
const typeButtons = [...root.querySelectorAll('[data-type-filter]')];
const tagButtons = [...root.querySelectorAll('[data-tag-filter]')];
const statusButtons = [...root.querySelectorAll('[data-status-filter]')];
const statusRow = root.querySelector('[data-status-row]');

const TYPE_VALUES = new Set(['tool', 'book', 'inspiration']);
const STATUS_VALUES = new Set(['read', 'reading', 'to-read']);

function parseState() {
  const params = new URLSearchParams(window.location.search);
  const typeParam = params.get('type') ?? 'all';
  const type = typeParam === 'all' || TYPE_VALUES.has(typeParam) ? typeParam : 'all';
  const tags = params.getAll('tag').filter(Boolean);
  const statuses = params.getAll('status').filter((status) => STATUS_VALUES.has(status));

  return {
    q: params.get('q') ?? '',
    type,
    tags,
    statuses,
  };
}

function writeState(state) {
  const params = new URLSearchParams();
  if (state.q) params.set('q', state.q);
  if (state.type !== 'all') params.set('type', state.type);
  for (const tag of state.tags) params.append('tag', tag);
  for (const status of state.statuses) params.append('status', status);
  const qs = params.toString();
  const url = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
  window.history.replaceState(state, '', url);
}

function itemTags(el) {
  return el.dataset.tags ? el.dataset.tags.split(' ').filter(Boolean) : [];
}

function tagsForType(type) {
  const tags = new Set();
  for (const el of items) {
    if (type !== 'all' && el.dataset.type !== type) continue;
    for (const tag of itemTags(el)) tags.add(tag);
  }
  return tags;
}

function matches(el, state) {
  if (state.type !== 'all' && el.dataset.type !== state.type) return false;

  if (state.statuses.length > 0) {
    if (!state.statuses.includes(el.dataset.status ?? '')) return false;
  }

  if (state.tags.length > 0) {
    const tags = itemTags(el);
    if (!state.tags.some((tag) => tags.includes(tag))) return false;
  }

  const query = state.q.trim().toLowerCase();
  if (query && !(el.dataset.search ?? '').includes(query)) return false;

  return true;
}

function syncButtons(state) {
  for (const button of typeButtons) {
    button.classList.toggle('is-active', button.dataset.typeFilter === state.type);
    button.setAttribute('aria-pressed', button.dataset.typeFilter === state.type ? 'true' : 'false');
  }

  const availableTags = tagsForType(state.type);
  for (const button of tagButtons) {
    const tag = button.dataset.tagFilter ?? '';
    const on = state.tags.includes(tag);
    button.hidden = !availableTags.has(tag);
    button.classList.toggle('is-active', on);
    button.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  const showShelf = state.type === 'all' || state.type === 'book';
  if (statusRow instanceof HTMLElement) statusRow.hidden = !showShelf;
  for (const button of statusButtons) {
    const on = state.statuses.includes(button.dataset.statusFilter ?? '');
    button.classList.toggle('is-active', on);
    button.setAttribute('aria-pressed', on ? 'true' : 'false');
  }
}

function apply(state) {
  let visible = 0;
  for (const el of items) {
    const show = matches(el, state);
    el.hidden = !show;
    if (show) visible += 1;
  }

  if (countEl) {
    countEl.textContent = `${visible}`;
  }
  if (emptyEl instanceof HTMLElement) {
    emptyEl.hidden = visible !== 0;
  }
  syncButtons(state);
}

let state = parseState();
if (searchInput instanceof HTMLInputElement) {
  searchInput.value = state.q;
}

apply(state);

searchInput?.addEventListener('input', () => {
  if (!(searchInput instanceof HTMLInputElement)) return;
  state = { ...state, q: searchInput.value };
  writeState(state);
  apply(state);
});

for (const button of typeButtons) {
  button.addEventListener('click', () => {
    const nextType = button.dataset.typeFilter ?? 'all';
    const available = tagsForType(nextType);
    state = {
      ...state,
      type: nextType,
      tags: state.tags.filter((tag) => available.has(tag)),
      statuses: nextType === 'book' || nextType === 'all' ? state.statuses : [],
    };
    writeState(state);
    apply(state);
  });
}

for (const button of tagButtons) {
  button.addEventListener('click', () => {
    const tag = button.dataset.tagFilter;
    if (!tag) return;
    const tags = state.tags.includes(tag)
      ? state.tags.filter((value) => value !== tag)
      : [...state.tags, tag];
    state = { ...state, tags };
    writeState(state);
    apply(state);
  });
}

for (const button of statusButtons) {
  button.addEventListener('click', () => {
    const status = button.dataset.statusFilter;
    if (!status) return;
    const statuses = state.statuses.includes(status)
      ? state.statuses.filter((value) => value !== status)
      : [...state.statuses, status];
    state = { ...state, statuses };
    writeState(state);
    apply(state);
  });
}

window.addEventListener('popstate', () => {
  state = parseState();
  if (searchInput instanceof HTMLInputElement) searchInput.value = state.q;
  apply(state);
});
