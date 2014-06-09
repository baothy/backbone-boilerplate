// Filename: app.js
define([
  'backbone',
  'router',
  'config'
], function(Backbone, Router, config) {
  var initialize = function(){
    // Pass in our Router module and call it's initialize function
    Router.initialize();

  };

  return {
    initialize: initialize
  };
});
