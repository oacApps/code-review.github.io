/**
 * review.js — tab switching + line highlighting logic.
 * Used by every review page (pages/*.html).
 *
 * Each review page must define:
 *   window.ISSUE_LINES = { 0: [lineNums], 1: [...], ... }
 */

function selectTab(idx) {
  // Switch tabs
  document.querySelectorAll('.tab-btn')
    .forEach((t, i) => t.classList.toggle('active', i === idx));

  // Switch panes
  document.querySelectorAll('.issue-pane')
    .forEach((p, i) => p.classList.toggle('active', i === idx));

  // Highlight relevant code lines
  document.querySelectorAll('.code-line')
    .forEach(l => l.classList.remove('hl'));

  const lines = (window.ISSUE_LINES || {})[idx] || [];
  lines.forEach(n => {
    const el = document.getElementById('cl' + n);
    if (el) el.classList.add('hl');
  });
}

document.addEventListener('DOMContentLoaded', () => selectTab(0));
