/* Almond Linux homepage: scroll progress for the pinned sections and the story frame. No tracking, no network requests. */
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pinned = [...document.querySelectorAll('[data-p]')];
  const track = document.getElementById('track');
  let ticking = false;

  function measure() {
    if (track) track.style.setProperty('--shift', Math.max(0, track.scrollWidth - track.parentElement.clientWidth));
  }
  function update() {
    ticking = false;
    if (reduce) return;
    const vh = innerHeight;
    for (const s of pinned) {
      const r = s.getBoundingClientRect();
      const travel = r.height - vh;
      const p = travel > 0 ? Math.min(1, Math.max(0, -r.top / travel)) : 0;
      s.style.setProperty('--p', p.toFixed(4));
    }
  }
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  addEventListener('resize', () => { measure(); update(); });
  addEventListener('load', () => { measure(); update(); });
  measure(); update();

  // stories: in each one, the step in the middle of the screen chooses the picture
  document.querySelectorAll('.story').forEach(story => {
    const shots = [...story.querySelectorAll('.screen img')];
    const caption = story.querySelector('.caption');
    const io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const i = +e.target.dataset.shot;
        shots.forEach((img, k) => img.classList.toggle('on', k === i));
        if (caption) caption.textContent = e.target.dataset.name || '';
      }
    }, { rootMargin: '-45% 0px -45% 0px' });
    story.querySelectorAll('.step').forEach(s => io.observe(s));
  });
})();
