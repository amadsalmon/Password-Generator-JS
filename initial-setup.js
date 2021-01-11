import { generateRandomPassword } from  './generator.js';

// Automatically fill the length selector's options
fillLengthOptions();

// Automatically generate strong password when page opens
document.getElementById("generated-password").value = generateRandomPassword(16);

/* This functions fills the length selector's options with values ranging from 1 to 128. */
function fillLengthOptions() {
    var select = document.getElementById("length-selector");
    var option;

    // Create "Weak" separator
    var optionGroup = document.createElement('optgroup');
    optionGroup.setAttribute('label', "Weak");
    select.appendChild(optionGroup);

    var i = 0;
    for (i = 1; i <= 128; i++) {
        option = document.createElement('option');
        option.setAttribute('value', i);
        option.appendChild(document.createTextNode(i));
        if (i == 16) {
            // Create "Strong" separator
            optionGroup = document.createElement('optgroup');
            optionGroup.setAttribute('label', "Strong");
            select.appendChild(optionGroup);
            // Make option "16" selected by default.
            option.setAttribute('selected', "selected");
        }
        optionGroup.appendChild(option);
    }
}