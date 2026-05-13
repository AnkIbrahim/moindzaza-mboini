/* home.js — Hero canvas + particles */
'use strict';

/* Hero canvas waves */
(function() {
  const c = document.getElementById('hero-canvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  let W, H, t = 0;
  function resize() { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; }
  resize(); window.addEventListener('resize', resize);
  const W_DEF = [
    {amp:50,freq:.006,spd:.009,y:.7,a:.35},
    {amp:30,freq:.01, spd:.015,y:.78,a:.25},
    {amp:65,freq:.004,spd:.006,y:.85,a:.18},
  ];
  function draw() {
    ctx.clearRect(0,0,W,H);
    W_DEF.forEach(w => {
      ctx.beginPath(); ctx.moveTo(0,H);
      for (let x=0;x<=W;x+=4) {
        const y = w.y*H + Math.sin(x*w.freq+t*w.spd*60)*w.amp + Math.sin(x*w.freq*1.8+t*w.spd*40)*w.amp*.3;
        ctx.lineTo(x,y);
      }
      ctx.lineTo(W,H); ctx.closePath();
      const g = ctx.createLinearGradient(0,w.y*H-w.amp,0,H);
      g.addColorStop(0,`rgba(45,212,232,${w.a})`); g.addColorStop(1,`rgba(4,28,46,0)`);
      ctx.fillStyle=g; ctx.fill();
    });
    t+=.016; requestAnimationFrame(draw);
  }
  draw();
})();

/* Hero floating bubbles */
(function() {
  const p = document.getElementById('hero-particles');
  if (!p) return;
  for (let i=0;i<28;i++) {
    const b = document.createElement('div');
    const s = Math.random()*14+4;
    Object.assign(b.style, {
      position:'absolute', width:s+'px', height:s+'px', borderRadius:'50%',
      background:`rgba(45,212,232,${Math.random()*.2+.04})`,
      border:'1px solid rgba(45,212,232,.25)',
      left:Math.random()*100+'%', top:Math.random()*100+'%',
      animation:`bubUp ${Math.random()*9+7}s ease-in-out ${Math.random()*5}s infinite`,
      pointerEvents:'none'
    });
    p.appendChild(b);
  }
  const s = document.createElement('style');
  const r = ()=>(Math.random()-.5)*50;
  s.textContent=`@keyframes bubUp{0%,100%{transform:translate(0,0) scale(1);opacity:.5}40%{transform:translate(${r()}px,${r()}px) scale(1.2);opacity:.85}70%{transform:translate(${r()}px,${r()}px) scale(.9);opacity:.4}}`;
  document.head.appendChild(s);
})();
