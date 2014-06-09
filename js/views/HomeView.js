define([
  'backbone',
  'collections/users/usersCollection',
  'text!templates/homeTemplate.html'
], function(Backbone, UserCollection, template){

  var View = Backbone.View.extend({
    el: $("#container"),

    events: {
    },

    initialize: function (options) {
      var that = this,
           onDataHandler = function(collection) {
              that.collection = collection.models[0].attributes.Quizs;
              that.collection = utils.orderListByDate(that.collection, true);
              that.render();
           };

      that.collection = new UserCollection();
      that.collection.fetch({ success : onDataHandler});

      this.bindEvents();

    },

    render: function(){
      var data = {data: this.collection},
          that = this;

      var compiledTemplate = _.template( template, data );
      this.$el.html( compiledTemplate );

    },

    bindEvents: function () {
    },

    unbindEvents: function () {
    },

    clean: function(){
      $(this.el).empty();
      this.unbind();
      this.undelegateEvents();
      this.unbindEvents();
    }

  });

  return View;

});

