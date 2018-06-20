function toAlternatingCase(str) {
  const regexStr = [...str.replace(/[_]/g, " ")];
  const changeStr = regexStr.map(
    x => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase())
  );
  const newStr = changeStr.join("");
  const regexNumber = /[0-9]+/g;
  const numberStr = newStr.match(regexNumber) == newStr ? null : newStr;

  console.log(numberStr);
}

// toAlternatingCase("hello world");
// toAlternatingCase("HE_LLO WO_RLD");
// toAlternatingCase("hello WORLD");
toAlternatingCase("HeLLo WoRLD");
//toAlternatingCase("12345");

// if (!isNaN(str)) {
// return null;
// }
