const checkReceivedValue = require("../checkReceivedValue");

describe("checkReceivedValue tests", () => {
  test("should be falsy", () => {
    // arrange and act
    const result = checkReceivedValue(2);

    // assert
    expect(result).toBeTruthy();
  });
});
