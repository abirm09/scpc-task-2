const mostFrequent = arr => {
  const count = {};
  for (const item of arr) {
    count[item] = count[item] ? count[item] + 1 : 1;
  }
  let mostFrequent = count[0];
  let maxCount = 1;
  for (const item in count) {
    if (count[item] > maxCount) {
      mostFrequent = item;
      maxCount = count[item];
    }
  }
  return mostFrequent;
};
const numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = mostFrequent(numbers);
console.log(result);
