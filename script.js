// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

var numCharacter = prompt ("How much number of Character you want between 8 and 128?");
var numbers = confirm ("Do you want to use numbers in your password?");
var uppercases = confirm ("Do you want to use Uppercases in your password?");
var lowercases = confirm ("Do you want to use lowercases in your password?");
var symbols = confirm ("Do you want to use symbols in your password?");

charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!£$%^&*()@~:;,./?{}=-_",

 retVal = "";
    
  for (var i = 0, n = charset.length; i < numCharacter; ++i) {

   retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal
}

// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);