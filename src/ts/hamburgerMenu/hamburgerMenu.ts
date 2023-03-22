export const clickHamburgerMenu = () => {
  const menuButton = document.querySelector('#js-menu-button');
  const menu = document.querySelector('#js-mobile-menu');
  if (!menuButton || !menu) return;
  menuButton.classList.toggle('change-line');
  menu.classList.toggle('u-opacity-0');
  menu.classList.toggle('open-menu');
};
