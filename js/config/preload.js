define(['jquery'
], function (jquery) {

  var images    = [],
      sounds    = [],
      soundsExtension = $.browser.msie ? '.mp3' : '.wav',
      ulrimages = 'imgs/assets/',
      urlAllied = 'allied/',
      urlGhosts = 'ghosts/',
      urlsounds = 'sounds/';


  return {
    images: images,
    sounds: sounds
  };

})

