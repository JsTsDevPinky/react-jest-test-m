const getUser = require("../getUser");

describe("Testing API calls", () => {
  test("fetched user should be of id 9 with name Delphine", async () => {
    // arrange and act
    const result = await getUser();

    // assert
    expect(result.username).toBe("Delphine");
    expect(result.id).toBe(9);
  });
});
