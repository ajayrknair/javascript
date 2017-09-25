module.exports = function (grunt) {
    grunt.config('clean', {
        files: [
            '<%= appConfig.tmp %>',
            '<%= appConfig.dist %>'
        ]
    });
};

