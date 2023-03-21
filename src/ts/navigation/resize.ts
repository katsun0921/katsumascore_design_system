export const changeClassOnResize = () => {
  const navigation = document.querySelector('.l-navigation');
  const navigationList = document.querySelector('.l-navigation__list');
  const mediaQuery = window.matchMedia('(min-width: 1024px)');

  if (!navigation || !navigationList) return;
  const showDesktop = () => {
    navigation.classList.add('l-navigation--isDesktop');
    navigationList.classList.remove('u-opacity-0');
  };
  const showMobile = () => {
    navigation.classList.remove('l-navigation--isDesktop');
    navigationList.classList.add('u-opacity-0');
  };
  if (mediaQuery.matches) {
    showDesktop();
  } else {
    showMobile();
  }
  const checkAndRemoveClass = () => {
    if (mediaQuery.matches) {
      showDesktop();
    } else {
      showMobile();
    }
  };
  checkAndRemoveClass();
};
