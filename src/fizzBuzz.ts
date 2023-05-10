export const fizzBuzz = (intialIndex: number, finalIndex: number) => {
  const listOfNumbers: unknown[] = [];
  for (
    let numbers: number | string = intialIndex;
    numbers <= finalIndex;
    numbers++
  ) {
    listOfNumbers.push(numbers);
    if (numbers % 3 === 0) {
      listOfNumbers.pop();
      listOfNumbers.push("Fizz");
    }

    if (numbers % 5 === 0) {
      listOfNumbers.pop();
      listOfNumbers.push("Buzz");
    }

    if (numbers % 3 === 0 && numbers % 5 === 0) {
      listOfNumbers.pop();
      listOfNumbers.push("FizzBuzz");
    }
  }

  return listOfNumbers;
};

console.log(fizzBuzz(2, 15));
