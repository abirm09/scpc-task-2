function twoNumberSum(arr, target) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  for (let left = 0, right = arr.length - 1; left < right; ) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

// Test the function
const sortedArray = [1, 3, 6, 8, 11, 15, 34, 66, 77, 23, 90];
const targetValue = 100;
const result = twoNumberSum(sortedArray, targetValue);
console.log(result); // Output: [0, 2] (because 2 + 7 = 9, and their indices are 0 and 2 in the array)
