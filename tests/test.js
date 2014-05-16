var expect = require('chai').expect
  , hashbow = require('../index.js');


var person = {
  name: 'Randy Smasher',
  job: 'Stripper',
  banana: true
};

describe('Hashbow', function () {
  it('should turn a String into a hex value', function () {

    var results = hashbow('some-kind-of-string', 60, 50);

    expect(results).to.be.a('string');
    expect(results.charAt(0)).to.equal('#');
    expect(results).to.have.length.within(4, 7);
    expect(results).not.to.have.length(5);
    expect(results).not.to.have.length(6);
  });

  it('should turn an Object into a hex value', function () {

    var results = hashbow(person, 100, 50);

    expect(results).to.be.a('string');
    expect(results.charAt(0)).to.equal('#');
    expect(results).to.have.length.within(4, 7);
    expect(results).not.to.have.length(5);
    expect(results).not.to.have.length(6);
  });

  it('should turn a Number into a hex value', function () {

    var results = hashbow(400, 100, 50);

    expect(results).to.be.a('string');
    expect(results.charAt(0)).to.equal('#');
    expect(results).to.have.length.within(4, 7);
    expect(results).not.to.have.length(5);
    expect(results).not.to.have.length(6);
  });

  it('should turn a Boolean into a hex value', function () {

    var results = hashbow(false, 100, 50);

    expect(results).to.be.a('string');
    expect(results.charAt(0)).to.equal('#');
    expect(results).to.have.length.within(4, 7);
    expect(results).not.to.have.length(5);
    expect(results).not.to.have.length(6);
  });

  it('should turn a Array into a hex value', function () {

    var results = hashbow(['face', person, 90210], 100, 50);

    expect(results).to.be.a('string');
    expect(results.charAt(0)).to.equal('#');
    expect(results).to.have.length.within(4, 7);
    expect(results).not.to.have.length(5);
    expect(results).not.to.have.length(6);
  });
});