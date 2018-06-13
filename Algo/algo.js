// Define toAlternatingCase() function such 
//that each lowercase letter becomes uppercase 
//and each uppercase letter becomes lowercase 
//BUT remove underscore

// For example:

// ```
//     toAlternatingCase("hello world") === "HELLO WORLD"

//     toAlternatingCase("HE_LLO WO_RLD") === "hello world"

//     toAlternatingCase("hello WORLD") === "HELLO world"

//     toAlternatingCase("HeLLo WoRLD") === "hEllO wOrld"

//     toAlternatingCase("12345") === null

function toAlternatingCase(chaine) {

    const regex = new RegExp("_", "g")
    const chaine2 = chaine.replace(regex, "")
    if (isNaN(chaine2)) {
        let Alternate = chaine2.split('').map(elt => {
            return elt === elt.toUpperCase()
                ? elt.toLowerCase()
                : elt.toUpperCase()
        }).join('')
        return Alternate
    } else {
        return null
    }
}

let test = toAlternatingCase("HeLLo WoRLD")
console.log(test);