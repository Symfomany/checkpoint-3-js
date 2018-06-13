let toAlternatingCase = arg1 => {
  if (/\d/.test(arg1)) {
    return null;
  }
  const a = arg1.replace(/_/g, "");

  let b = a
    .split("")
    .map(elt => {
      return elt === elt.toUpperCase() ? elt.toLowerCase() : elt.toUpperCase();
    })
    .join("");

  return b;
};

toAlternatingCase("helLo");
