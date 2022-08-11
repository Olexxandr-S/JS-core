/*
  The values assigned to object properties can also be functions.
  When a function belongs to an object it is called a method.

  Add a method called getName to the students object that
    - takes an argument called name which is a string
    - console.logs a message that says: "Student name: " followed by the name given as an argument
*/

let student = {
  printName: function (name) {
    console.log(`Student name: ${name}`);
  },
};

student.printName("Mohammad Alamin");
// pavel: to be honest, the best name for this method would be 'printName()'
// as it doesn;t get it from anywhere, it just prints it on the console :)
// but i appreciate that's not you Alex, who decided to call it this name.

/* EXPECTED RESULT
  Student name: Daniel
*/
