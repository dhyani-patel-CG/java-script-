let x;
let y = null;

console.log("x =", x);
console.log("y =", y);

console.log("typeof x:", typeof x);
console.log("typeof y:", typeof y);

console.log("x == y:", x == y);
console.log("x === y:", x === y);

//A variable is undefined automatically by JavaScript when it has been declared 
// (e.g., `let x;`), but no value has been assigned to it yet. It represents the 
// default, unintentional absence of a value.

// You use null intentionally as a programmer to represent "no value" or an 
// "empty" state. For example, you assign `null` to a variable when you want 
// to explicitly clear its value or indicate that an object/data is currently 
// empty but will be populated later.