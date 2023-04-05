const capitalize = require('./capitalize');

describe('capitalize', () => {
  it('capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('this is a test')).toBe('This is a test');
    expect(capitalize('12345')).toBe('12345');
    expect(capitalize('')).toBe('');
  });
});
