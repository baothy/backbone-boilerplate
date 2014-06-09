// Require.js allows us to configure shortcut alias
require.config({
  // urlArgs: "bust=" + (new Date()).getTime(),
  paths: {
    async: 'libs/require/async',
    jquery: 'libs/jquery/jquery-min',
    lodash: 'libs/lodash/lodash.min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone',
    hhtml5Preloader: 'plugins/html5preloader/html5Preloader',
    jqueryAjaxTransportXdomainRequest: 'plugins/jqueryAjaxTransportXdomainRequest/jquery.xdomainrequest.min',
    templates: '../templates',
    config: 'config/config',
    preload: 'config/preload'
  },
  shim: {
    backbone: {
        deps: ['jquery','lodash'],
        exports: 'Backbone'
    },
    jqueryAjaxTransportXdomainRequest: {
      deps: ['jquery'],
      exports: 'JqueryAjaxTransportXdomainRequest'
    }
  }
});

require([
  // Load our app module and pass it to our definition function
  'app'

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();

});
