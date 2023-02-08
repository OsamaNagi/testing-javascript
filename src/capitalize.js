const capitalize = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] == string[i].toUpperCase() &&
      string[i] != string[i].toLowerCase()
    )
      return string;
    else if (
      string[i] == string[i].toLowerCase() &&
      string[i] != string[i].toUpperCase()
    ) {
      let newString =
        string.slice(0, i) +
        string[i].toUpperCase() +
        string.slice(i + 1, string.length + 1);

      return newString;
    }
  }
  return "nah";
};

export default capitalize;
