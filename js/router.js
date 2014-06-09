// Filename: router.js
define([
  'backbone',
  'views/homeView'
], function(Backbone, HomeView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'home': 'defaultAction',
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var isDefaultPageViewed = false;

    window.app_router = new AppRouter();

    app_router.on('route:defaultAction', function (actions) {
      if (window.previousView && window.previousView.clean) window.previousView.clean();

      var view = new HomeView();
      window.previousView = view;
      view.render();

      isDefaultPageViewed = true;
    });

    Backbone.history.start();
  };

  return {
    initialize: initialize
  };

});
