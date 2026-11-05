// ---- count up (resultados) ----
const countIO = new IntersectionObserver(
  (es) => {
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target as HTMLElement;
      const target = Number(el.dataset.count);
      const suf = el.dataset.suffix || '';
      const start = performance.now();
      const dur = 1100;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const e2 = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(e2 * target) + suf;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  },
  { threshold: 0.5 },
);
document.querySelectorAll('[data-count]').forEach((el) => countIO.observe(el));
