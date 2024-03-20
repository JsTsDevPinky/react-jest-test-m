const addNumbers = require("../addNumbers");

describe("Calculator tests", () => {
  test("adding 1 + 2 should not equal 3", () => {
    // arrange
    const expected = 5;

    // act
    const result = addNumbers(1, 2);

    // assert
    expect(result).not.toBe(expected);
    expect(result).not.toBeNull();
    expect(result).toBeDefined();
  });
});
