import { fizzbuzzsequence } from "./fizzbuzz";

test("fizzbuzz return a number or a string based on the input number", () => {
  expect(fizzbuzzsequence(1)).toBe(2);
  expect(fizzbuzzsequence(15)).toBe(16);
  expect(fizzbuzzsequence(3)).toBe(4);
  expect(fizzbuzzsequence(5)).toBe("Fizz");
  expect(fizzbuzzsequence(1031)).toBe("Fizz");
  expect(fizzbuzzsequence(0)).toBe(1);
  expect(fizzbuzzsequence(14)).toBe("Fizz-Buzz");
  expect(fizzbuzzsequence(2)).toBe("Fizz");
  expect(fizzbuzzsequence(4)).toBe("Buzz");
  expect(fizzbuzzsequence(1030)).toBe(1031);
});
