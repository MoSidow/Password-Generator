// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  
  var length = window.prompt("How long would you like your password to be (Chooes between 8-128)");
  
  if (length < 8 || length > 128) {
    window.alert("You must enter a valid number!");
    return;
  }

  











  

}
































// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
