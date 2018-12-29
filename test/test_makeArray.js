const chai = require('chai');

const makeArray = require('../library/makeArray');

const expect = chai.expect;

describe('makeArray', () => {
  it('should be an object', () => {
    expect(makeArray).to.be.an('object');
  });
  it('should include a list of our various constructors', () => {
    expect(makeArray).to.have.keys([
      'sparse',
    ]);
  });
  it('should have only functions as members', () => {
    const keys = Object.keys(makeArray);
    keys.forEach((element) => {
      expect(makeArray[element]).to.be.a('function');
    });
  });
  describe('factories', () => {
    require('./makeArray/sparse');
    require('./makeArray/dense');
  });
});