
const toAlternatingCase = str => {
    if (Number(str)) return null;
    return [...str].map(el => /[A-Z]/.test(el) ? el.toLowerCase() : /_/.test(el) ? "" : el.toUpperCase()).join("");
}


console.log(toAlternatingCase("HeLLo WoRLD"));
console.log(toAlternatingCase("hello WORLD"));
console.log(toAlternatingCase("HE_LLO WO_RLD"));