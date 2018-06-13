function onlyLetterOrSpace(sentence) {
  const regex = new RegExp("[a-z]+", "i");
  return [...sentence].filter(elt => regex.test(elt)).join("");
}


function toAlternatingCase(sentence) {
  if (sentence === "" || !isNaN(sentence)) {
    return null;
  }
  let justLetterAndSpace = onlyLetterOrSpace(sentence);
  let result = [...justLetterAndSpace]
    .map(
      letter =>
        letter === letter.toLowerCase()
          ? letter.toUpperCase()
          : letter.toLowerCase()
    )
    .join("");

  return result;
}

console.log(toAlternatingCase("hello world"));
//=== "HELLO WORLD"

console.log(toAlternatingCase("HE_LLO WO_RLD"));
// //=== "hello world";

console.log(toAlternatingCase("hello WORLD"));
// // === "HELLO world";

console.log(toAlternatingCase("HeLLo WoRLD"));
// //     === "hEllO wOrld";

console.log(toAlternatingCase("12345"));
// // === null;

