const numbers = "0123456789";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()_+=[]";

// Returns an int, pseudo-random number between 0 (inclusive) and max (exclusive).
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  
// Returns a random lowercase letter character
function generateRandomLowercaseCharacter() {
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

function generateRandomCharacter() {
    switch (getRandomInt(4)) {
        case 0:
            return generateRandomLowercaseCharacter();
        case 1:
            return generateRandomUppercaseCharacter();
        case 2:
            return generateRandomNumberCharacter();
        case 3:
            return generateRandomSymbolCharacter();
    }
}

function generateRandomPassword(length) {
    var result = "";
    for (let i = 1; i <= length; i++) {
        result += generateRandomCharacter();
    }
    return result;
}
export {generateRandomPassword};