module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    uglify: {
      my_target: {
        files: {
          'dest/js/output.min.js': ['src/js/*.js']
        },
        OR_files: [{
          expand: true,
          cwd: 'src/js',
          src: '**/*.js',
          dest: 'dest/js'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          sourcemap: 'none',
        },
        files: [{
          expand: true,
          cwd: 'src/sass',
          src: ['*.scss'],
          dest: 'dest/css',
          ext: '.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-string-replace');
  // https://www.npmjs.com/package/grunt-string-replace
  grunt.loadNpmTasks('grunt-html-build');
  // https://github.com/spatools/grunt-html-build

  grunt.registerTask('extras', ['uglify', 'sass']);
  grunt.registerTask('default', ['jshint', 'extras']);
};