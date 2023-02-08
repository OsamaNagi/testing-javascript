import analyzeArray from "./analyzeArray";

test("normal number array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    ave: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});
