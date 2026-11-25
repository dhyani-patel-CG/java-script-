// Part A – Object 
let student = {
  name: "YourName",
  age: 17,
  isEnrolled: true
};

console.log("Student object:", student);

console.log("Name:", student.name);

console.log("Age:", student.age);


//  Part B – Array 
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

console.log("First element of numbers:", numbers[0]);
console.log("Last element of numbers:", numbers[numbers.length - 1]);

console.log("Mixed array:", mixed);

/*
1. Predictability and fewer bugs: When every item in an array has the same type,
   operations like sorting, summing, or calling methods (e.g., .toUpperCase() or
   .toFixed()) behave consistently without unexpected runtime errors or NaN values.
2. Cleaner, easier-to-read code: Loops and helper functions don't need extra
   type-checking conditions (like typeof checks) for every element.
3. Better performance: JavaScript engines can optimize homogeneous arrays more
   efficiently under the hood.
*/


//Part C 
function greet(name) {
  return "Hello, " + name + "!";
}
let message1 = greet("Aarav");
let message2 = greet("Priya");

console.log(message1);
console.log(message2);