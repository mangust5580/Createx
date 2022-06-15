export const nav = () => {
  const mainNav = document.querySelector('.main-nav');
  const btnMenuOpen = mainNav.querySelector('[data-open-menu]');
  const btnMenuClose = mainNav.querySelector('[data-close-menu]');
  const mainNavWrapper = mainNav.querySelector('.main-nav__wrapper');

  const openMenu = () => {
    mainNavWrapper.classList.add('main-nav__wrapper--show');
  };

  const hideMenu = () => {
    mainNavWrapper.classList.remove('main-nav__wrapper--show');
  };

  btnMenuOpen.addEventListener('click', openMenu);
  btnMenuClose.addEventListener('click', hideMenu);

	window.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape' && mainNavWrapper.classList.contains('main-nav__wrapper--show')) {
      hideMenu();
    }
  });
};
