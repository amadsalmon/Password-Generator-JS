const numbers = "0123456789";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()_+=[]";

// Returns an int, pseudo-random number between 0 (inclusive) and max (exclusive).
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  
// Returns a random lowercase letter character
function generateRandomUppercaseCharacter() {
    return lowercaseLetters[getRandomInt(lowercaseLetters.length)];
}

// Returns a random lowercase letter character
function generateRandomUppercaseCharacter() {
    return uppercaseLetters[getRandomInt(uppercaseLetters.length)];
}

function generateRandomNumberCharacter() {
    return numbers[getRandomInt(numbers.length)];
}
  
function generateRandomSymbolCharacter() {
    return symbols[getRandomInt(symbols.length)];
}
}

function generateRandomPassword(length) {
    var result = "";
    for (let i = 1; i <= length; i++) {
        result += generateRandomUppercaseCharacter();
    }
    return result;
}
export {generateRandomPassword};