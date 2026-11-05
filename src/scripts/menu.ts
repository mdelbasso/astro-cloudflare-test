// ---- mobile menu (hamburger) ----
const hbBtn = document.getElementById('hamburgerBtn');
const mMenu = document.getElementById('mobileMenu');

if (hbBtn && mMenu) {
  const closeMenu = () => {
    mMenu.classList.remove('open');
    hbBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  const openMenu = () => {
    mMenu.classList.add('open');
    hbBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  hbBtn.addEventListener('click', () => {
    mMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  mMenu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1040) closeMenu();
  });
}
