// karma.conf.js

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
			'./src/*.js',
			'./test/*.js'
		],

		// If true, Karma will start and capture all configured browsers,
		// run tests and then exit with an exit code of 0 or 1
		// depending on whether all tests passed or any tests failed.
		// https://karma-runner.github.io/1.0/config/configuration-file.html
		singleRun: false,

		// Enable or disable watching files and executing the tests whenever one of these files changes.
		// If singleRun is true, autoWatch is disable whatever it's true or false
		autoWatch: true,

		// A list of reporters to use.
		// https://karma-runner.github.io/1.0/config/configuration-file.html
		// https://github.com/mlex/karma-spec-reporter
		reporters: ['spec', 'coverage'],

		// Preprocessors allow you to do some work with your files before they get served to the browser.
		// https://karma-runner.github.io/1.0/config/preprocessors.html
		preprocessors: {
			'./src/*.js': ['coverage']
		},

		// Optionally, configure the reporter, only use when installed karma-coverage
		// https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
		coverageReporter: {
			reporters: [
				{ type: 'text-summary' },
				{ type: 'html', dir:'./coverage/', subdir: '.' }
			]
		}
	});
};
