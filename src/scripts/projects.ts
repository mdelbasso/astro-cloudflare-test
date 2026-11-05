// ---- índice de proyectos: filas desplegables ----
const host = document.getElementById('workRows');

if (host) {
  const toggle = (row: HTMLElement) => {
    const detail = row.querySelector<HTMLElement>('.wrow-detail')!;
    const main = row.querySelector<HTMLElement>('.wrow-main')!;
    const open = row.classList.contains('open');
    host.querySelectorAll<HTMLElement>('.wrow.open').forEach((o) => {
      if (o !== row) {
        o.classList.remove('open');
        o.querySelector<HTMLElement>('.wrow-detail')!.style.maxHeight = '';
        o.querySelector('.wrow-main')!.setAttribute('aria-expanded', 'false');
      }
    });
    if (open) {
      row.classList.remove('open');
      detail.style.maxHeight = '';
      main.setAttribute('aria-expanded', 'false');
    } else {
      row.classList.add('open');
      detail.style.maxHeight = detail.querySelector<HTMLElement>('.wrow-detail-in')!.offsetHeight + 'px';
      main.setAttribute('aria-expanded', 'true');
    }
  };
  host.querySelectorAll<HTMLElement>('.wrow-main').forEach((main) => {
    const row = main.parentElement as HTMLElement;
    main.addEventListener('click', () => toggle(row));
    main.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(row);
      }
    });
  });
}
