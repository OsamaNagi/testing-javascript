import calculator from "./calculator";

test("add(4, 2) is 8", () => {
  expect(calculator.add(4, 2)).toBe(6);
});

test("add(-4, 2) is -2", () => {
  expect(calculator.add(-4, 2)).toBe(-2);
});

test("subtract(4, 2) is 2", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("subtract(-4, 2) is -6", () => {
  expect(calculator.subtract(-4, 2)).toBe(-6);
});

test("divide(4, 2) is 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("divide(-4, 2) is -2", () => {
  expect(calculator.divide(-4, 2)).toBe(-2);
});

test("multiply(4, 2) is 8", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

test("multiply(-4, 2) is -8", () => {
  expect(calculator.multiply(-4, 2)).toBe(-8);
});
