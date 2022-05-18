// Assignment code here
var uppercase =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e"];
var specialCharacters = ["!","@","#","$","%"];
var numericCharacters = ["0","1","2","3","4","5"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//define the generate password function
function generatePassword(){
    console.log("generating password")
    //promt the user for password criteria
    var pwdLength = parseInt(prompt("how long will you like your password to be?"))
    console.log(pwdLength) 
    var upper = confirm("would you like uppercase characters? press ok for yes")
    var lower = confirm("would you like lowercase characters? press ok for yes")
    var special = confirm("would you like special characters? press ok for yes")
    var numeric = confirm("would you like numeric characters? press ok for yes")
    console.log(upper,lower,special,numeric);
    //create an array for possible characters based on user feed back
    var possibleCharacters = []
    //use if statements to check which character types the user want
    if (upper === true) {
      //use the forEach method to add uppercase to possible character array
      uppercase.forEach(character => possibleCharacters.push(character));
    }
    if (lower === true) {
      //use the forEach method to add uppercase to possible character array
      lowercase.forEach(character => possibleCharacters.push(character));
    }
    if (special === true) {
      //use the forEach method to add uppercase to possible character array
      specialCharacters.forEach(character => possibleCharacters.push(character));
    }
    if (numeric) {
      //use the forEach method to add uppercase to possible character array
      numericCharacters.forEach(character => possibleCharacters.push(character));
    }
    console.log(possibleCharacters);
    //create an empty array for passwords 
     var pword = []
     //loop over the possible character array pwdLength as many times 
     for(var i = 0; i < pwdLength; i++){
       //create variable for random index 
       var random = Math.floor(Math.random() * possibleCharacters.length)
       console.log(random)
       console.log(possibleCharacters[i])
       pword.push(possibleCharacters[random])
     }
     console.log(pword);
     return pword
     //use the join method to convert pword array into a string
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
