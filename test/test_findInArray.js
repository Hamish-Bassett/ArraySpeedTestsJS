const chai = require('chai');

const findInArray = require('../library/findInArray');

const expect = chai.expect;
const assert = chai.assert;

describe('findInArray', () => {
  it('should be an object', () => {
    expect(findInArray).to.be.an('object');
  });
  it('should have predefined keys', () => {
    expect(findInArray).to.have.keys([
      'forLoop'
    ]);
  });
  describe('methods', () => {
    require('./findInArray/forLoop');
  });
});