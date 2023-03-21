import '../scss/index.scss';
import { preloader } from './preloader/preloader';
import { clickHamburgerMenu } from './hamburgerMenu/hamburgerMenu';
import { removeClassOnResize } from './navigation/resize';

preloader();

window.addEventListener('load', function () {
  clickHamburgerMenu();
  removeClassOnResize();
});
