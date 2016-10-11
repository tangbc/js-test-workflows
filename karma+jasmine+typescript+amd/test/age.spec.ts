import { replyAge } from '../src/person';

describe('karma + jasmine + webpack + es6', () => {

	it('test person replyAge', () => {
		expect(replyAge(25)).toBe('I am 25 years old.');
	});
});
