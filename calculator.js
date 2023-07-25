const calculator = (num1, operator, num2) => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let result = "";
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    result = "Something went wrong.";
  }
  return result;
};
const result = calculator("23", "/", "5");
console.log(result);
