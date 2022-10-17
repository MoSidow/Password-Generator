// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// function for passsword generation
function generatePassword() {
  
  var length = window.prompt("How long would you like your password to be (Chooes between 8-128)");
// If statement if a number under 8 or over 128 is entered
  if (length < 8 || length > 128) {
    window.alert("You must enter a valid number!");
    return generatePassword();
  }

// If statement if a number meets requirments
  if (length >= 8 && length <= 128) {
// Presents all 4 criteria to choose from
    var numericChars = confirm("Would you like Numeric Characters?")
    var hasSpecialChars = confirm("Would you like Special Characters?")
    var hasLowerChars = confirm("Would you like Lower Case Characters?")
    var hasUpperChars = confirm("Would you like Special Characters?")
   
  }
// If Statement if at least 1 criteria is not Chosen
  if (numericChars===false && hasSpecialChars===false && hasLowerChars===false && hasUpperChars===false) {
  window.alert("Please confitm the type of Criteria");
  return generatePassword();
}

// If Statement for all characters
if (numericChars) {
  var numericChars = ["0123456789"]
}
if (numericChars===false) {
  var numericChars = [""]
}

if (hasSpecialChars) {
  var hasSpecialChars = ["!£$%^&*()@~#"];
}
if (hasSpecialChars===false) {
  var hasSpecialChars = [""];
}

if (hasLowerChars) {
  var hasLowerChars = ["abcdefghijklmnopqrstuvwxyz"]
}
if (hasLowerChars===false) {
  var hasLowerChars = [""]
}
if (hasUpperChars) {
  var hasUpperChars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
}
if (hasUpperChars===false) {
  var hasUpperChars = [""]
}

// Generated password will include all the chars
var generatedPassword = numericChars + hasSpecialChars + hasLowerChars + hasUpperChars
var password = "";
// Generated password will be Random
for (var i=0; i < length; i++) {
  var randomPassword= generatedPassword[Math.floor(Math.random() * generatedPassword.length)];
  password += randomPassword;
}

return [password]

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);