define(["require", "exports", '../src/person'], function (require, exports, person_1) {
    "use strict";
    describe('karma + jasmine + webpack + es6', function () {
        it('test person replyHello', function () {
            expect(person_1.replyHello('Li Lei')).toBe('hello, Li Lei');
        });
    });
});
