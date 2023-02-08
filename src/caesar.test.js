import caesar from "./caesar";

test('"aaabbbccc" becomes "bbbcccddd"', () => {
  expect(caesar("aaabbbccc", 1)).toBe("bbbcccddd");
});

test('"aAabBbzZz" becomes "bBbcCcaAa"', () => {
  expect(caesar("aAabBbzZz", 1)).toBe("bBbcCcaAa");
});

test('"a1ab#bc c" becomes "b1bc#cd d"', () => {
  expect(caesar("a1ab#bc c", 1)).toBe("b1bc#cd d");
});
