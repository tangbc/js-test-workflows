// Declare __karma__ property on window
interface Window {
	__karma__: any;
}

let tests = [];
let regSpec = /\.spec\.js$/;
let $karma = window.__karma__ = window.__karma__ || {};

for (let file in $karma.files) {
	if ($karma.files.hasOwnProperty(file)) {
		if (regSpec.test(file)) {
			tests.push(file);
		}
	}
}

requirejs.config({
	baseUrl: '',

	// Declare alias path
	paths: {},

	// Ask `require.js` to load all tests files
	deps: tests,

	// Start test run, once require.js is done
	callback: $karma.start
});