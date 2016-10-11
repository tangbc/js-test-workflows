// require all modules which is matching from the current directory and all subdirectories

// There is no need to require src files, everything has been done by webpack!
// const srcsContext = require.context('../src/', true, /\.js$/);
// srcsContext.keys().forEach(srcsContext);

const testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);