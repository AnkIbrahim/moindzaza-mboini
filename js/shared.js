/* ═══════════════════════════════════════════════════════
   MOINDZAZA MBOINI — shared.js
   Shared scripts for all pages
═══════════════════════════════════════════════════════ */
'use strict';

/* ── PAGE LOADER ──────────────────────────────────────── */
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader) {
    setTimeout(() => loader.classList.add('out'), 1200);
  }
  initReveal();
});

/* ── PROGRESS BAR ─────────────────────────────────────── */
(function() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const max = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / max * 100) + '%';
  }, { passive: true });
})();

/* ── OCEAN CANVAS BACKGROUND ──────────────────────────── */
(function() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const WAVES = [
    { amp:30, freq:.0072, spd:.011, y:.58, a:.55 },
    { amp:20, freq:.011,  spd:.017, y:.65, a:.38 },
    { amp:40, freq:.005,  spd:.007, y:.72, a:.22 },
    { amp:14, freq:.018,  spd:.023, y:.48, a:.18 },
  ];
  const DOTS = Array.from({length:50}, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random()*1.8+.4,
    sp: Math.random()*.00018+.00004,
    a: Math.random()*.4+.1
  }));

  function draw() {
    ctx.clearRect(0,0,W,H);
    WAVES.forEach(w => {
      ctx.beginPath(); ctx.moveTo(0,H);
      for (let x=0;x<=W;x+=3) {
        const y = w.y*H + Math.sin(x*w.freq + t*w.spd*60)*w.amp
                        + Math.sin(x*w.freq*1.6 + t*w.spd*38)*w.amp*.38;
        ctx.lineTo(x,y);
      }
      ctx.lineTo(W,H); ctx.closePath();
      const g = ctx.createLinearGradient(0,w.y*H-w.amp,0,H);
      g.addColorStop(0,`rgba(19,168,196,${w.a})`);
      g.addColorStop(1,`rgba(4,28,46,0)`);
      ctx.fillStyle=g; ctx.fill();
    });
    DOTS.forEach(d => {
      d.y -= d.sp;
      if (d.y<0){ d.y=1; d.x=Math.random(); }
      ctx.beginPath();
      ctx.arc(d.x*W,d.y*H,d.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(168,230,240,${d.a})`; ctx.fill();
    });
    t += .016;
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── NAVBAR ───────────────────────────────────────────── */
(function() {
  const nav    = document.querySelector('.navbar');
  const ham    = document.getElementById('hamburger');
  const mob    = document.getElementById('mobile-menu');
  if (!nav) return;

  // solid on scroll
  window.addEventListener('scroll', () => {
    nav.classList.toggle('solid', window.scrollY > 50);
  }, { passive: true });

  // Set active link by current page filename
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(l => {
    const href = l.getAttribute('href');
    if (href && href.includes(page)) l.classList.add('active');
  });

  // Hamburger
  if (ham && mob) {
    const setMenuState = (isOpen) => {
      ham.classList.toggle('open', isOpen);
      mob.classList.toggle('show', isOpen);
      ham.setAttribute('aria-expanded', String(isOpen));
      ham.setAttribute('aria-label', isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation');
      ham.setAttribute('title', isOpen ? 'Fermer le menu de navigation' : 'Ouvrir le menu de navigation');
    };

    setMenuState(false);

    ham.addEventListener('click', () => {
      setMenuState(!ham.classList.contains('open'));
    });
    mob.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        setMenuState(false);
      });
    });
  }
})();

/* ── SCROLL REVEAL ────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const delay = e.target.dataset.delay || 0;
      setTimeout(() => e.target.classList.add('up'), +delay);
      io.unobserve(e.target);
    });
  }, { threshold: .12 });
  els.forEach(el => io.observe(el));
}

/* ── COUNTER ANIMATION ────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const dur    = 2000;
  const start  = performance.now();
  const suffix = el.dataset.suffix || '';
  function tick(now) {
    const p = Math.min((now-start)/dur, 1);
    const e = 1 - Math.pow(1-p, 3);
    el.textContent = Math.floor(e*target).toLocaleString('fr-FR') + suffix;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target.toLocaleString('fr-FR') + suffix;
  }
  requestAnimationFrame(tick);
}
(function() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      animateCounter(e.target);
      io.unobserve(e.target);
    });
  }, { threshold:.5 });
  counters.forEach(c => io.observe(c));
})();

/* ── BACK TO TOP ──────────────────────────────────────── */
(function() {
  const btn = document.getElementById('back-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive:true });
  btn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
})();

/* ── RIPPLE ───────────────────────────────────────────── */
document.addEventListener('click', function(e) {
  const btn = e.target.closest('.btn');
  if (!btn) return;
  const r = document.createElement('span');
  const rect = btn.getBoundingClientRect();
  const sz = Math.max(rect.width, rect.height);
  Object.assign(r.style, {
    position:'absolute', width:sz+'px', height:sz+'px',
    borderRadius:'50%', background:'rgba(255,255,255,.22)',
    transform:'scale(0)', animation:'ripple .6s linear',
    left:(e.clientX-rect.left-sz/2)+'px',
    top:(e.clientY-rect.top-sz/2)+'px',
    pointerEvents:'none'
  });
  btn.appendChild(r);
  r.addEventListener('animationend', () => r.remove());
});
(function() {
  const s = document.createElement('style');
  s.textContent = '@keyframes ripple{to{transform:scale(3);opacity:0}}';
  document.head.appendChild(s);
})();

/* ── COOKIE BANNER ────────────────────────────────────── */
(function() {
  const banner = document.getElementById('cookie-banner');
  const btn    = document.getElementById('cookie-accept');
  if (!banner) return;
  if (!localStorage.getItem('cookies-ok')) {
    setTimeout(() => banner.classList.add('show'), 2000);
  }
  if (btn) btn.addEventListener('click', () => {
    localStorage.setItem('cookies-ok','1');
    banner.classList.remove('show');
  });
})();

/* ── SMOOTH ANCHOR SCROLL ─────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 70, behavior:'smooth' });
  });
});

/* ── TILT ON CARDS ────────────────────────────────────── */
if (window.innerWidth > 768) {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width/2)  / (r.width/2);
      const dy = (e.clientY - r.top  - r.height/2) / (r.height/2);
      card.style.transform = `translateY(-6px) rotateX(${-dy*5}deg) rotateY(${dx*5}deg)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}
