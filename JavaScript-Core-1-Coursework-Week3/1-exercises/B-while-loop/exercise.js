/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

function evenNumbers(n) {
  // TODO
  i = 0;        // let's call it 'number'
  j = 0;        // let's call it 'counter'
  let x = "";   // let's call it 'result'
  if (n > 0) {
    while (j < n) {
      x += i + ","; // let's use string literal here : result += `,${number}`;
                    // and have comma preceeding the number, so that number is the last symbol in the string.
      i += 2;       
      j++;          
    }
    console.log(x);
  } else {
    console.log("nothing");
  }
}

/**
 * it might be easier to read the functin this way;
 * 
  function evenNumbers(n) {
      if (!n) {
          return "nothing";
      }
      
      let number = 0
      let result = `${number}`;
      let counter = 1; // we've got already one number, it's 0, right?
      while(counter < n) {
          number += 2;
          result += `,${number}`;
          counter++;
      }
      return result;
  }
*/

evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18
