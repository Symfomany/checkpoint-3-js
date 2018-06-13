// Define toAlternatingCase() function such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase BUT remove underscore

// For example:

// ```
//     toAlternatingCase("hello world") === "HELLO WORLD"

//     toAlternatingCase("HE_LLO WO_RLD") === "hello world"

//     toAlternatingCase("hello WORLD") === "HELLO world"

//     toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"

//     toAlternatingCase("12345") === null
// ```

function toAlternatingCase(str) {
  const regNum = new RegExp("[1-9]", "g");
  if (regNum.test(str)) {
    return null;
  }
  const regexCase = new RegExp("[a-z]");
  return str
    .split("_")
    .join("")
    .split("")
    .map(elt => (regexCase.test(elt) ? elt.toUpperCase() : elt.toLowerCase()))
    .join("");
}

let test1 = toAlternatingCase("hello world");
let test2 = toAlternatingCase("HE_LLO WO_RLD");
let test3 = toAlternatingCase("hello WORLD");
let test4 = toAlternatingCase("HeLLo WoRLD");
let test5 = toAlternatingCase("12345");

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);
