const newUser = require("../newUser");

describe("Check the creation of a new user", () => {
  test("should create a new user object with name John Doe", () => {
    // arrange and act
    const result = newUser();

    // assert
    expect(result).toEqual({
      firstName: "John",
      lastName: "Doe",
    });
  });
});
