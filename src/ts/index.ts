import '../scss/index.scss';
import { preloader } from './preloader/preloader';
import { clickHamburgerMenu } from './hamburger-menu/hamburger-menu';

preloader();

window.addEventListener('load', function () {
  clickHamburgerMenu();
});
