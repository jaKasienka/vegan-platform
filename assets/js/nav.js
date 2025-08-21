(function () {
  const pillar = document.querySelector('.pillar');
  if (!pillar) return;

  const segs = pillar.querySelectorAll('.seg');
  const flys = pillar.querySelectorAll('.fly');

  function closeAll() {
    segs.forEach(s => s.setAttribute('aria-expanded', 'false'));
    flys.forEach(f => f.classList.remove('show'));
  }

  // Hover (desktop)
  segs.forEach(seg => {
    seg.addEventListener('mouseenter', e => {
      const idx = e.currentTarget.dataset.seg;
      closeAll();
      e.currentTarget.setAttribute('aria-expanded','true');
      pillar.querySelector('#fly-' + idx).classList.add('show');
    });
  });
  pillar.addEventListener('mouseleave', closeAll);

  // Click (touch & keyboard users)
  segs.forEach(seg => {
    seg.addEventListener('click', e => {
      const idx = e.currentTarget.dataset.seg;
      const was = e.currentTarget.getAttribute('aria-expanded') === 'true';
      closeAll();
      if (!was) {
        e.currentTarget.setAttribute('aria-expanded','true');
        pillar.querySelector('#fly-' + idx).classList.add('show');
      }
    });
    // Keyboard affordance
    seg.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); seg.click(); }
    });
  });

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
})();