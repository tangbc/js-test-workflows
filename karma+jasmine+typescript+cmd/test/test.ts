import { greeting } from '../src/greeting';

describe('karma + jasmine + typescript + cmd', () => {

	it('test greeting', () => {
		expect(greeting('World')).toBe('hello, World');
	});
});
