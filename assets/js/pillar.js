// /assets/js/pillar.js
(function () {
  const pillar = document.querySelector('.pillar');
  if (!pillar) return;

  const segs = pillar.querySelectorAll('.seg');
  const flys = pillar.querySelectorAll('.fly');

  function closeAll() {
    flys.forEach(f => f.classList.remove('show'));
    segs.forEach(b => b.setAttribute('aria-expanded','false'));
  }

  function openFor(btn){
    const id = btn.getAttribute('aria-controls');
    const fly = pillar.querySelector('#' + id);
    if (!fly) return;
    closeAll();
    btn.setAttribute('aria-expanded','true');
    fly.classList.add('show');
  }

  // Open on hover/focus
  segs.forEach(btn => {
    btn.addEventListener('mouseenter', () => openFor(btn));
    btn.addEventListener('focus',      () => openFor(btn));
    // Tap/click toggles for touch
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const open = btn.getAttribute('aria-expanded') === 'true';
      if (open) { closeAll(); } else { openFor(btn); }
    });
  });

  // IMPORTANT: close only when leaving the WHOLE pillar,
  // not when leaving the small icon (so you can reach the flyout)
  pillar.addEventListener('mouseleave', closeAll);

  // Esc closes
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });
})();