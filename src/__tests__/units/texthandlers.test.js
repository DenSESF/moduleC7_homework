import { reverseString } from "../../units/texthandlers.js";

describe('Tests for reverseString function', () => {
  it('"Hello" reverse string to be "olleH', () => {
    expect(reverseString('Hello')).toBe('olleH');
  });
  it('Invalid type argument return undefine', () => {
    expect(reverseString(123456789)).toBeUndefined();
  });
});
