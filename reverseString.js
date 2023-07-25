const reverseString = str => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str.charAt(i);
  }
  return reversed;
};
const result = reverseString("This is a string.");
console.log(result);
