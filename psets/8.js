/*
Verbing

Create a function called verbing.

It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.

For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

function verbing(word) {
  var string = word.substring(word.length -3);
  if (word.length >= 3 && string != "ing"){
    var ing = word + "ing";
    console.log(ing);

  }
  else if (word.length >= 3 && string === "ing"){
    var ly = word + "ly"
    console.log(ly);
  }
  if (word.length < 3)
    console.log(word);


  // write your solution here...
}
verbing("swim");
verbing("loving");
verbing("go");
