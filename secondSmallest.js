const secondSmallest = numbers => numbers.sort((a, b) => a - b)[1];
const numbers = [56, 44, 16, 23, 90];
const result = secondSmallest(numbers);
console.log(result);
