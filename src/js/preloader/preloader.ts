export const preloader = () => {
  return window.addEventListener('load', () => {
    var didDone = false;
    function done() {
      if (!didDone) {
        didDone = true;
        const pageLoaderPro = document.querySelector('#page-loader-pro');
        const preloader = document.querySelector('#js-preloader');
        if (!!pageLoaderPro)
          return pageLoaderPro.classList.add('finished-loading');
        if (!!preloader)
          return preloader.classList.add('progression-preloader-completed');
      }
    }
    var loaded = false;
    var minDone = false;
    //The minimum timeout.
    setTimeout(function () {
      minDone = true;
      //If loaded, fire the done callback.
      if (loaded) {
        done();
      }
    }, 400);
    //The maximum timeout.
    setTimeout(function () {
      done();
    }, 2000);
    //Bind the load listener.
    window.addEventListener('load', function () {
      loaded = true;
      if (minDone) {
        done();
      }
    });
  });
};
