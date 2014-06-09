/*
 * grunt-package-environment
 * https://github.com/recipher/grunt-package-environment
 *
 * Copyright (c) 2013 Johnny Hall
 * Licensed under the MIT license.
 */
var utile = require("utile");

"use strict";

var PACKAGE_FILE = "package.json"
  , PACKAGE = "package";

module.exports = function(grunt) {
  grunt.registerTask("package", "Swap package file based on environment", function(environment) {

    var base = JSON.parse(grunt.file.read(PACKAGE + "/" + PACKAGE_FILE));

    if (environment != null) {
      var environmentFile = environment + ".json"
        , environment = JSON.parse(grunt.file.read(PACKAGE + "/" + environmentFile));

      utile.mixin(base, environment);
    }

    grunt.file.write(PACKAGE_FILE, JSON.stringify(base, null, 2));
    grunt.log.ok("Package file swapped to " + (environmentFile || PACKAGE_FILE));
  });
};
