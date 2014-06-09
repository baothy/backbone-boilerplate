(function() {

  var proxiedSync = Backbone.sync;

  Backbone.sync = function(method, model, options) {
    options || (options = {});

    if (typeof options.crossdomain === 'undefined') {
      options.crossDomain = true;
    }

    if (!options.xhrFields) {
      options.xhrFields = {withCredentials:true};
    }

    return proxiedSync(method, model, options);
  };
})();
