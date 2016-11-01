// Lighthouse Labs - Password //

var args = process.argv;
var password = args[2];

function obfuscate(password) {
 var newPassword = "";

 for (var i = 0; i < password.length; i++) {
   if (password[i] === "a") {
     newPassword += "4";
   }
   else if (password[i] === "e") {
     newPassword += "3";
   }
   else if (password[i] === "o") {
     newPassword += "0";
   }
   else if (password[i] === "l") {
     newPassword += "1";
   }
   else {
     newPassword += password[i];
   }
 }
 return newPassword;
}

console.log(obfuscate(password));