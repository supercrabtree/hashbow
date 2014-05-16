var expect = require('chai').expect
  , hashbow = require('../index.js');

describe('Hashbow', function () {
  it('should turn the item into a hexadecimal string', function () {
    var results = hashbow('face', 60, 50);
    expect(results).to.be.a('string');
    expect(results).to.equal('#33cc70');
  })
});