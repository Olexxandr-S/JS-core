/*
   This program should check if the array `group` contains only students
*/

let students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
let group = ["Austine", "Dany", "Swathi", "Daniel"];

function onlyStudentElements(singlePersonInGroup) {
  return students.includes(singlePersonInGroup);
}

// pavel: the code works well, does what it needs.
// only minor suggestion is for the name of the callBack function:
// i'd rathe suggest renaming 'onlyStudentElements' to 'isStudent()'
//
// logically, what we are doing here is: we are literally checking that 
// every person in the group is a student.

let groupIsOnlyStudents = group.every(onlyStudentElements); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}
/* EXPECTED RESULT */

// The group does not contain only students
