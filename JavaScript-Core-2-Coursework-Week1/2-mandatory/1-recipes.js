/*
  The Recipe Card
  Never forget another recipe!

  Create an object to hold information on your favorite recipe.

  It should have properties for

  - title (a string),
  - servings (a number), and
  - ingredients (an array of strings)

  On separate lines (one console.log statement for each), log the recipe information so it looks like:

  Mole
  Serves: 2
  Ingredients:
  cinnamon
  cumin
  cocoa

  You should write and log at least 5 recipes
*/
const recipe = [
  {
    title: "culiflower Lentil Soup",
    serves: 2,
    Ingredients: [
      "Culiflower",
      "chopped tomato",
      "red lentils",
      "curry powder",
      "raw garlic",
    ],
  },
  {
    title: "Pizza",
    serves: 1,
    Ingredients: ["Flour", "tomato paste", "cheese", "mixed pepper", "herbs"],
  },
  {
    title: "Peanut Butter Sandwitch",
    serves: 1,
    Ingredients: ["Smooth peanut butter", "slices of bread", "bananna"],
  },
  {
    title: "Biryani",
    serves: 3,
    Ingredients: [
      "Bashmati rice",
      "chopped merinated beef meat",
      "ginger and garlic paste",
      "biryani powder",
      "ghee",
      "chopped tomato",
      "chopped onion",
    ],
  },
  {
    title: "omlette",
    serves: 1,
    Ingredients: ["Eggs", "oil", "mashed potato", "sliced onion"],
    origin: { bangladesh: 1890, india: 1920 },
  },
];
// write code here

// pavel: it's all good. Well done.
// it will be absolutely fantastic if
// - we have name 'recipe' in plural: 'recipes' :)
// - for each recipe object 'Ingredients' starts with small 'i', as all other property names
// - couple other meangful improvements mentioned below:
recipe.forEach((recipe) => {
  //                    ^^^ it'll look better if we do it this way:
  //                          recipes.forEach((recipe) => .... );
  console.log(
    `\n${recipe.title.toUpperCase()}\nServes: ${recipe.serves}\nIngredients:`
  );
  recipe.Ingredients.forEach((ingredient) => console.log(`- ${ingredient}`));
  //                    ^^^ it'll look better if we do it this more explicit way:
  //                          recipe.ingredients.forEach((ingredient) => .... );
  //                     this massively increases the code readability.
  !recipe.origin ? "" : console.log(recipe.origin); // <-- what is this? do we print it if it's not set?
});
