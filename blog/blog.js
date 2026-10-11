const cards = [...document.querySelectorAll('.story-card')];
const filters = [...document.querySelectorAll('[data-filter]')];
const input = document.querySelector('.search input');
let category = 'all';
function filterStories() {
  const query = (input?.value ?? '').trim().toLowerCase();
  let count = 0;
  for (const card of cards) {
    const visible = (category === 'all' || card.dataset.category === category) && (!query || card.dataset.search.includes(query));
    card.hidden = !visible;
    if (visible) count++;
  }
  const counter = document.querySelector('.result-count');
  if (counter) counter.textContent = `${count} ${count === 1 ? 'story' : 'stories'}`;
  const empty = document.querySelector('.empty-message');
  if (empty) empty.hidden = count !== 0;
}
for (const button of filters) button.addEventListener('click', () => {
  category = button.dataset.filter;
  for (const item of filters) {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  }
  filterStories();
});
input?.addEventListener('input', filterStories);
document.querySelector('[data-copy-link]')?.addEventListener('click', async event => {
  if (!navigator.clipboard) return;
  event.preventDefault();
  try {
    await navigator.clipboard.writeText(event.currentTarget.href);
    document.querySelector('.share-status').textContent = 'Link copied';
  } catch { document.querySelector('.share-status').textContent = 'Copy this page’s address from your browser.'; }
});
