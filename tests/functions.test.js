import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "../src/functions.js";

test("capitalize first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("calculator add", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("calculator subtract", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("calculator multiply", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test("calculator divide", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("caesarCipher basic shift", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("caesarCipher wraps z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesarCipher preserves case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesarCipher keeps punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyzeArray results", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
