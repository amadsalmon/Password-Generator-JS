const numbers = "0123456789";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()_+=[]";

// Returns a random lowercase letter character
function generateRandomUppercaseCharacter() {
    return lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
}

// Returns a random lowercase letter character
function generateRandomUppercaseCharacter() {
    return uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
}

function generateRandomNumberCharacter() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}
  
function generateRandomSymbolCharacter() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function generateRandomPassword(length) {
    var result = "";
    for (let i = 1; i <= length; i++) {
        result += generateRandomUppercaseCharacter();
    }
    return result;
}
export {generateRandomPassword};