const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator', () => {
    describe('add', () => {
      it('adds two numbers', () => {
        expect(add(2, 3)).toEqual(5);
      });
    });
  
    describe('subtract', () => {
      it('subtracts two numbers', () => {
        expect(subtract(5, 2)).toEqual(3);
      });
    });
  
    describe('multiply', () => {
      it('multiplies two numbers', () => {
        expect(multiply(4, 2)).toEqual(8);
      });
    });
  
    describe('divide', () => {
      it('divides two numbers', () => {
        expect(divide(10, 5)).toEqual(2);
      });
    });
  });