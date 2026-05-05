/**
 * nav.js — builds the sidebar from PAGES config and
 * handles navigation between pages (iframe-based).
 * Include AFTER pages.config.js.
 */

const SEV_COLOR = {
  critical: 'var(--crit)',
  warning:  'var(--warn)',
  info:     'var(--info)',
};

function buildNav(currentPageId) {
  const navList = document.getElementById('navList');
  if (!navList) return;

  navList.innerHTML = PAGES.map(p => {
    const isActive = p.id === currentPageId;
    const color    = SEV_COLOR[p.severity] || 'var(--muted)';
    return `
      <div class="nav-item ${isActive ? 'active' : ''}"
           onclick="navigate('${p.file}', '${p.id}')"
           title="${p.subtitle}">
        <span class="nav-dot" style="background:${color}"></span>
        <span class="nav-item-title">${p.title}</span>
        <span class="nav-item-count">${p.issueCount}</span>
      </div>`;
  }).join('');
}

function navigate(file, id) {
  const frame = document.getElementById('pageFrame');
  if (frame) {
    frame.src = file;
    // update active state
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.getAttribute('onclick').includes(`'${id}'`));
    });
  }
}

// Build nav on load (index.html passes no currentPageId)
document.addEventListener('DOMContentLoaded', () => {
  const meta = document.querySelector('meta[name="page-id"]');
  buildNav(meta ? meta.content : null);
});
