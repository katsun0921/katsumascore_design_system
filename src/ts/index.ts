import '../scss/index.scss';
import { preloader } from './preloader/preloader';
import { clickHamburgerMenu } from './hamburgerMenu/hamburgerMenu';
import { changeClassWhenResizeOnNavigation } from './navigation/';

window.addEventListener('load', function () {
  preloader();
  changeClassWhenResizeOnNavigation();
  const menuButton = document.querySelector('#js-menu-button');
  if (!!menuButton) {
    menuButton.addEventListener('click', function () {
      clickHamburgerMenu();
    });
  }
});
window.addEventListener('resize', function () {
  changeClassWhenResizeOnNavigation();
});
