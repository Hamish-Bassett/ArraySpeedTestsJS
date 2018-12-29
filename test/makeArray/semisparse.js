const chai = require('chai');

const semisparse = require('../../library/makeArray/semisparse');

const expect = chai.expect;

describe('semisparse', () => {
  const key = 'this is the key';
  const length = Math.round(Math.random() * 1000);
  const res = semisparse({
    length,
    key,
  });
  it('should be a function', () => {
    expect(semisparse).to.be.a('function');
  });
  it('should return an array', () => {
    expect(semisparse({
      length: 1,
    })).to.be.an('array');
  });
  it('should be able to produce an array of arbitrary length', () => {
    expect(res).to.have.lengthOf(length);
  });
  it('should have the key in it', () => {
    expect(res).to.include(key);
  });
});