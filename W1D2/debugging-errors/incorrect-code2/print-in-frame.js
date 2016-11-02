function printInFrame(list) {
  var list = list.split(' ');
  var longest = longestStr(list).length;
  var border = repeat('*', longest + 4);



  console.log(border);
  for (word of list) {
    console.log('* ' + word + repeat(' ', longest - word.length + 1) + '*');
  }
  console.log(border);
}

function repeat(str, times) {
  var result = str;

  for (var i = 0; i < times; i++) {
    result += str;
  }

  return result;
}

function longestStr(list) {
  var long = list[0];

  for (var i = 1; i < list.length; i += 1) {
    if (list[i].length > long.length) {
      long = list[i];
    }
  }
  return long;

  // for ( var str of list) {
  //   if (str.length > long.length) {
  //  longest = str;
  //  }
  // }
  // return longest;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
