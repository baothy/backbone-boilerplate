define([
  'backbone',
  'config'
], function(Backbone, config) {

  var UserModel = Backbone.Model.extend({

    initialize: function(model, options) {
    },

    defaults : {
    },

    url : function() {
      return config.services.getUser;
    }

  });

  return UserModel;
});
