import { fizzbuzz } from "./fizzbuzz";

test("fizzbuzz return a number or a string based on the input number", () => {
  expect(fizzbuzz(1)).toBe(1);
  expect(fizzbuzz(15)).toBe("Fizz Buzz");
  expect(fizzbuzz(3)).toBe("Fizz");
  expect(fizzbuzz(5)).toBe("Buzz");
  expect(fizzbuzz(1031)).toBe(1031);
});
