define([
  'backbone',
  'config'
  // 'models/ghosts/ghostModel'
], function(Backbone, config){

  var Collection = Backbone.Collection.extend({

      // model: GhostModel,

      initialize: function(models, options) {
        // Assign the Deferred issued by fetch() as a property
        this.deferred = this.fetch();
      },

      url : function() {
        return config.services.getUsersLIst;
      }

  });

  return Collection;

});