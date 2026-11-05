// ---- colofón: la página mide su propio peso (Resource Timing) ----
const el = document.getElementById('liveWeight');

if (el) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      try {
        const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
        const res = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
        let bytes = (nav && nav.transferSize) || 0;
        res.forEach((r) => {
          bytes += r.transferSize || r.decodedBodySize || 0;
        });
        const reqs = 1 + res.length;
        const ms = nav ? Math.max(0, Math.round(nav.loadEventEnd - nav.startTime)) : 0;
        if (bytes > 0 && ms > 0) {
          const kb = Math.max(1, Math.round(bytes / 1024));
          const { weight, reqs: reqsLbl, load } = el.dataset;
          el.innerHTML = `<span class="live">${kb} KB</span> ${weight} · <span class="live">${reqs}</span> ${reqsLbl} · ${load} <span class="live">${ms} ms</span>`;
        }
      } catch (e) {
        /* si la API no está disponible, queda "Midiendo…" */
      }
    }, 150);
  });
}
