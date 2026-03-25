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
function buildBook({ coverSrc, spineSrc, spineLabel, hasSpineImage, spineDepth }) {
  const book = el('div', 'book');

  /* Front cover */
  const front = el('div', 'book__front');
  front.appendChild(mkImg(coverSrc, 'Cover'));
  book.appendChild(front);

  /* Spine depth — three-tier priority:
     1. Explicit spineDepth param (CSS px at the book's native 320px scale).
     2. Computed from the spine image's natural aspect ratio (clamped 20–60 px)
        — only when a dedicated spine image is supplied (not the cover fallback).
     3. CSS default var(--book-depth, 32px) — no JS needed. */
  const spineImg = mkImg(spineSrc, '');
  if (spineDepth) {
    // Explicit value — set immediately, no image load needed.
    book.style.setProperty('--book-depth', spineDepth + 'px');
  } else if (hasSpineImage) {
    var applyDepth = function() {
      if (spineImg.naturalWidth && spineImg.naturalHeight) {
        // Scale the natural spine width to the book's 320 px CSS height.
        // This preserves the image's aspect ratio exactly, so object-fit: fill
        // fills the panel without any distortion or cropping.
        var depth = spineImg.naturalWidth / spineImg.naturalHeight * 320;
        book.style.setProperty('--book-depth', depth + 'px');
      }
    };
    // Fire immediately if the image is already cached, otherwise wait for load.
    if (spineImg.complete) { applyDepth(); }
    else { spineImg.addEventListener('load', applyDepth); }
  }

  const spineChildren = [spineImg];
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

  /* Front cover sheet */
  const front = el('div', 'paper__sheet paper__sheet--0');
  front.appendChild(mkImg(coverSrc, 'Cover'));
  paper.appendChild(front);

  /* Edge faces — left and bottom only */
  paper.appendChild(pivot('paper__left-pivot',   'paper__left-panel',   []));
  paper.appendChild(pivot('paper__bottom-pivot', 'paper__bottom-panel', []));

  return paper;
}

/* ── Public API ─────────────────────────────────────────────── */
const builders = { book: buildBook, report: buildReport, paper: buildPaper };

function createMockup(opts) {
  if (!builders[opts.type]) throw new Error('Unknown type: ' + opts.type);
  var resolved = Object.assign({}, opts);
  // Derive hasSpineImage when not explicit: true only when a real dedicated spine
  // was passed (spineSrc set and differs from coverSrc).
  if (resolved.hasSpineImage === undefined) {
    resolved.hasSpineImage = !!(resolved.spineSrc && resolved.spineSrc !== resolved.coverSrc);
  }
  // Normalise spineDepth: accept number or numeric string; null means "auto".
  if (resolved.spineDepth != null) {
    resolved.spineDepth = parseInt(resolved.spineDepth, 10) || null;
  }
  const stage = el('div', 'mockup-stage');
  stage.appendChild(el('div', 'cast-shadow'));
  const scene = el('div', 'scene');
  scene.appendChild(builders[opts.type](resolved));
  stage.appendChild(scene);
  return stage;
}

function init(selector) {
  document.querySelectorAll(selector || '[data-mockup]').forEach(function(stageEl) {
    const type          = stageEl.dataset.mockup;
    const coverSrc      = stageEl.dataset.cover      || '';
    const rawSpineSrc   = stageEl.dataset.spine      || '';  // empty if not explicitly set
    const spineSrc      = rawSpineSrc || coverSrc;           // fallback for rendering
    const hasSpineImage = !!rawSpineSrc;                     // true only when a real spine was supplied
    const rawDepth      = stageEl.dataset.spineDepth  || ''; // optional explicit CSS-px depth
    const spineDepth    = rawDepth ? parseInt(rawDepth, 10) : null;
    const spineLabel    = stageEl.dataset.spineLabel || '';
    const spineColor    = stageEl.dataset.spineColor || '';
    if (!builders[type]) { console.error('[mockups] Unknown type:', type); return; }
    stageEl.innerHTML = '';
    stageEl.appendChild(el('div', 'cast-shadow'));
    const scene = el('div', 'scene');
    scene.appendChild(builders[type]({ coverSrc, spineSrc, hasSpineImage, spineDepth, spineLabel, spineColor }));
    stageEl.appendChild(scene);
  });
}

if (typeof module !== 'undefined' && module.exports) module.exports = { createMockup, init };
if (typeof window !== 'undefined') window.PublicationMockup = { createMockup, init };
