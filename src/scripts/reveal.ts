// ---- reveal ----
const io = new IntersectionObserver(
  (es) => {
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.14, rootMargin: '0px 0px -50px 0px' },
);
// el hero ya es visible por CSS, sin espera de reveal
document.querySelectorAll('.fade,.stag,.draw,.r-line').forEach((el) => {
  if (!el.closest('.hero')) io.observe(el);
});
