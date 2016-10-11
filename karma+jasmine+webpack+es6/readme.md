## karma + jasmine + webpack + es6

* Test runner: karma
* Test framework: jasmine
* Need to install Chrome on your computer
* All `src` and `test` code support es6 features
* All code bundle by `webpack` and compile by `babel-loader`


## Get start

1. `cd karma+jasmine+webpack+es6`

2. `npm install`

3. `npm run test`


## Test result
```
 karma + jasmine + webpack + es6
    ✓ test person replyAge
    ✓ test person replyHello

Chrome 53.0.2785 (Mac OS X 10.12.0): Executed 2 of 2 SUCCESS (0.01 secs / 0.005 secs)
TOTAL: 2 SUCCESS

--------------|----------|----------|----------|----------|----------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------|----------|----------|----------|----------|----------------|
 src/         |      100 |       75 |      100 |      100 |                |
  person.js   |      100 |       75 |      100 |      100 |                |
  sayAge.js   |      100 |      100 |      100 |      100 |                |
  sayHello.js |      100 |      100 |      100 |      100 |                |
--------------|----------|----------|----------|----------|----------------|
All files     |      100 |       75 |      100 |      100 |                |
--------------|----------|----------|----------|----------|----------------|
```


## Documents

DevDependencies documents:

* [karma](https://karma-runner.github.io/1.0/config/configuration-file.html)
* [karma-webpack](https://github.com/webpack/karma-webpack)
* [istanbul-instrumenter-loader](https://github.com/deepsweet/istanbul-instrumenter-loader)
* [karma-coverage](https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md)
* [karma-spec-reporter](https://github.com/mlex/karma-spec-reporter)
* [jasmine](https://jasmine.github.io/2.5/introduction.html)


## Author

[TANG](https://github.com/tangbc)


## Todo

In `karma.conf.js` about line 80, there is an error when generating the `html` report:

```javascript
coverageReporter: {
	reporters: [
		// @TODO
		// When generate the html-report, coverage will throw an error:
		// [TypeError: Cannot read property 'text' of undefined]
		// Obviously, the error occur in generating the src html-report files
		// I think maybe something broken in karma-coverage when we using karma-webapck
		// { type: 'html', dir:'./coverage/', subdir: '.' }
	]
}
```

This problem is not solved at present, looking forward to your answer or contribution!
