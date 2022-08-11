/*

   The "store" array contains various items you can buy, along with their price.
   Create an array containing the names of all the things you could buy (less than
   the "money" variable").

   hint: use the array "filter" method and "map" method in a chain.

*/

let store = [
  { item: "Corn Flakes", price: 2.5 },
  { item: "Milk", price: 1.2 },
  { item: "Chocolate", price: 0.8 },
];

let money = 1.5;

let thingsICanBuy = store
  .filter((item) => item.price < money)
  //        ^^^ really miner suggestion here. this should be rather an 'item'
  //            one sigular item, instead of 'items'
  //            coz, Array.filter() method iterates through all the elements of the array
  //            and calls your callBack function on each of the elements.
  //            so callback function receives one single element at a time.
  .map((item) => item.item);
//   ^^^ and this could be 'item' too.
//       there is no harm in writing your callback this way:
//          item => item.item
//       but in this case, may be Data Architech or someone else needs to decide
//       renaming 'item' property in the object to 'name', like this for example:
//          { name: "Corn Flakes", price: 2.5 }
//       that woukd be the best scenario!
//       store:Array --> item:Object (item.name:String === "Corn Flakes")
//
//       in the future, if you see something like that,
//       feel free to propose your "best-bractice" improvements! :)
// pavel.

// DO NOT EDIT BELOW THIS LINE
console.log(`Expected output: Milk,Chocolate. Actual output: ${thingsICanBuy}`);
