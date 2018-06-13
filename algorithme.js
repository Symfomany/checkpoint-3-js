function toAlternatingCase(string) {
  const result = [];
  Array.from(string).map(element => {
    if (/_|\d/.test(element)) {
      return null;
    } else {
      if (element === " ") {
        result.push(element);
      } else {
        element === element.toUpperCase()
          ? result.push(element.toLowerCase())
          : result.push(element.toUpperCase());
      }
    }
  });
  result.length === 0 ? console.log(null) : console.log(result.join(""));
}

toAlternatingCase("hello world"); // "HELLO WORLD"
toAlternatingCase("HE_LLO WO_RLD"); //"hello world"
toAlternatingCase("hello WORLD"); // "HELLO world"
toAlternatingCase("HeLLo WoRLD"); //"hEllO wOrld"
toAlternatingCase("12345"); // null
