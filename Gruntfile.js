module.exports = function(grunt) {
	var appConfig = {
		app: require('./bower.json').appPath || 'client'
	};

	grunt.initConfig({

		config: appConfig,

		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'client/css/style.css' : 'sass/style.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},
		nodemon: {
			dev: {
				script: 'bin/www'
			}
		},
		concurrent: {
			dev: {
				tasks: ['nodemon',  'watch','imagemin'],
				options: {
					logConcurrentOutput: true
				}
			}
		},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.client %>/images',
					src: '{,*/}*.{png,jpg,jpeg,gif}',
					dest: '<%= config.dist %>/images'
				}]
			}
		},

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-nodemon');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default',['concurrent']);
}