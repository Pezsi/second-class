// types-example.js

// String
const name = "Alice";

// Number
const age = 30;

// Boolean
const isLoggedIn = true;

// Null
const selectedItem = null;

// Undefined
let uninitialized;

// Object
const user = {
  name: "Bob",
  age: 25,
  isAdmin: false
};


// Array
const fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]);
console.log(user["age"]);
console.log(fruits.length);


// Function
function greet(person) {
  return `Hello, ${person}!`;
}

// Symbol
const uniqueId = Symbol("id");

// BigInt
const bigNumber = 1234567890123456789012345678901234567890n;

// Type checking

console.log("NE NÉZD");           // string


console.log(typeof name);           // string
console.log(typeof age);            // number
console.log(typeof isLoggedIn);     // boolean
console.log(typeof selectedItem);   // object (special case)
console.log(typeof uninitialized);  // undefined
console.log(typeof user);           // object
console.log(typeof fruits);         // object
console.log(typeof greet);          // function
console.log(typeof uniqueId);       // symbol
console.log(typeof bigNumber);      // bigint

// Example usage
console.log(greet(name));           // Hello, Alice!




