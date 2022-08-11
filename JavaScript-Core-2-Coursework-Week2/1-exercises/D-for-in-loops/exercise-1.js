/*

   Use a "for...in" loop to log out the name of
   each person who earns more than 50000. The
   log should include a "$" symbol before each salary.

*/

let salaries = {
  ross: 30000,
  monica: 55000,
  rachel: 90000,
};

// WRITE BELOW THIS LINE
for (let [name, salary] of Object.entries(salaries)) {
  //      ^^^ this looks more like 'person' rather than 'salary' :)
  if (salary > 50000) {
    console.log(`${name} : $${salary}`);
  }
}

// but you could do it even more beautifully by using Object.entries() method + destructuring an Array:
// for (let [name, salary] of Object.entries(salaries)) { ... }
// pavel.

// Expected Result:
// monica: $55000
// rachel: $90000
