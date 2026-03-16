/**
 * mockups.js — 3D publication mockup builder
 *
 * API
 * ───
 * Declarative (data attributes on a .mockup-stage element):
 *   data-mockup      = "book" | "report" | "paper"
 *   data-cover       = path or URL to cover image
 *   data-spine       = path or URL to spine image  (book only; defaults to cover)
 *   data-spine-label = text label on spine          (book only)
 *   data-spine-color = CSS colour for report spine  (report only; e.g. "#e8312a")
 *   Call PublicationMockup.init() after DOMContentLoaded.
 *
 * Programmatic:
 *   PublicationMockup.createMockup({ type, coverSrc, spineSrc,
 *                                    spineLabel, spineColor })
 *   Returns a .mockup-stage element ready to append to the DOM.
 */
'use strict';

/* ── DOM helpers ─────────────────────────────────────────────── */
function el(tag, cls) {
  const n = document.createElement(tag);
  if (cls) cls.trim().split(/\s+/).forEach(c => c && n.classList.add(c));
  return n;
}
function mkImg(src, alt) {
  const i = document.createElement('img');
  i.src = src || ''; i.alt = alt || '';
  return i;
}
function pivot(pivCls, panCls, children) {
  const piv = el('div', pivCls);
  const pan = el('div', panCls);
  (children || []).forEach(c => pan.appendChild(c));
  piv.appendChild(pan);
  return piv;
}

/* ── BOOK ───────────────────────────────────────────────────── */
function buildBook({ coverSrc, spineSrc, spineLabel }) {
  const book = el('div', 'book');

  /* Front cover */
  const front = el('div', 'book__front');
  front.appendChild(mkImg(coverSrc, 'Cover'));
  book.appendChild(front);

  /* Spine */
  const spineChildren = [mkImg(spineSrc || coverSrc, '')];
  if (spineLabel) {
    const lbl = el('span', 'book__spine-label');
    lbl.textContent = spineLabel;
    spineChildren.push(lbl);
  }
  book.appendChild(pivot('book__spine-pivot', 'book__spine-panel', spineChildren));

  /* Bottom edge */
  book.appendChild(pivot('book__bottom-pivot', 'book__bottom-panel', []));

  return book;
}

/* ── REPORT ─────────────────────────────────────────────────── */
function buildReport({ coverSrc, spineColor }) {
  const report = el('div', 'report');
  if (spineColor) report.style.setProperty('--spine-color', spineColor);

  /* Front cover */
  const front = el('div', 'report__front');
  front.appendChild(mkImg(coverSrc, 'Cover'));
  report.appendChild(front);

  /* 5-segment rounded spine */
  ['s0','s1','s2','s3','s4'].forEach(seg => {
    const piv = el('div', `report__spine-pivot report__spine-pivot--${seg}`);
    const pan = el('div', 'report__spine-panel');
    piv.appendChild(pan);
    report.appendChild(piv);
  });

  /* Bottom edge */
  report.appendChild(pivot('report__bottom-pivot', 'report__bottom-panel', []));

  return report;
}

/* ── PAPER ──────────────────────────────────────────────────── */
function buildPaper({ coverSrc }) {
  const paper = el('div', 'paper');

  /* 3 backing sheets */
  [3, 2, 1].forEach(i => paper.appendChild(el('div', `paper__sheet paper__sheet--${i}`)));

  /* Front cover sheet */
  const front = el('div', 'paper__sheet paper__sheet--0');
  front.appendChild(mkImg(coverSrc, 'Cover'));
  paper.appendChild(front);

  /* Edge faces */
  paper.appendChild(pivot('paper__left-pivot',   'paper__left-panel',   []));
  paper.appendChild(pivot('paper__right-pivot',  'paper__right-panel',  []));
  paper.appendChild(pivot('paper__bottom-pivot', 'paper__bottom-panel', []));

  return paper;
}

/* ── Public API ─────────────────────────────────────────────── */
const builders = { book: buildBook, report: buildReport, paper: buildPaper };

function createMockup(opts) {
  if (!builders[opts.type]) throw new Error('Unknown type: ' + opts.type);
  const stage = el('div', 'mockup-stage');
  stage.appendChild(el('div', 'cast-shadow'));
  const scene = el('div', 'scene');
  scene.appendChild(builders[opts.type](opts));
  stage.appendChild(scene);
  return stage;
}

function init(selector) {
  document.querySelectorAll(selector || '[data-mockup]').forEach(function(stageEl) {
    const type       = stageEl.dataset.mockup;
    const coverSrc   = stageEl.dataset.cover      || '';
    const spineSrc   = stageEl.dataset.spine      || coverSrc;
    const spineLabel = stageEl.dataset.spineLabel || '';
    const spineColor = stageEl.dataset.spineColor || '';
    if (!builders[type]) { console.error('[mockups] Unknown type:', type); return; }
    stageEl.innerHTML = '';
    stageEl.appendChild(el('div', 'cast-shadow'));
    const scene = el('div', 'scene');
    scene.appendChild(builders[type]({ coverSrc, spineSrc, spineLabel, spineColor }));
    stageEl.appendChild(scene);
  });
}

if (typeof module !== 'undefined' && module.exports) module.exports = { createMockup, init };
if (typeof window !== 'undefined') window.PublicationMockup = { createMockup, init };
