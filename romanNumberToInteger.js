const romanNumberToInteger = input => {
  input = input.toLowerCase();
  const romanNumbers = {
    i: 1,
    ii: 2,
    iii: 3,
    iv: 4,
    v: 5,
    vi: 6,
    vii: 7,
    viii: 8,
    ix: 9,
    x: 10,
  };
  let integer = "";
  for (let romanNumber in romanNumbers) {
    if (romanNumber === input) {
      integer = romanNumbers[romanNumber];
    }
  }

  return integer;
};
const result = romanNumberToInteger("x");
console.log(result);
