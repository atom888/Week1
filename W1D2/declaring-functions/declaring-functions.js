// Lighthouse Labs - Declaring Functions Exercise //

var diceValue = process.argv.slice(2);

function diceRoll (dice) {
  var rollValues = "";
  for (var i = 0; i < dice; i += 1) {
  if (i === dice - 1) {
    rollValues +=Math.floor(Math.random()*6)+1 + ".";
  } else {
    rollValues += Math.floor(Math.random()*6)+1 + ", ";
  }
}
return rollValues;
//console.log("Rolled " + diceValue + " dice: " + rollValues);
}


console.log("Rolled " + diceValue + " dice: " + diceRoll(diceValue));