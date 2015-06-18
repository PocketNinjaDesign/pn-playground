module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      //files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      files: ['Gruntfile.js', 'src/js/*.js', 'test/**/*.js'],
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

    sass: {
      dist: {
        options: {
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'src/sass',
          src: ['*.scss'],
          dest: 'dest/css',
          ext: '.css'
        }]
      }
    },

    uglify: {
      options: {
        mangle: {
          except: ['jQuery']
        }
      },
      my_target: {
        _files: {
          'dest/js/output.min.js': ['src/js/egg.js', 'src/js/cheese.js']
        },
        files: [{
          expand: true,
          cwd: 'src/js',
          src: '*.js',
          dest: 'dest/js'
        }]
      }
    },

    copy: {
      main: {
        files: [{
          // HTML files

          expand: true,
          cwd: 'src/',
          src: ['*'],
          dest: 'dest/',
          filter: 'isFile'
        }, {
          // Javascript vendor files

          expand: true,
          cwd: 'src/js/vendor/',
          src: ['*'],
          dest: 'dest/js/vendor/',
          filter: 'isFile'
        }, {
          // Image files

          expand: true,
          cwd: 'src/sass/img',
          src: ['**'],
          dest: 'dest/css/img/',
          filter: 'isFile'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  //https://github.com/gruntjs/grunt-contrib-copy
  grunt.loadNpmTasks('grunt-contrib-copy');

  // https://www.npmjs.com/package/grunt-string-replace
  grunt.loadNpmTasks('grunt-string-replace');

  // https://github.com/spatools/grunt-html-build
  grunt.loadNpmTasks('grunt-html-build');

  grunt.registerTask('extras', ['uglify', 'sass', 'copy']);
  grunt.registerTask('default', ['jshint', 'extras']);
};