// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function newNumbers(number) { // pavel: this is not 'newNumbers()' function, this is 'multiplyBy100()' function :)
  return number * 100;        // and function returns a signle value, so it's not really logical 
}                             // to have something plural in its name.
                              // but, as i've mentioned earlier, function's name must point on some action,
                              // so should have either some Verb in its name or start with 'is' or 'has'.

let numbersMultipliedByOneHundred = numbers.map(newNumbers); // complete this statement

console.log(numbersMultipliedByOneHundred);

/* EXPECTED RESULT
  [10, 20, 30, 40, 50]
*/
