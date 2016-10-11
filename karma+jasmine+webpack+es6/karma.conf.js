// karma.conf.js
var path = require('path');

module.exports = function (config) {
	config.set({
		// The root path location that will be used to resolve all relative paths defined in files and exclude.
		// If the basePath configuration is a relative path,
		// then it will be resolved to the __dirname of the configuration file.
		// https://karma-runner.github.io/1.0/config/configuration-file.html
		basePath: '',

		// List of test frameworks you want to use.
		// Please note just about all frameworks in Karma require
		// an additional plugin/framework library to be installed (via NPM).
		// https://karma-runner.github.io/1.0/config/configuration-file.html
		frameworks: ['jasmine'],

		// Capturing browsers on your own can be a tedious and time-consuming task,
		// so Karma can automate this for you.
		// https://karma-runner.github.io/1.0/config/browsers.html
		browsers: ['Chrome'],

		// The files array determines which files are included in the browser
		// and which files are watched and served by Karma.
		// https://karma-runner.github.io/1.0/config/files.html
		files: [
			'./test/index.js'
		],

		// Preprocessors allow you to do some work with your files before they get served to the browser.
		// https://karma-runner.github.io/1.0/config/preprocessors.html
		preprocessors: {
			'./test/index.js': ['webpack']
		},

		// webpack config
		webpack: {
			module: {
				// coverage post loader
				postLoaders: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						include: path.resolve('src'),
						loader: 'istanbul-instrumenter'
					}
				],
				loaders: [
					{
						test: /\.js$/,
						loader: 'babel',
						exclude: /node_modules/,
						query: {
							presets: ['es2015']
						}
					}
				]
			}
		},

		// Do not show webpack bundle status
		webpackMiddleware: {
			noInfo: true
		},

		// If true, Karma will start and capture all configured browsers,
		// run tests and then exit with an exit code of 0 or 1
		// depending on whether all tests passed or any tests failed.
		// https://karma-runner.github.io/1.0/config/configuration-file.html
		singleRun: true,

		// A list of reporters to use.
		// https://karma-runner.github.io/1.0/config/configuration-file.html
		// https://github.com/mlex/karma-spec-reporter
		reporters: ['spec', 'coverage'],

		// Optionally, configure the reporter, only use when installed karma-coverage
		// https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
		coverageReporter: {
			reporters: [
				{ type: 'text' },

				// @TODO
				// When generate the html-report, coverage will throw an error:
				// [TypeError: Cannot read property 'text' of undefined]
				// Obviously, the error occur in generating the src html-report files
				// I think maybe something broken in karma-coverage when we using karma-webapck
				// { type: 'html', dir:'./coverage/', subdir: '.' }
			]
		}
	});
};
