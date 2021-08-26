export function fizzbuzz(number: number): number | string {
  return number % 5 === 0 && number % 3 === 0
    ? "Fizz Buzz"
    : number % 5 === 0
    ? "Buzz"
    : number % 3 === 0
    ? "Fizz"
    : number;
}
