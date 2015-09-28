/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var tempC = 32;
var convT = Math.round((((tempC * 9 / 5) + 32) * 10))/10;
var tempF = 96;
var convC = (tempF -32) * 5 / 9;
var roundC = Math.round(convC * 10) / 10;
console.log(tempC + '\u00B0' + 'C is ' + convT + '\u00B0' + 'F.' );
console.log(tempF + '\u00B0' + 'F is ' + roundC + '\u00B0' + 'C.' );
