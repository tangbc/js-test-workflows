define(["require", "exports", './sayAge', './sayHello'], function (require, exports, sayAge_1, sayHello_1) {
    "use strict";
    function replyAge(age) {
        return sayAge_1.default(age);
    }
    exports.replyAge = replyAge;
    function replyHello(text) {
        return sayHello_1.default(text);
    }
    exports.replyHello = replyHello;
});
