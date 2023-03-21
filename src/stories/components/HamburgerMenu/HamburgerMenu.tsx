import { clickHamburgerMenu } from '../../../ts/hamburgerMenu/hamburgerMenu';
import '@/scss/object/component/_hamburgerMenu.scss';

type THamburgerMenuProps = {
  label: string;
};

export const HamburgerMenu = ({ label }: THamburgerMenuProps) => {
  return (
    <button
      type="button"
      id="js-menu-button"
      className="c-hamburgerMenu"
      onClick={() => clickHamburgerMenu()}
    >
      <span className="c-hamburgerMenu__lineContainer">
        <span className="c-hamburgerMenu__line"></span>
        <span className="c-hamburgerMenu__line"></span>
        <span className="c-hamburgerMenu__line"></span>
      </span>
      <span className="c-hamburgerMenu__label">{label}</span>
    </button>
  );
};
