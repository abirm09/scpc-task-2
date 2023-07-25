const passwordGenerator = passwordLength => {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const number = "1234567890";
  const specialCharacter = "@#$%!~?><(){}[]+-/&*";
  const allCharacters = alpha + alpha.toUpperCase() + number + specialCharacter;
  let password = "";
  for (let i = 0; i <= passwordLength - 1; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }
  return password;
};

const result = passwordGenerator(16);
console.log(result);
