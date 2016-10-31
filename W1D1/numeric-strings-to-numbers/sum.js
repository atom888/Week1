// Lighthouse Labs - W1D1 - Converting Numeric Strings to Numbers  and Adding Two Numbers//


// process.argv collects the pathway in the first two elements
// of the array and the remaining elements are the argv
// inputted from the user
var args = process.argv;

// var args is a matrix of string values
//args [2], and args [3] is selecting specific elements within the array
// Number is converting a string value into number
var sum = Number(args[2]) + Number(args[3]);

console.log(sum);


