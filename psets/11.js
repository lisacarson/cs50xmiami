/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...
function calculateAge(birthYear) {
  var today = new Date();
  var currentYear = today.getFullYear();
  age1 = currentYear - birthYear;
  age2 = currentYear - birthYear -1;
  console.log("You are either " + age2 + " or " + age1);

}
calculateAge(1900);
calculateAge(1925);
calculateAge(1950);
