# grunt-package-environment

**Swap package.json depending on environment**

## Installation

Install npm package, next to your project's `grunt.js` file:

    npm install grunt-package-environment --save-dev

Add this line to your project's `Gruntfile.js`:

    grunt.loadNpmTasks("grunt-package-environment");


## Usage

Store complete package.json files in the package folder in the root of your application.

````
grunt package
>> Use default package/package.json

grunt package:develop
>> Use package/develop.json

grunt package:test
>> Use package/test.json

grunt package:staging
>> Use package/staging.json

grunt package:production
>> Use package/production.json
````