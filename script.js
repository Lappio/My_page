const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
const yearNode = document.querySelector('#year');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('open');
    }
  });
}

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
