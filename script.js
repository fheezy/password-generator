// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//define the generate password function
function generatePassword(){
    console.log("generating password")
    //promt the user for password criteria
    var pwdLength = prompt("how long will you like your password to be?")
    console.log(pwdLength) 
    var upper = confirm("would you like uppercase characters? press ok for yes")
    console.log(upper)
    // var pword = "my cool password"
    // return pword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);