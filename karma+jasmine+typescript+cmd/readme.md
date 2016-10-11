## karma+jasmine+typescript+cmd

* Test runner: karma
* Test framework: jasmine
* Need to install Chrome on your computer
* All `src` and `test` code write by `TypeScript`


## Get start

All the `*.ts` source code need compile to javascript first, then run in Test-runner. By default, `TypeScript` compile module as `commonjs`, so here use `karma-commonjs`.

1. `cd karma+jasmine+typescript+cmd`

2. `npm install`

3. `npm run build`

4. `npm run test`


## Test result
```
  typescript unit test
    ✓ test greeting

Chrome 53.0.2785 (Mac OS X 10.12.0): Executed 1 of 1 SUCCESS (0.044 secs / 0.005 secs)
TOTAL: 1 SUCCESS


=============================== Coverage summary ===============================
Statements   : 100% ( 6/6 )
Branches     : 100% ( 2/2 )
Functions    : 100% ( 2/2 )
Lines        : 100% ( 4/4 )
================================================================================
```


## Documents

* [TypeScript](http://www.typescriptlang.org/docs/tutorial.html)
* [karma](https://karma-runner.github.io/1.0/config/configuration-file.html)
* [karma-coverage](https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md)
* [karma-spec-reporter](https://github.com/mlex/karma-spec-reporter)
* [karma-commonjs](https://github.com/karma-runner/karma-commonjs)
* [jasmine](https://jasmine.github.io/2.5/introduction.html)


## Author

[TANG](https://github.com/tangbc)
