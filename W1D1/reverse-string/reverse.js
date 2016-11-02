// Lighthouse Labs - Stretch Exercise "Reverse A String" //

var userInput = process.argv.slice(2);

//console.log(userInput);

function reverse(arr) {
  var newArray = [];
  console.log(arr);
  for (var i = 0; i < arr.length; i += 1) {
    console.log(arr[i]);
    for (var j = arr[i].length; j !== 0; j -= 1) {
        console.log(arr[j]);
    }
  }
}


console.log(reverse(userInput));
