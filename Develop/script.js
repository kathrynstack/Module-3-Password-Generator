// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate buttons
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword() {
  
  var passwordLength = prompt("Enter password length between 8-128 characters");
  while (passwordLength != parseInt(passwordLength) || (passwordLength < 8 || passwordLength > 128)) {
  passwordLength = prompt("Password length must be between 8-128 characters");
  }

  var includeLowercase = includeCharType("lowercase");
  var includeUppercase = includeCharType("uppercase");
  var includeNumeric = includeCharType("numeric");
  var includeSpecial = includeCharType("special");

  var letters = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "!@#$%^&*()+-=";

  var passwordChars = "";

  if (includeLowercase) {
    passwordChars += letters; 
  }
  if (includeUppercase) {
    passwordChars += letters.toUpperCase();
  }
  if (includeNumeric) {
    passwordChars += numbers;
  }
  if (includeSpecial) {
    passwordChars += special;
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomChar = Math.floor(Math.random() * passwordChars.length)
    password += passwordChars[randomChar];
  }
  return password;
}

function includeCharType(charType) {
  var includeCharType = prompt("Do you want to include " + charType + " characters Y/N?").toUpperCase();
  while (includeCharType != "Y" && includeCharType !="N" ) {
    includeCharType = prompt("Must enter Y or N; Inlcude " + charType + " characters?").toUpperCase();
  }

  if (includeCharType == "Y") {
    includeCharType = true;
  }
  else {
    includeCharType = false;
  }

  return includeCharType;
}