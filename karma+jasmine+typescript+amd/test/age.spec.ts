import { replyAge } from '../src/person';

describe('karma + jasmine + webpack + es6', function () {

	it('test person replyAge', function () {
		expect(replyAge(25)).toBe('I am 25 years old.');
	});
});
