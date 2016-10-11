## karma + jasmine + typescript + amd

* Test runner: karma
* Test framework: jasmine
* Need to install Chrome on your computer
* All `src` and `test` code write by `TypeScript`


## Get start

All the `*.ts` source code need compile to javascript first, then run in Test-runner. In this test workflow, we set the TypeScript `complieOption.module` to `amd`, so we should handle all the `amd` javascript files, we use `karma-requirejs` plugin.

1. `cd karma+jasmine+typescript+amd`

2. `npm install`

3. `npm run build`

4. `npm run test`


## Test result
```
  karma + jasmine + webpack + es6
    ✓ test person replyAge
    ✓ test person replyHello

Chrome 53.0.2785 (Mac OS X 10.12.0): Executed 2 of 2 SUCCESS (0.016 secs / 0.003 secs)
TOTAL: 2 SUCCESS


=============================== Coverage summary ===============================
Statements   : 100% ( 17/17 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 7/7 )
Lines        : 100% ( 17/17 )
================================================================================
```


## Documents

* [TypeScript](http://www.typescriptlang.org/docs/tutorial.html)
* [karma](https://karma-runner.github.io/1.0/config/configuration-file.html)
* [karma-coverage](https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md)
* [karma-spec-reporter](https://github.com/mlex/karma-spec-reporter)
* [karma-requirejs](https://karma-runner.github.io/0.8/plus/RequireJS.html)
* [jasmine](https://jasmine.github.io/2.5/introduction.html)


## Author

[TANG](https://github.com/tangbc)
