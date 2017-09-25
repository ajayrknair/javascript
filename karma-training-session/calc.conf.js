// Karma configuration
// Generated on Mon Dec 19 2016 15:14:13 GMT-0800 (PST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)

        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'scripts/**/*calc*.js',
            'tests/**/*.specs.js',
            'html/**/*.html'
        ],


        // list of files to exclude
        exclude: [
            'scripts/**/*mock*.js'
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '**/*.html': ['html2js'],
            'scripts/**/*.js': [
                'coverage'
            ]
        },

        coverageReporter: {
            dir: 'tests/coverage/',
            reporters: [
                {type: 'html'},
                {type: 'text-summary'}
            ]
        },

        html2JsPreprocessor: {
            // strip this from the file path
            stripPrefix: 'html/',

            // prepend this to the file path
            prependPrefix: 'served/'

            /*// or define a custom transform function
             processPath: function(filePath) {
             // Drop the file extension
             return filePath.replace(/\.html$/, '');
             }*/
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['coverage', 'mocha'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
