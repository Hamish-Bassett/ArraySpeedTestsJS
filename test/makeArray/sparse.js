const chai = require('chai');

const sparse = require('../../library/makeArray/sparse');

const expect = chai.expect;

describe('sparse', () => {
  const key = 'this is the key';
  const length = Math.round(Math.random() * 1000);
  const res = sparse({
    length,
    key,
  });
  it('should be a function', () => {
    expect(sparse).to.be.a('function');
  });
  it('should return an array', () => {
    expect(sparse({
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