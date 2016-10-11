var tape = require('tape');

tape('test api', function (t) {
	t.plan(1);
	t.equal(2, 2);

	t.plan(2);
	t.notEqual('3', 3);

	t.plan(3);
	t.deepLooseEqual({a: 123}, {a: 123});

	t.plan(4);
	t.ok((null == undefined), 'should be true');
	t.plan(5);
	t.true((null == undefined), 'should be true');

	t.plan(6);
	t.notOk((null == false), 'should be false');
	t.plan(7);
	t.false((null == false), 'should be false');
});
