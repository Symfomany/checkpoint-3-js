function toAlternatingCase(phrase) {
  const regexMaj = /([A-Z])/;
  if (isNaN(phrase) === false) {
    return null;
  } else {
    const transformation = phrase
      .replace(/_/g, "")
      .split("")
      .map(elt => (regexMaj.test(elt) ? elt.toLowerCase() : elt.toUpperCase()))
      .join("");

    return transformation;
  }
}

const resultat = toAlternatingCase("HE_LLO WO_RLD");
console.log(resultat);

// toAlternatingCase("hello world") === "HELLO WORLD"

// toAlternatingCase("HE_LLO WO_RLD") === "hello world"

// toAlternatingCase("hello WORLD") === "HELLO world"

// toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"

// toAlternatingCase("12345") === null
