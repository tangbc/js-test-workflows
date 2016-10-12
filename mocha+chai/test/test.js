var chai = require('chai');
var expect = chai.expect;
var greeting = require('../src/greeting');

describe('mocha + chai', function () {
   it('test greeting', function () {
        expect(greeting('World')).to.equal('hello, World');
   });
});
