module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-less');


  grunt.initConfig({
  	less: {
  		style: {
  			files: {
  				"css/style.css": "less/style.less"
  			}
  		}
  	},
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ["less/**/.less"],
      tasks: ["less", "postcss"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);

};
