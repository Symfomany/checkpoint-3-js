function toAlternatingCase(str) {
  const string = str.replace(/[^a-z ]+/gi, "");
  if (string.length === 0) return null;
  return string
    .split("")
    .map(
      letter =>
        letter === letter.toUpperCase()
          ? letter.toLowerCase()
          : letter.toUpperCase()
    )
    .join("");
}

module.exports = toAlternatingCase;
