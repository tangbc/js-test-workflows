var sayAge = require('./sayAge');
var sayHello = require('./sayHello');

var person = {
	sayAge: sayAge,
	sayHello: sayHello
}

module.exports = person;
