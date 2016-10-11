define(["require", "exports", '../src/person'], function (require, exports, person_1) {
    "use strict";
    describe('karma + jasmine + webpack + es6', function () {
        it('test person replyAge', function () {
            expect(person_1.replyAge(25)).toBe('I am 25 years old.');
        });
    });
});
