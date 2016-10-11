import { replyHello } from '../src/person';

describe('karma + jasmine + webpack + es6', () => {

	it('test person replyHello', () => {
		expect(replyHello('Li Lei')).toBe('hello, Li Lei');
	});
});
