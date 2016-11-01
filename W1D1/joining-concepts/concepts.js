/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */
var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];


function joinList(conceptList) {
  var empty = "";
  for ( var i = 0; i < conceptList.length; i++) {
    var item = conceptList[i];
    if (i === conceptList.length - 1) {
      empty += item;
    } else {
      empty += item + ", ";
    }
  }
  return empty;
}

// a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...
console.log("Today I learned about " + concepts + ".");

