var tests = [];
var regSpec = /\.spec\.js$/;
var $karma = window.__karma__ = window.__karma__ || {};
for (var file in $karma.files) {
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
