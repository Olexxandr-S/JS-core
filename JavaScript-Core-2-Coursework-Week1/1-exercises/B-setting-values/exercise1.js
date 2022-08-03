/*
  You can add properties to objects and assign values to them using dot notation.
  You can also change the value assigned to a property using dot notation.
*/

let capitalCities = {
  UnitedKingdom: {
    name: "London",
    population: 20,
  },
  China: {
    name: "Beijing",
  },
};

/*
  Using dot notation:
    - Change the value of UnitedKingdom's capital city population to 8980000.
    - Add the property for population to China's capital city and set the value to 21500000.
    - Add the country "Peru" to capitalCities object.
    - Add a name of "Lima" to Peru's capital city.
    - Add a population of 9750000 to Peru's capital city.
*/

// write code here
capitalCities.UnitedKingdom.population = 8980000;
capitalCities.China.population = 21500000;
capitalCities["Peru"] = { name: "Lima", population: 9750000 };
// pavel: just for your reference
// we can set new value simply like this:
//    capitalCities.Peru = { name: "Lima", population: 9750000 };
// but if "Peru" value is a value of some dynamic variable, then yes 
// we should assign the new Object's property with the 'bracket notation':
//     let country = "Peru";
//     capitalCities[country] = { name: "Lima", population: 9750000 };

console.log(capitalCities);

/* EXPECTED RESULT
  {
    UnitedKingdom: { name: "London", population: 8980000 },
    China: { name: "Beijing", population: 21500000 },
    Peru: { name: "Lima", population: 9750000 }
  }
*/
