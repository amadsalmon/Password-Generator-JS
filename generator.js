const numbers = "0123456789";
const lowercases = "abcdefghijklmnopqrstuvwxyz";
const uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()_+=[]";

// Returns an int, pseudo-random number between 0 (inclusive) and max (exclusive).
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
  
// Returns a random lowercase letter character (from the lowercases array)
function generateRandomLowercaseCharacter() {
    return lowercases[getRandomInt(lowercases.length)];
}

// Returns a random lowercase letter character (from the uppercases array)
function generateRandomUppercaseCharacter() {
    return uppercases[getRandomInt(uppercases.length)];
}

// Returns a random number character (from the symbols array)
function generateRandomNumberCharacter() {
    return numbers[getRandomInt(numbers.length)];
}

// Returns a random symbol character (from the symbols array)
function generateRandomSymbolCharacter() {
    return symbols[getRandomInt(symbols.length)];
}

// Returns a random character from the given array array
function generateRandomCharacterFromArray(array) {
    return array[getRandomInt(array.length)];
}

function generateRandomCharacter(usableCharactersArray) {
    var arrayIndex = getRandomInt(usableCharactersArray.length);
    return generateRandomCharacterFromArray(usableCharactersArray[arrayIndex]);
}

function generateRandomPassword(length, includeNumbers, includeUppercaseCharacters, includeLowercaseCharacters, includeSymbols) {
    var usableCharactersArray = [];
    if (includeNumbers) {
        usableCharactersArray.push(numbers);
    }
    if (includeUppercaseCharacters) {
        usableCharactersArray.push(uppercases);
    }
    if (includeLowercaseCharacters) {
        usableCharactersArray.push(lowercases);
    }
    if (includeSymbols) {
        usableCharactersArray.push(symbols);
    }

    var result = "";
    for (let i = 1; i <= length; i++) {
        result += generateRandomCharacter(usableCharactersArray);
    }
    return result;
}
export {generateRandomPassword};