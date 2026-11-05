// ---- gauges (medidores Lighthouse) ----
const scoreColor = (s: number) => (s >= 90 ? 'var(--ink)' : s >= 50 ? 'var(--avg)' : 'var(--poor)');
const C = 2 * Math.PI * 52;

const gaugeIO = new IntersectionObserver(
  (es) => {
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      const g = e.target as HTMLElement;
      const score = Number(g.dataset.score);
      const arc = g.querySelector<SVGCircleElement>('.gauge-arc')!;
      const num = g.querySelector<HTMLElement>('.gauge-num')!;
      const col = scoreColor(score);
      arc.style.stroke = col;
      num.style.color = col;
      arc.style.strokeDasharray = String(C);
      arc.style.strokeDashoffset = String(C);
      requestAnimationFrame(() => {
        arc.style.strokeDashoffset = String(C * (1 - score / 100));
      });
      const start = performance.now();
      const dur = 1200;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const e2 = 1 - Math.pow(1 - p, 3);
        num.textContent = String(Math.round(e2 * score));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      gaugeIO.unobserve(g);
    });
  },
  { threshold: 0.5 },
);
document.querySelectorAll('.gauge').forEach((g) => gaugeIO.observe(g));
