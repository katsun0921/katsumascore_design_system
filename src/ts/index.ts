import '../scss/index.scss';
import { preloader } from './preloader/preloader';
import { clickHamburgerMenu } from './hamburgerMenu/hamburgerMenu';
import { changeClassWhenResizeOnNavigation } from './navigation/';

preloader();

window.addEventListener('load', function () {
  clickHamburgerMenu();
  changeClassWhenResizeOnNavigation();
});
