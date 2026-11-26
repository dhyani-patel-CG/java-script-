// //5.
// var appName = "CodingGita"; // Global scope
// function showDetails() {
//     var moduleName = "JavaScript"; // Function scope
//     console.log(appName);
//     console.log(moduleName);
// }
// showDetails();
// console.log(appName);

// //10.
// var school = "Sunrise School";
// function showSchool() {
//     console.log(school);
// }
// function updateSchool() {
//     school = "Green Valley School";
// }
// showSchool();
// updateSchool();
// console.log(school);

// //15.
// function calculateArea() {
//     var length = 8;
//     var width = 4;
//     var area = length * width;
//     console.log(area);
// }
// calculateArea();

// //20.
// if (true) {
//     let secret = "Hidden";
// }
// console.log(secret); 

// //25.
// for (let step = 1; step <= 4; step++) {
//     console.log(step);
// }
// console.log(step); 

// //30.

// function printNumbers() {
//     for (var i = 1; i <= 5; i++) {
//         console.log(i);
//     }
//     console.log("After loop inside function:", i); 
// }
// printNumbers();
// console.log(i); 
// //34.
// function calculate() {
//     var total;
//     console.log(total);
//     total = 50;
//     console.log(total);
// }
// calculate();

// //40.
// announceEvent(); 
// var eventName = "TechFest 2026";
// function announceEvent() {
//     console.log("Welcome to " + eventName);
// }

// //41.

// Output:

// Plaintext
// 2025
// CSE
// CodingGita

// //44.

// Output:

// Plaintext
// first
// global

// //45

// var levelZero = "Global Scope";
// function outerFunc() {
//     var levelOne = "Outer Function Scope";
//     function middleFunc() {
//         var levelTwo = "Middle Function Scope";
//         function innerFunc() {
//             var levelThree = "Innermost Function Scope";
//             console.log(levelThree);
//             console.log(levelTwo);
//             console.log(levelOne);
//             console.log(levelZero);
//         }
//         innerFunc();
//     }
//     middleFunc();
// }
// outerFunc();
// Section 10: Variable Shadowing

// //46.

// Output:

// Plaintext
// 90
// 50
// Shadowing meaning: Declaring a local variable (var score = 90) with the exact same name as an outer variable (var score = 50) temporarily hides ("shadows") the outer variable inside that inner scope.

// //47.

// Output:

// Plaintext
// Local Name
// Global Name
// Does it permanently change the global variable? No, because var name = "Local Name" creates a separate variable in show()'s local memory space without modifying the global name.

// //48.

// Output:

// Plaintext
// 20
// 20

// //49.

// Output:

// Plaintext
// Inside: Red
// Outside: Blue

// //50.

// var marks = 70;
// function showMarks() {
//     var marks = 95;
//     console.log("Inside function:", marks);
// }
// showMarks();
// console.log("Outside function:", marks);

// //51.

// Output:

// Plaintext
// Jenil
// Kartik Sir
// Access outside outer()? No. teacher is scoped to outer() and student is scoped to inner(). Scope lookup only works outward (inner to outer), never inward.

// //52.

// Output:

// Plaintext
// Parent
// Child
// Grandchild
// Accessibility:
// a is accessible inside parent(), child(), and grandchild().
// b is accessible inside child() and grandchild(), but not parent().
// c is accessible only inside grandchild().

// //53.

// Error: ReferenceError: inner is not defined when inner() is called in the global scope.

// //54.

// Output: Hello students

// //55.

// function studentInfo() {
//     var name = "Aarav";
//     var course = "Backend JavaScript";

//     function display() {
//         console.log("Name:", name);
//         console.log("Course:", course);
//     }

//     display();
// }
// studentInfo();

// //56.

// Problem: x = 100 omits the var (or let/const) keyword.

// //57.

// Output: 20
// //58.

// What happens: Prints undefined with no error.

// Explanation: var a is hoisted to the top of the scope and initialized to undefined before console.log(a) runs, preventing a ReferenceError.

// //59.

// Output: 20

// Is it allowed? Yes, var permits redeclaring the same variable name in the same scope without throwing an error.

// Why it is confusing: It silently overwrites earlier variables without warning, making it easy to accidentally clobber existing data in large scripts or loops.

// //60
// function calculate() {
//     var total = 0; 
//     for (let i = 1; i <= 5; i++) { 
//         total = total + i;
//     }
//     console.log(total); 
// }
// calculate();
// // console.log(total); 