let caesar = (string, key) => {
  let cipher = "";
  for (let i = 0; i < string.length; i++) {
    if (isUpperCase(string[i])) {
      cipher += string[i].replace(/[A-Z]/g, (c) =>
        String.fromCharCode(((c.charCodeAt(0) - 65 + key) % 26) + 65)
      );
    } else if (isLowerCase(string[i])) {
      cipher += string[i].replace(/[a-z]/g, (c) =>
        String.fromCharCode(((c.charCodeAt(0) - 97 + key) % 26) + 97)
      );
    } else {
      cipher += string[i];
    }
  }
  return cipher;
};

function isUpperCase(str) {
  return str === str.toUpperCase();
}

function isLowerCase(str) {
  return str === str.toLowerCase();
}

export default caesar;
