// import { test } from "./app";
const test = require('./app');
// Generated by CodiumAI

describe('test', () => {
        // Returns the input multiplied by 10 when given a valid integer input.
        it('should return the input multiplied by 10 when given a valid integer input', () => {

            expect(test(5)).toBe(50);
            
          });
          it('should return NaN when given a string input', () => {
            expect(test('abc')).toBeNaN();
            expect(test('123')).toBeNaN();
          });

}); 