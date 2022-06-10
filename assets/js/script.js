// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// arrays 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~", "@", "#", "$", "^", "(", ")", "{", "}", "=", "|", "`", "_"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// variables
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;
var passwordCharacters;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  passwordCharacters = "";
  var confirmLength = (prompt("How many characters would you like your password to have? Enter a number between 8 and 128."));

  // while loop to determine character length
  while (confirmLength <= 7 || confirmLength >= 129) {
    alert("Password length must be between 8-128 characters. Try again!");
    var confirmLength = (prompt("How many characters would you like your password to have? Enter a number between 8 and 128."));
  }

  // prompt number of characters user has chosen  
  alert("Your password will have " + confirmLength + " characters.");

  // determine parameters of password 
  var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
  var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
  var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
  var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

  // loop if answer is outside the parameters 
  while (confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one character parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  }

  // assign an action to the password parameters
  if (confirmSpecialCharacter == true || confirmNumericCharacter == true || confirmLowerCase == true || confirmUpperCase == true) {

    if (confirmSpecialCharacter == true) {
      for (var i = 0; i < specialChar.length; i++) {
        passwordCharacters += specialChar[i]
      }
    }
    if (confirmNumericCharacter == true) {
      for (var i = 0; i < number.length; i++) {
        passwordCharacters += number[i]
      }
    }
    if (confirmLowerCase == true) {
      for (var i = 0; i < alphaLower.length; i++) {
        passwordCharacters += alphaLower[i]
      }
    }
    if (confirmUpperCase == true) {
      for (var i = 0; i < alphaUpper.length; i++) {
        passwordCharacters += alphaUpper[i]
      }
    }
    //log password characters
    console.log(passwordCharacters)
  }

  // empty string to be filled based on for loop selecting random characters from the array
  var randomPassword = ""

  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return (randomPassword);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
