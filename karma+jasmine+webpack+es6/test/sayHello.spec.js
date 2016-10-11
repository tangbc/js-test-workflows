import { replyHello } from '../src/person';

describe('karma + jasmine + webpack + es6', function () {

	it('test person replyHello', function () {
		expect(replyHello('Li Lei')).toBe('hello, Li Lei');
	});
});
