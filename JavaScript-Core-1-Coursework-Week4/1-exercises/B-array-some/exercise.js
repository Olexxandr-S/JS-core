/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain null values
  It is decided that if there is a null value the program should exit
  - Add a check for null values, and if one exists, exit the program
  - Do not edit any of the existing code
*/

let pairsByIndex = [[0, 3], [1, 2], [2, 1], null, [3, 0]];

// If there is a null value in the array exit the program with the error code
// https://nodejs.org/api/process.html#process_process_exit_code
// process.exit(1);

function items(array) {
  return array === null;
}

// pavel: 
// functin name should always include some action work (verb)
// it always answers the question: "do what?" .... -> "do this...."
// and words are written in camel case:
// - doSomething()
// - createSomething()
// - hasSomthing()
// alternatively, as per naming convention for functions it can be 
// - isSomthing()
// for this task, the best name would be isNull()

if (pairsByIndex.some(items) === true) {
  process.exit(1);
}
// https://nodejs.org/api/process.html#process_process_exit_code

let students = ["Islam", "Lesley", "Harun", "Rukmini"];
let mentors = ["Daniel", "Irina", "Mozafar", "Luke"];
let pairs = pairsByIndex.map(function (indexes) {
  let student = students[indexes[0]];
  let mentor = mentors[indexes[1]];
  return [student, mentor];
});
console.log(pairs);
