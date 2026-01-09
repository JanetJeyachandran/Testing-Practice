function capitalize(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b
};

function caesarCipher(str, shift) {
  return str.replace(/[a-zA-Z]/g, (char) => {
    const base = char >= 'a' && char <= 'z' ? 'a' : 'A';
    return String.fromCharCode(
      ((char.charCodeAt(0) - base.charCodeAt(0) + shift) % 26)
      + base.charCodeAt(0)
    );
  });
}

function analyzeArray(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
