module.exports = (config) => {
  config.set({
    // The root path location that will be used to resolve all relative paths defined in files and exclude.
    // If the basePath configuration is a relative path,
    // then it will be resolved to the __dirname of the configuration file.
    // https://karma-runner.github.io/2.0/config/configuration-file.html
    basePath: '',

    // List of test frameworks you want to use.
    // Please note just about all frameworks in Karma require
    // an additional plugin/framework library to be installed (via NPM).
    // https://karma-runner.github.io/2.0/config/configuration-file.html
    frameworks: ['jasmine'],

    // Capturing browsers on your own can be a tedious and time-consuming task,
    // so Karma can automate this for you.
    // https://karma-runner.github.io/2.0/config/browsers.html
    browsers: ['Chrome'],

    // If true, Karma will start and capture all configured browsers,
    // run tests and then exit with an exit code of 0 or 1
    // depending on whether all tests passed or any tests failed.
    // https://karma-runner.github.io/2.0/config/configuration-file.html
    singleRun: true,

    // A list of reporters to use.
    // https://karma-runner.github.io/2.0/config/configuration-file.html
    // https://github.com/mlex/karma-spec-reporter
    reporters: ['spec'],

    // ... normal karma configuration
    files: ['test/index.js'],

    preprocessors: {
      // add webpack as preprocessor
      'test/index.js': ['webpack', 'sourcemap']
    },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies
      module: {
        rules: [
          {
            loader: 'babel-loader',
            test: /\.js$/,
            query: {
              presets: [['env']],
              plugins : [
                ["transform-runtime", {
                    "helpers": false,
                    "polyfill": false,
                    "regenerator": true,
                    "moduleName": "babel-runtime",
                    "useESModules": true,
                }],
                "transform-class-properties",
                "transform-es3-property-literals",
                "transform-es3-member-expression-literals",
              ]
            },
        }
        ]
      },

      // webpack configuration
      devtool: 'inline-source-map'
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  })
}
