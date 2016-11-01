// Lighthouse Labs - Lecture exercise 'Adder' //

// get all arguments - starting at second item within the
// argv array
var numbers = process.argv.slice(2);
var sum = 0;
var numbers; // hoist


// inputs array of numbers to add
// outputs returns a number that is the sum
function add(numbers) {
  for ( var i = 0; i < numbers.length; i += 1) {
    number = Number(numbers[i]);
    if ( !Number.isNaN(number)) {
      sum += number;
    }
  }
  return sum;
}


console.log(add(numbers));




//while loop version //

// var i = 0;
// while (i < numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }