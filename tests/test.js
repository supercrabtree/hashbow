var expect = require('chai').expect
  , hashbow = require('../index.js');


var person = {
  name: 'Randy Smasher',
  job: 'Stripper',
  banana: true
};

function personFunction() {
  return person;
}

function isValidHexColor(thingToTest) {
  var results = hashbow(thingToTest, 100, 50);

  expect(results).to.be.a('string');
  expect(results.charAt(0)).to.equal('#');
  expect(results).to.have.length(7);
}

describe('Hashbow', function () {
  it('should turn a Boolean into a hex value', function () {
    [true, false].forEach(isValidHexColor);
  });

  it('should turn a String into a hex value', function () {
    ['', 'george', 'bananan', '\n\t@##$&*()*(^&*%^&*'].forEach(isValidHexColor);
  });

  it('should turn an Object into a hex value', function () {
    [person, {}].forEach(isValidHexColor);
  });

  it('should turn a Number into a hex value', function () {
    [Number.MAX_VALUE, -500, 0, 10, 402434].forEach(isValidHexColor);
  });

  it('should turn a Array into a hex value', function () {
    [['asdf', person, {}, -2], []].forEach(isValidHexColor);
  });

  it('should turn a Function into a hex value', function () {
    [function () {}, personFunction].forEach(isValidHexColor);
  });

  it('should turn null into a hex value', function () {
    [null].forEach(isValidHexColor);
  });

  it('should turn a RegExp into a hex value', function () {
    [new RegExp(), new RegExp(/[a]/)].forEach(isValidHexColor);
  });
});