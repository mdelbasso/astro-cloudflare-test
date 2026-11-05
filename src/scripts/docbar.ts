// ---- docbar hide on scroll down ----
const docbar = document.getElementById('docbar');
if (docbar) {
  let lastY = 0;
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      docbar.classList.toggle('hide', y > lastY && y > 200);
      lastY = y;
    },
    { passive: true },
  );
}
