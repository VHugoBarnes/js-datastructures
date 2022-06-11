import MyArray from "./arrays/Array.js";

const myArray = new MyArray();

myArray.push("Keko");
myArray.push("Malia");
myArray.push("Mochi");
myArray.push("Reba");

console.log(myArray.data);
myArray.addFirst("Regina");
console.log(myArray.data);
myArray.popFirst();
console.log(myArray.data);
