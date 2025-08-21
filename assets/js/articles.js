(function(){
  const q = document.getElementById('postSearch');
  const list = document.getElementById('postList');
  const cards = Array.from(list.querySelectorAll('.card'));
  const count = document.getElementById('postCount');
  const empty = document.getElementById('noResults');

  function filter() {
    const term = (q.value || '').trim().toLowerCase();
    let visible = 0;

    cards.forEach(c => {
      if (!term) { c.hidden = false; visible++; return; }
      const t = c.dataset.title, e = c.dataset.excerpt;
      const hit = (t && t.includes(term)) || (e && e.includes(term));
      c.hidden = !hit;
      if (hit) visible++;
    });

    empty.hidden = visible !== 0;
    count.textContent = visible ? `${visible} article${visible>1?'s':''}` : '';
  }

  q.addEventListener('input', filter);
  filter(); // initial
})();