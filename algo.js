function toAlternatingCase(str) {
    if (isNaN(str)) {
        return [...str]
            .filter(elt => elt !== "_")
            .map(elt => {
                if (elt === elt.toUpperCase()) {
                    return elt.toLowerCase()
                } else {
                    return elt.toUpperCase()
                }
            })
            .join("")
    } else {
        return null
    }
}

console.log(toAlternatingCase("123567"))