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

  if (length >= 8 && length <= 128) {
  
    var numericChars = confirm("Would you like Numeric Characters?")
    var hasSpecialChars = confirm("Would you like Special Characters")
    var hasLowerChars = confirm("Would you like Lower Case Characters")
    var hasUpperChars = confirm("Would you like Special Characters")
   
  }

  if (numericChars===false && hasSpecialChars===false && hasLowerChars===false && hasUpperChars===false) {
  alert("Please confitm the type of Criteria");
  return;
}















  

}
































// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
