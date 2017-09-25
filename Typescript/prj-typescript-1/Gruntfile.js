module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ts: {
            default : {
                src: ["./**/*.ts", "!./node_modules/**"],
                dest: "./js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');

    // Default task(s).
    grunt.registerTask('build', ['ts'])

};