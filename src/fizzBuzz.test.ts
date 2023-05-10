import { fizzBuzz } from "./fizzBuzz.js";

describe("Given a fizzBuzz function", () => {
  describe("When it receives 2 and 16", () => {
    test("Then it should return an array of numbers [2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']", () => {
      const expected = [
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
      ];
      const initialIndex = 2;
      const finalIndex = 15;

      const result = fizzBuzz(initialIndex, finalIndex);

      expect(expected).toEqual(result);
    });
  });
});
