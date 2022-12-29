(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-products]'),
    closeMenuBtn: document.querySelector('[data-products-close]'),
    menu: document.querySelector('[data-menu-products]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.menu__list'),
    burgerBtn: document.querySelector('.menu__button'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.burgerBtn.addEventListener('click', removeMenu);
  refs.menuList.addEventListener('click', removeMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  function removeMenu() {
    refs.menu.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();