describe("Utility testing", () => {
  test("should validate if there is a J in Jest", () => {
    // arrange and act
    const result = "Jest";

    //assert
    expect(result).toMatch(/J/i);
  });

  test("should check if React is part of the tech stack", () => {
    // arrange and act
    const result = ["angular", "react", "javascript", "typescript"];

    // assert
    expect(result).toContain("react");
  });
});
