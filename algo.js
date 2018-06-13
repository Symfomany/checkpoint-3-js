// ```
// Define toAlternatingCase() function such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase BUT remove underscore
// ```

const toAlternatingCase = string => {
  const regexUnderscore = new RegExp("_", "g");
  const regexNumber = new RegExp(/\d+/, "g");
  const result = [...string.replace(regexUnderscore, "")].map(element => {
    return element.toUpperCase() === element
      ? element.toLowerCase()
      : element.toUpperCase();
  });
  return result.some(element => regexNumber.test(element))
    ? null
    : result.join("");
};

console.log(toAlternatingCase("hello world")); // === "HELLO WORLD"
console.log(toAlternatingCase("HE_LLO WO_RLD")); // === "hello world"
console.log(toAlternatingCase("hello WORLD")); // === "HELLO world"
console.log(toAlternatingCase("HeLLo WoRLD")); // === "hEllO wOrld"
console.log(toAlternatingCase("12345")); // === null
