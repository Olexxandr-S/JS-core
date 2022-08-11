/*

   "myPets" is an object containing many animals and 
   their names. Use the appropriate "Object." static method to
   get an array of the names of each pet in the "myPets" object.

   Assign this to the "petNames" variables declared below.

*/

let myPets = {
  dog: "Rufus",
  cat: "Mr Fluffykins",
  tortoise: "Lord Voldetort",
  rabbit: "Bugs",
};

let petNames = Object.values(myPets);
//              ^^^ there is no need to do that.
//  you could simply assign 'petNames' to the 'Object.values(myPets)'
//  Object.values() method returns a "new" Array.
// pavel.

// DO NOT EDIT BELOW THIS LINE
console.log(
  `Expected result: ["Rufus", "Mr Fluffykins", "Lord Voldetort", "Bugs"]. Actual result: ${petNames}`
);
