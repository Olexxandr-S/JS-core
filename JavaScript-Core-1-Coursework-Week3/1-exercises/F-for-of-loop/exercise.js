/*
    A for-of loop is a easy and way of looping through the elements of an array, string or any other "iterable object" (think sequence of elements).    
*/

// TODO Use a for-of loop to output each of the tube stations below.
let tubeStations = [
  "Aldgate",
  "Baker Street",
  "Picadilly Circus",
  "Oxford Street",
  "Tottenham Court Road",
];
for (let station of tubeStations) {
  console.log(station);
}

// TODO Use a for-of loop to capitalise and output each letter in the string seperately.
let str = "codeyourfuture";
let otherStr = "";
for (let letter of str) {
  // pavel: i usually represents 'iterator' or 'counter'
  // and assumed to be a numeric value.
  // in our case here, this is rather an element, e.g. Character of a string.
  // i'd suggest to call it 'c' or 'char' or even 'letter'
  otherStr += letter;
  console.log(letter.toUpperCase());
}
