/* ═══════════════════════════════════════════════
   inner.js — Shared inner page scripts
═══════════════════════════════════════════════ */
'use strict';

/* ── COMITÉ STATS CARD ──────────────────────── */
(function() {
  const card = document.querySelector('.comite-stats-card');
  if (!card) return;
  const style = document.createElement('style');
  style.textContent = `
    .comite-stats-card {
      border-radius: var(--radius-lg);
      padding: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 28px;
      box-shadow: var(--shadow-lg);
    }
    .csc-item { text-align: center; }
    .csc-num {
      display: block;
      font-family: var(--font-display);
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 700;
      color: var(--aqua);
      line-height: 1;
    }
    .csc-lbl {
      font-size: .62rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: rgba(184,234,242,.6);
      margin-top: 8px;
      display: block;
    }
  `;
  document.head.appendChild(style);
})();

/* ── PRESIDENT CARD ─────────────────────────── */
(function() {
  const el = document.querySelector('.president-card');
  if (!el) return;
  const style = document.createElement('style');
  style.textContent = `
    .president-card {
      display: grid;
      grid-template-columns: 180px 1fr;
      gap: 40px;
      align-items: center;
      background: linear-gradient(135deg, var(--deep), var(--ocean));
      border-radius: var(--radius-lg);
      padding: 40px;
      color: var(--white);
      position: relative;
      overflow: hidden;
      margin-bottom: 12px;
    }
    .president-card::after {
      content: '';
      position: absolute; right: -40px; bottom: -40px;
      width: 220px; height: 220px;
      border-radius: 50%;
      background: rgba(45,212,232,.07);
      animation: bob 4s ease-in-out infinite;
    }
    .pc-avatar {
      width: 160px; height: 160px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--current), var(--lagoon));
      display: flex; align-items: center; justify-content: center;
      font-size: 3.5rem;
      box-shadow: 0 12px 36px rgba(0,0,0,.3);
      flex-shrink: 0;
    }
    .pc-info h3 {
      font-family: var(--font-display);
      font-size: clamp(1.5rem, 2.5vw, 2rem);
      color: var(--white);
      margin-bottom: 6px;
    }
    .pc-info p {
      font-size: .88rem;
      color: var(--foam);
      opacity: .85;
      line-height: 1.8;
      margin: 12px 0 20px;
    }
    .pc-badges { display: flex; flex-wrap: wrap; gap: 10px; }
    .pc-badge {
      font-size: .65rem; letter-spacing: 1px;
      padding: 6px 14px;
      background: rgba(255,255,255,.1);
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 50px;
      color: var(--foam);
    }
    @media(max-width:600px) {
      .president-card { grid-template-columns: 1fr; text-align: center; }
      .pc-avatar { margin: 0 auto; width: 120px; height: 120px; font-size: 2.5rem; }
      .pc-badges { justify-content: center; }
    }
  `;
  document.head.appendChild(style);
})();

/* ── PROJECTS LIST ──────────────────────────── */
(function() {
  const el = document.querySelector('.projects-list');
  if (!el) return;
  const style = document.createElement('style');
  style.textContent = `
    .projects-list { display: flex; flex-direction: column; gap: 16px; max-width: 900px; margin: 0 auto; }
    .proj-item {
      display: flex; gap: 20px; align-items: flex-start;
      background: var(--white); border-radius: var(--radius);
      padding: 22px 24px; border: 1px solid var(--border);
      box-shadow: var(--shadow-sm); transition: all .3s;
    }
    .proj-item:hover { transform: translateX(6px); box-shadow: var(--shadow); }
    .pi-icon {
      width: 48px; height: 48px; border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.3rem; flex-shrink: 0;
      box-shadow: 0 6px 18px rgba(0,0,0,.15);
    }
    .pi-body { flex: 1; }
    .pi-body h4 { font-family: var(--font-display); font-size: 1.05rem; color: var(--deep); margin-bottom: 6px; }
    .pi-body p { font-size: .83rem; color: var(--muted); line-height: 1.75; margin-bottom: 10px; }
    .pi-status { font-size: .65rem; letter-spacing: 2px; text-transform: uppercase; padding: 4px 12px; border-radius: 50px; }
    .pi-status.done     { background: rgba(58,143,92,.12); color: #2d7040; }
    .pi-status.progress { background: rgba(19,168,196,.1);  color: var(--ocean); }
    .pi-status.planned  { background: rgba(212,162,76,.1);  color: #8a6010; }
  `;
  document.head.appendChild(style);
})();

/* ── UPCOMING MATCHES / EVENTS ─────────────── */
(function() {
  const el = document.querySelector('.upcoming-list');
  if (!el) return;
  const style = document.createElement('style');
  style.textContent = `
    .upcoming-list { display: flex; flex-direction: column; gap: 14px; }
    .upcoming-item {
      display: flex; gap: 16px; align-items: center;
      background: var(--white); border-radius: var(--radius);
      padding: 16px 18px; border: 1px solid var(--border);
      box-shadow: var(--shadow-sm); transition: all .3s;
    }
    .upcoming-item:hover { transform: translateX(4px); box-shadow: var(--shadow); }
    .ui-date {
      display: flex; flex-direction: column; align-items: center;
      min-width: 48px;
    }
    .uid-day  { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--ocean); line-height: 1; }
    .uid-month{ font-size: .6rem; letter-spacing: 2px; text-transform: uppercase; color: var(--muted); }
    .ui-info  { flex: 1; }
    .ui-info h4 { font-family: var(--font-display); font-size: .95rem; color: var(--deep); margin-bottom: 3px; }
    .ui-info p  { font-size: .75rem; color: var(--muted); margin-bottom: 3px; }
    .ui-venue   { font-size: .7rem; color: var(--lagoon); }
    .ui-badge {
      font-size: .58rem; letter-spacing: 1.5px; text-transform: uppercase;
      padding: 5px 10px; border-radius: 50px; white-space: nowrap;
      font-weight: 700;
    }
    .ui-badge.home  { background: rgba(19,168,196,.15); color: var(--ocean); }
    .ui-badge.away  { background: rgba(212,162,76,.15);  color: #8a6010; }
    .ui-badge.final { background: rgba(224,96,80,.15);   color: #9a2010; }
  `;
  document.head.appendChild(style);
})();

/* ── SCORES LIST ────────────────────────────── */
(function() {
  const el = document.querySelector('.scores-list');
  if (!el) return;
  const style = document.createElement('style');
  style.textContent = `
    .scores-list { background: var(--white); border-radius: var(--radius-lg); padding: 8px 24px; border: 1px solid var(--border); box-shadow: var(--shadow-sm); }
  `;
  document.head.appendChild(style);
})();

/* ── IMPACT BAR ANIMATION ───────────────────── */
(function() {
  const fills = document.querySelectorAll('.ib-fill[data-width]');
  if (!fills.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.style.width = e.target.dataset.width + '%';
      io.unobserve(e.target);
    });
  }, { threshold: .4 });
  fills.forEach(f => io.observe(f));
})();

/* ── FORM SUBMIT ───────────────────────────── */
(function() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = form.querySelector('.btn');
      const success = form.querySelector('.form-success') || document.getElementById('contact-success');
      if (btn) { btn.textContent = 'Envoi…'; btn.style.opacity = '.7'; btn.style.pointerEvents = 'none'; }
      setTimeout(() => {
        if (btn) { btn.style.opacity = '1'; btn.style.pointerEvents = ''; btn.textContent = 'Envoyer le message 🌊'; }
        if (success) { success.classList.add('show'); setTimeout(() => success.classList.remove('show'), 6000); }
        form.reset();
      }, 1600);
    });
  });
})();

/* ── FAQ ACCORDION ──────────────────────────── */
(function() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
})();
