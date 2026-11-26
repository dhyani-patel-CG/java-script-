//2
// function greetStudent(name) {
//   return "Hello " + name + ", welcome to CodingGita!";
// }

// console.log(greetStudent("Aarav"));
// console.log(greetStudent("Priya"));
// 3. 
// console.log(sayHello("Rahul"));

// function sayHello(name) {
//   return "Hello, " + name + "!";
// }


// 4
// const calculateAverage = function(a, b, c) {
//   return (a + b + c) / 3;
// };

// console.log(calculateAverage(80, 90, 70));
// 5. 
// function multiply(x, y) { 
//   return x * y; 
// } 
// console.log(multiply(12, 5));
// Parameters: x and y

// Arguments: 12 and 5

// 6.
// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(isEven(24)); // true
// console.log(isEven(17)); // false
// 7. 
// function findPercentage(obtainedMarks, totalMarks) {
//   return (obtainedMarks / totalMarks) * 100;
// }

// console.log(findPercentage(456, 500) + "%");
// 8.
// function showMessage(msg) {
//   console.log("Message:", msg);
//  
// }

// let result = showMessage("Hello World");
// console.log(result); 
// 9.
// const calculateSimpleInterest = function(principal, rate, time) {
//   return (principal * rate * time) / 100;
// };

// console.log("Simple Interest:", calculateSimpleInterest(10000, 5, 2));
// 10

// function studentMessage(name, marks) {
//   return "Student " + name + " has scored " + marks + " marks.";
// }

// console.log(studentMessage("Rohan", 88));
// console.log(studentMessage("Neha", 92));
// 11.
// function displayAge() {
//   let age = 20; // Local variable
//   console.log("Inside function age:", age);
// }

// displayAge();


// let course = "JavaScript"; // Global variable
// function showCourse() {
//   console.log("Global course variable:", course);
// }
// showCourse();
// 12.
// function analyzeStudent(name, m1, m2, m3) {
//   let total = m1 + m2 + m3;
//   let average = total / 3;
//   return name + " scored total " + total + " with average " + average.toFixed(2);
// }

// console.log(analyzeStudent("Amit", 85, 90, 78));
// console.log(analyzeStudent("Sunita", 92, 88, 95));
// 13.
// function studentReport(name, m1, m2, m3) {
//   function total() {
//     return m1 + m2 + m3;
//   }
//   return name + " total marks: " + total();
// }

// console.log(studentReport("Karan", 75, 80, 85));
// 14. 
// function generateReport(name, m1, m2, m3) {
//   let total = m1 + m2 + m3;
//   let average = total / 3;
//   let result = average >= 40 ? "Pass" : "Fail";

//   return "--- Report Card ---\n" +
//          "Name: " + name + "\n" +
//          "Total Marks: " + total + "\n" +
//          "Average: " + average.toFixed(2) + "\n" +
//          "Result: " + result + "\n";
// }

// console.log(generateReport("Vikas", 45, 50, 55));
// console.log(generateReport("Anita", 30, 35, 28));
// 15.
// const sumOfThree = (a, b, c) => a + b + c;
// const averageOfTwo = (x, y) => (x + y) / 2;
// const maxOfTwo = (a, b) => (a > b ? a : b);
// const fullName = (first, last) => first + " " + last;

// console.log("Sum:", sumOfThree(5, 10, 15));
// console.log("Average:", averageOfTwo(20, 30));
// console.log("Max:", maxOfTwo(45, 78));
// console.log("Full Name:", fullName("Sachin", "Tendulkar"));
// 16.
// const calculateGrade = function(percentage) {
//   if (percentage >= 90) return "A+";
//   if (percentage >= 80) return "A";
//   if (percentage >= 70) return "B";
//   if (percentage >= 60) return "C";
//   if (percentage >= 40) return "D";
//   return "F";
// };

// let percentages = [95, 82, 67, 45, 32];
// for (let i = 0; i < percentages.length; i++) {
//   console.log("Percentage " + percentages.get ? percentages[i] : percentages[i] + " -> Grade: " + calculateGrade(percentages[i]));
// }
// 17.
// function calculateFinalPrice(price, discountPercent) {
//   return price - (price * discountPercent / 100);
// }

// console.log("Final Price 1:", calculateFinalPrice(2500, 15));
// console.log("Final Price 2:", calculateFinalPrice(1200, 10));
// 18.
// const celsiusToFahrenheit = c => (c * 9/5) + 32;
// const fahrenheitToCelsius = f => (f - 32) * 5/9;

// console.log("25°C to Fahrenheit:", celsiusToFahrenheit(25));
// console.log("100°C to Fahrenheit:", celsiusToFahrenheit(100));
// console.log("77°F to Celsius:", fahrenheitToCelsius(77));
// console.log("212°F to Celsius:", fahrenheitToCelsius(212));
// 19.

// function calculateCartTotal(itemPrices) {
//   function applyTax(subtotal) {
//     let taxRate = 0.08; // 8% tax
//     return subtotal + (subtotal * taxRate);
//   }

//   let rawTotal = 0;
//   for (let i = 0; i < itemPrices.length; i++) {
//     rawTotal += itemPrices[i];
//   }

//   return applyTax(rawTotal);
// }

// console.log("Total with tax:", calculateCartTotal([100, 200, 50]));
// 20.
// function processStudent(name, m1, m2, m3) {
//   function calculateTotalAndAvg() {
//     let total = m1 + m2 + m3;
//     let avg = total / 3;
//     return { total: total, average: avg };
//   }

//   let stats = calculateTotalAndAvg();
//   let result = stats.average >= 40 ? "Pass" : "Fail";

//   return "Student: " + name + " | Total: " + stats.total + " | Avg: " + stats.average.toFixed(2) + " | Status: " + result;
// }

// function compareAverages(avg1, avg2) {
//   if (avg1 > avg2) return "First average is higher.";
//   if (avg2 > avg1) return "Second average is higher.";
//   return "Both averages are equal.";
// }

// // 1. Process three different students
// let report1 = processStudent("Rahul", 85, 90, 88);
// let report2 = processStudent("Simran", 45, 50, 52);
// let report3 = processStudent("Aman", 30, 35, 40);

// console.log(report1);
// console.log(report2);
// console.log(report3);

// // 2. Compare averages example
// console.log(compareAverages(87.67, 49.00))