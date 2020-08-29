//Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {


  //Variable Array
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = [" ", "!", "#", "$", "%", "&", '"', "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\', "]', "^", "_", "`", "{", "|", "}", "~"];

  //Generated prompt to select criteria
  var howLong = prompt("How many sylables would you like your password to be? Please enter a number between 8 and 128");


  function writePassword() {

    var lowerConfirm = confirm("Would you like to include lowercase letters?");
    var upperConfirm = confirm("Would you like to include uppercase letters?");
    var numConfirm = confirm("Would you like to include numbers?");
    var specialConfirm = confirm("Would you like to include special characters?");

    while (!lowerConfirm && !upperConfirm && !numConfirm && !specialConfirm) {
      alert("Please select at least one password parameter");
      return;
    }
  }

  //function using if statments to generate password


  if (howLong >= 8 && howLong <= 128) {
    if (lowerConfirm && upperConfirm && numConfirm && specialConfirm) {
      for (i = 0; i < howLong; i++) {
        passwordText += Math.floor(Math.random() * howLong.length);
      }
    }
    else if (lowerConfirm && upperConfirm && numConfirm) {
      for (i = 0; i < howLong; i++) {
        passwordText += Math.floor(Math.random() * howLong.length);
      }
    }
    else if (lowerConfirm && upperConfirm) {
      for (i = 0; i < howLong; i++) {
        passwordText += Math.floor(Math.random() * howLong.length);
      }
    }
    else if (lowerConfirm) {
      for (i = 0; i < howLong; i++) {
        passwordText += Math.floor(Math.random() * howLong.length);
      }
    }
    else if (upperConfirm && numConfirm && specialConfirm) {
      for (i = 0; i < howLong; i++) {
        passwordText += Math.floor(Math.random() * howLong.length);
      }
    }
    else if (upperConfirm && specialConfirm) {
      for (i = 0; i < howLong; i++) {
        passwordText += Math.floor(Math.random() * howLong.length);
      }
    }
    else if (upperConfirm && numConfirm) {
      for (i = 0; i < howLong; i++) {
        passwordText += Math.floor(Math.random() * howLong.length);
      }
    }
    else if (upperConfirm) {
      for (i = 0; i < howLong; i++) {
        passwordText += Math.floor(Math.random() * howLong.length);
      }
    }
    else if (numConfirm && specialConfirm) {
      for (i = 0; i < howLong; i++) {
        passwordText += Math.floor(Math.random() * howLong.length);
      }
    }
    else if (numConfirm) {
      for (i = 0; i < howLong; i++) {
        passwordText += Math.floor(Math.random() * howLong.length);
      }
    }
    else if (specialConfirm) {
      for (i = 0; i < howLong; i++) {
        passwordText += Math.floor(Math.random() * howLong.length);
      }
    }
    else (howLong < 8 || howLong > 128);
      alert("Please select a value between 8 and 128");
      return;
    }
  }

 
)




//var password = generatePassword();
var passwordText = document.querySelector("#password")





//passwordText.value = password;


// Add event listener to generate button