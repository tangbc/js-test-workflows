var tape = require('tape');
var greeting = require('../src/greeting');

tape('test greeting', function (t) {
	t.plan(1);
	t.equal(greeting('World'), 'hello, World');
});
