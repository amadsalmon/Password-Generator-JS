import { generateRandomPassword } from  './generator.js';

const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generateButtonClicked);

const copyButton = document.getElementById("copy-button");
copyButton.addEventListener("click", copyButtonClicked);

const lengthSelector = document.getElementById("length-selector");
var length = lengthSelector.value;

const generatedPasswordTextField = document.getElementById("generated-password");

function generateButtonClicked() {
    length = lengthSelector.value;
    var includeNumbers = document.getElementById("include-numbers-checkbox").checked;
    var includeUppercaseCharacters = document.getElementById("include-uppercase-characters-checkbox").checked;
    var includeLowercaseCharacters = document.getElementById("include-lowercase-characters-checkbox").checked;
    var includeSymbols = document.getElementById("include-symbols-checkbox").checked;
    
    if (checkValidOptions(includeNumbers, includeUppercaseCharacters, includeLowercaseCharacters, includeSymbols)) {
        var generatedPassword = generateRandomPassword(length, includeNumbers, includeUppercaseCharacters, includeLowercaseCharacters, includeSymbols);
        generatedPasswordTextField.value = generatedPassword;
    } else {
        alert("You must choose at least one of the options.");
    }
}

function copyButtonClicked() {
    /* Select the text field */
    generatedPasswordTextField.select(); 
    generatedPasswordTextField.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
}

function checkValidOptions(includeNumbers, includeUppercaseCharacters, includeLowercaseCharacters, includeSymbols) { 
    return includeNumbers + includeUppercaseCharacters + includeLowercaseCharacters + includeSymbols >= 1;
}