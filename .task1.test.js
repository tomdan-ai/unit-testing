const stringLength = require('./task1')

describe("stringLength", () => {
    it("should return the length of a valid string", () => {
      const string = "Testing";
      expect(stringLength(string)).toBe(7);
    });
  
    it("should throw an error if the string is longer than 10 characters", () => {
      const string = "This is too long";
      expect(() => stringLength(string)).toThrow("Cannot exceed ten characters!");
    });
  });