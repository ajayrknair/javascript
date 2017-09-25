module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            target: {
                mangle: false,
                files: {
                    'build/demo.min.js': ['scripts/**/*.js']
                }
            }
        },
        karma: {
            unit: {
                configFile: 'demo.conf.js'
            }
        }

    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    //grunt.registerTask('default', ['karma', 'uglify']);

    grunt.registerTask('unit', ['karma']);

    grunt.registerTask('build', ['unit', 'uglify']);
}