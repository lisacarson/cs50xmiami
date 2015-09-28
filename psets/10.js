/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
function tellFortune(numChild, partName, geoLoc, job) {
  if (job.startsWith("a") === true
  || job.startsWith("e") === true
  || job.startsWith("i") === true
  || job.startsWith("o") === true
  || job.startsWith("u") === true) {
    console.log("You will be an " + job + " in " + geoLoc + ", and married to " + partName + " with " + numChild + " kids.");
  }
  else {
    console.log("You will be a " + job + " in " + geoLoc + ", and married to " + partName + " with " + numChild + " kids.");
  }
}
tellFortune(3, "Karla", "Miami", "programmer" );
tellFortune(0, "John", "Ft. Lauderdale", "actor");
tellFortune(0, "Jane", "Kendall", "salesperson");
