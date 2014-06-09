module.exports = function(grunt) {

grunt.initConfig({
  less: {
	production: {
		files: [{
                expand: true,        // Enable dynamic expansion.
                cwd: 'less',  // Src matches are relative to this path.
                src: ['all.less'],     // Actual pattern(s) to match.
                dest: 'css',  // Destination path prefix.
                ext: '.css'         // Dest filepaths will have this extension.
            },{
                expand: true,        // Enable dynamic expansion.
                cwd: 'less_mobile',  // Src matches are relative to this path.
                src: ['all.less'],     // Actual pattern(s) to match.
                dest: 'css_mobile',  // Destination path prefix.
                ext: '.css'         // Dest filepaths will have this extension.
            }]
      },
      build: {
          files: [{
                    expand: true,        // Enable dynamic expansion.
                    cwd: 'less',  // Src matches are relative to this path.
                    src: ['all.less'],     // Actual pattern(s) to match.
                    dest: 'css',  // Destination path prefix.
                    ext: '.css'         // Dest filepaths will have this extension.
                },{
                    expand: true,        // Enable dynamic expansion.
                    cwd: 'less_mobile',  // Src matches are relative to this path.
                    src: ['all.less'],     // Actual pattern(s) to match.
                    dest: 'css_mobile',  // Destination path prefix.
                    ext: '.css'         // Dest filepaths will have this extension.
                }]
        }
	},

		watch: {
			files: ['less/*', 'less_mobile/*'],
			tasks: ['less']
		}
	});

 grunt.loadNpmTasks('grunt-contrib-less');
 grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-global-config');
  grunt.loadNpmTasks("grunt-package-environment");
  grunt.loadNpmTasks('grunt-contrib-copy');

	// Default task.
  grunt.registerTask('default', ['watch']);

};