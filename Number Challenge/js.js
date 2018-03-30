var userNumber = prompt ("Give me the secund number!");
var UNumber = parseInt(userNumber);
var Rnumber = Math.floor(Math.random()*UNumber) +1;

document.write("The random number is: " + Rnumber);