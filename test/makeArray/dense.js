const chai = require('chai');

const dense = require('../../library/makeArray/dense');

const expect = chai.expect;

describe('dense', () => {
  const key = 'this is the key';
  const length = Math.round(Math.random() * 1000);
  const res = dense({
    length,
    key,
  });
  it('should be a function', () => {
    expect(dense).to.be.a('function');
  });
  it('should return an array', () => {
    expect(dense({
      length: 1,
    })).to.be.an('array');
  });
  it('should be able to produce an array of arbitrary length', () => {
    expect(res).to.have.lengthOf(length);
  });
  it('randomly selected elements should not be null.', () => {
    for (let count = 0; count < 100; count++) {
      const rand = Math.round(Math.random(length) * length);
      console.log(`rand is: ${rand}`)
      console.log(`random element is: ${res[rand]}`);
      expect(res[rand]).to.not.be.undefined;      
    }
  });
  it('should have the key in it', () => {
    expect(res).to.include(key);
  });
});