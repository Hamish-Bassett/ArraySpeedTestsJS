const chai = require('chai');

const forLoop = require('../../library/findInArray/forLoop');

const expect = chai.expect;

const key = 'foo';
const test = [
  ,
  ,
  ,
  key,
  ,

];


describe('forLoop', () => {
  it('should be a function', () => {
    expect(forLoop).to.be.a("function");
  });
  it('should fail if the input is not valid', () => {
    expect(()=>{
      forLoop();
    }).to.throw();
    expect(()=>{
      forLoop(undefined ,'foo');
    }).to.throw();
    expect(()=>{
      forLoop(1 ,'foo');
    }).to.throw();
    expect(()=>{
      forLoop('fail' ,'foo');
    }).to.throw();
    expect(()=>{
      forLoop({} ,'foo');
    }).to.throw();
  });
  it('should return a boolean', ()=>{
    expect(forLoop(test,key)).to.be.a("boolean");
  });
  it('should return true if the key exists in the array',()=>{
    expect(forLoop(test,key)).to.be.true;
  });
  it('should return false if the key exists in the array',()=>{
    expect(forLoop(test,'fail')).to.be.false;
  });
});