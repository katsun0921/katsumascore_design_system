export const clickHamburgerMenu = () => {
  const menuButton = document.querySelector('#js-menu-button');
  const menu = document.querySelector('#js-mobile-menu');
  if (!menuButton || !menu) return;
  menuButton.classList.toggle('menu-open');
  menu.classList.toggle('u-hidden');
};
