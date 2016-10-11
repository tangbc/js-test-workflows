var person = require('../src/person');

describe('karma + jasmine + commonjs', function () {

	it('test person sayHello', function () {
		expect(person.sayHello('Li Lei')).toBe('hello, Li Lei');
	});

	it('test person sayAge', function () {
		expect(person.sayAge(25)).toBe('I am 25 years old.');
	});
});
