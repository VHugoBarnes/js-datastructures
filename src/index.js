import HashTable from "./hash_tables/HashTable.js";

const myHashTable = new HashTable(50);

myHashTable.set("Victor", 22);
myHashTable.set("Nicole", 22);
myHashTable.set("Keko", 4);

// console.log(JSON.stringify(myHashTable));
// myHashTable.delete("Victor");
console.log(myHashTable.getAll());
