var greeting = require('../src/greeting');

test('test greeting function', () => {
	expect(greeting('Kobe')).toBe('hello, Kobe');
});
