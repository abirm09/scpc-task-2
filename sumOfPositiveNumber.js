const sumOfPositiveNumber = numbers => {
  let sum = 0;
  for (const number of numbers) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
};
const numbers = [2, -5, 10, -3, 7];
const result = sumOfPositiveNumber(numbers);
console.log(result);
