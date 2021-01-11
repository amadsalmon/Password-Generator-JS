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
    var generatedPassword = generateRandomPassword(length);
    generatedPasswordTextField.value = generatedPassword;
}

function copyButtonClicked() {
    /* Select the text field */
    generatedPasswordTextField.select(); 
    generatedPasswordTextField.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
}
