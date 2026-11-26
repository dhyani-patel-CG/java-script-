//-----if------
//1
// let num = 55;
// if(num%5==0){
//     console.log("divisible by 5")
// }

//2
// let age = 62;
// if(age>=60){
//     console.log("senior citizen")
// }

//3
// let num = 200;
// if(num>=100){
//     console.log("big number")
// }

//4
// let temp = 9;
// if(temp<10){
//     console.log("very cold")
// }

//5
// let marks = 100;
// if(marks==100){
//     console.log("perfect score")
// }

//6
// let num = -4;
// if(num<0){
//     console.log("negitive number")
// }

//7
// let input = "";
// if(input==""){
//     console.log("No input provided")
// }

//8
// let year = 2000;
// if(year%100==0){
//     console.log("century year")
// }

//9
// let num = 8;
// if(num%2==0&&num>0){
//     console.log("positive even number")
// }

//10
// let marks  = 35;
// if(marks>=35 || marks<100){
//     console.log("valid marks")
// }

//--------if..else---------
//partB

//1
// let num = 6;
// if(num%2==0){
//     console.log("even the number")
// }else{
//     console.log("odd the number")
// }

//2
// let age = 17;
// if(age>=18){
//     console.log("eligible to vote")
// }else{
//     console.log("not eligible")
// }

//3
// let num = 5;
// if(num>0){
//     console.log("positive number")
// }else{
//     console.log("negitive number")
// }

//4
// let marks = 85;
// if(marks>=35){
//     console.log("pass")
// }else{
//     console.log("fail")
// }

//5
// let char = "J"
// if(char>="A"){
//     console.log("character is an upper case")
// }else{
//     console.log("charcter is not upper case")
// }

//6
// let num = 6;
// if(num%3===0){
//     console.log("divisible by 3")
// }else{
//     console.log("not divisible")
// }

//7
// let password = "admin123";
// if(password=="admin123"){
//     console.log("login sucessful")
// }else{
//     console.log("incorrect password")
// }

//8
// let year = 2026;
// if(year%4==0){
//     console.log("year is leap year")
// }else{
//     console.log("year is not leap year")
// }

//9
// let num1 = 10;
// let num2 = 20;
// if(num1>num2){
//     console.log("num1 is biggest number")
// }else if(num2>num1){
//     console.log("num2 is the biggest number")
// }
    

//10
// let num = 10;
// if(num>0){
//     console.log("positive")
// }else if(num<0){
//     console.log("negitive")
// }else{
//     console.log("zero")
// }

//-------if..else if...else-------

// //1
// let month = 4;
// if (month === 12 || month === 1 || month === 2) {
//   console.log("Winter");
// } else if (month === 3 || month === 4 || month === 5) {
//   console.log("Summer");
// } else if (month === 6 || month === 7 || month === 8) {
//   console.log("Monsoon");
// } else if (month === 9 || month === 10 || month === 11) {
//   console.log("Autumn");
// } else {
//   console.log("Invalid month number");
// }

// //2
// let income = 850000;
// let tax = 0;
// if (income < 300000) {
//   tax = 0;
// } else if (income <= 700000) {
//   tax = income * 0.05;
// } else if (income <= 1000000) {
//   tax = income * 0.10;
// } else {
//   tax = income * 0.15;
// }
// console.log(`Tax amount: ₹${tax}`);

// //3
// let score = 82;
// if (score >= 90) {
//   console.log("Outstanding");
// } else if (score >= 70) {
//   console.log("Good");
// } else if (score >= 40) {
//   console.log("Average");
// } else {
//   console.log("Needs Improvement");
// }

// //4
// let speed = 65;
// if (speed < 40) {
//   console.log("Slow");
// } else if (speed <= 80) {
//   console.log("Normal");
// } else {
//   console.log("Fast");
// }

// //5
// let height = 168;
// if (height < 150) {
//   console.log("Short");
// } else if (height <= 170) {
//   console.log("Average");
// } else {
//   console.log("Tall");
// }

//6
// let day = 6;
// if (day >= 1 && day <= 5) {
//   console.log("Weekday");
// } else if (day === 6 || day === 7) {
//   console.log("Weekend");
// } else {
//   console.log("Invalid day number");
// }

// //7
// let units = 180;
// let bill = 0;
// if (units <= 50) {
//   bill = units * 2;
// } else if (units <= 150) {
//   bill = units * 4;
// } else {
//   bill = units * 6;
// }
// console.log(`Total bill: ₹${bill}`);

// //8
// let attendance = 92;
// if (attendance >= 90) {
//   console.log("Excellent");
// } else if (attendance >= 75) {
//   console.log("Good");
// } else if (attendance >= 50) {
//   console.log("Satisfactory");
// } else {
//   console.log("Poor");
// }

// //9
// let sub1 = 78;
// let sub2 = 91;
// let sub3 = 85;
// if (sub1 >= sub2 && sub1 >= sub3) {
//   console.log(`Highest mark: ${sub1}`);
// } else if (sub2 >= sub1 && sub2 >= sub3) {
//   console.log(`Highest mark: ${sub2}`);
// } else {
//   console.log(`Highest mark: ${sub3}`);
// }

// //10
// let num = -4;
// if (num === 0) {
//   console.log("Zero");
// } else if (num > 0 && num % 2 === 0) {
//   console.log("Positive Even");
// } else if (num > 0 && num % 2 !== 0) {
//   console.log("Positive Odd");
// } else if (num < 0 && num % 2 === 0) {
//   console.log("Negative Even");
// } else {
//   console.log("Negative Odd");
// }

//---------nested if-------

// // 1
// let numCheck = 15;
// if (numCheck > 10) {
//   if (numCheck % 3 === 0) {
//     console.log("Greater than 10 and divisible by 3");
//   } else {
//     console.log("Greater than 10, but not divisible by 3");
//   }
// } else {
//   console.log("Number is 10 or less");
// }

// // 2
// let age = 20;
// let hasVoterId = true;
// if (age >= 18) {
//   if (hasVoterId) {
//     console.log("Can Vote");
//   } else {
//     console.log("Eligible by age, but needs a voter ID");
//   }
// } else {
//   console.log("Not eligible to vote");
// }

// // 3
// let marks = 85;
// if (marks >= 40) {
//   if (marks >= 80) {
//     console.log("Passed with Distinction");
//   } else {
//     console.log("Passed");
//   }
// } else {
//   console.log("Failed");
// }

// // 4
// let enteredPin = 1234;
// let correctPin = 1234;
// let balance = 5000;
// let withdrawalAmount = 2000;
// if (enteredPin === correctPin) {
//   if (balance >= withdrawalAmount) {
//     balance -= withdrawalAmount;
//     console.log(`Withdrawal successful. Remaining balance: ₹${balance}`);
//   } else {
//     console.log("Insufficient balance");
//   }
// } else {
//   console.log("Incorrect PIN");
// }

// // 5
// let year = 2000;
// if (year % 4 === 0) {
//   if (year % 100 === 0) {
//     if (year % 400 === 0) {
//       console.log(`${year} is a Leap Year`);
//     } else {
//       console.log(`${year} is NOT a Leap Year`);
//     }
//   } else {
//     console.log(`${year} is a Leap Year`);
//   }
// } else {
//   console.log(`${year} is NOT a Leap Year`);
// }

// // 6
// let email = "student@example.com";
// if (email.includes("@")) {
//   if (email.endsWith(".com")) {
//     if (email.length > 10) {
//       console.log("Valid Email");
//     } else {
//       console.log("Email must be longer than 10 characters");
//     }
//   } else {
//     console.log("Email must end with .com");
//   }
// } else {
//   console.log("Email must contain @");
// }

// // 7
// let cartTotal = 1500;
// let isPremiumMember = true;
// let discountRate = 0;
// if (cartTotal >= 1000) {
//   if (isPremiumMember) {
//     discountRate = 0.20;
//   } else {
//     discountRate = 0.10;
//   }
// }
// let finalAmount = cartTotal - cartTotal * discountRate;
// console.log(`Final amount after discount: ₹${finalAmount}`);

// // 8
// let number = 12;
// if (number > 0) {
//   if (number % 2 === 0) {
//     if (number % 4 === 0) {
//       console.log("Positive Even and Divisible by 4");
//     } else {
//       console.log("Positive Even, but not divisible by 4");
//     }
//   } else {
//     console.log("Positive Odd");
//   }
// } else {
//   console.log("Number is zero or negative");
// }

// // 9
// let candidateAge = 25;
// let hasDegree = true;
// let yearsOfExperience = 3;
// if (candidateAge >= 21 && candidateAge <= 30) {
//   if (hasDegree) {
//     if (yearsOfExperience >= 2) {
//       console.log("Eligible for Interview");
//     } else {
//       console.log("Needs at least 2 years of experience");
//     }
//   } else {
//     console.log("Graduation degree required");
//   }
// } else {
//   console.log("Age must be between 21 and 30");
// }

// // 10
// let isPresent = true;
// let internalMarks = 32;
// let externalMarks = 40;
// if (isPresent) {
//   if (internalMarks >= 30) {
//     if (externalMarks >= 35) {
//       console.log("Eligible for Final Exam");
//     } else {
//       console.log("External marks must be at least 35");
//     }
//   } else {
//     console.log("Internal marks must be at least 30");
//   }
// } else {
//   console.log("Student is absent");
// }

//----switch--------

// //1
// let month = 2;
// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("31 days");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("30 days");
//     break;
//   case 2:
//     console.log("28 days");
//     break;
//   default:
//     console.log("Invalid month number");
// }

// //2
// let ch = "e";
// switch (ch.toLowerCase()) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     console.log("Vowel");
//     break;
//   default:
//     if (ch.length === 1 && ch.toLowerCase() >= "a" && ch.toLowerCase() <= "z") {
//       console.log("Consonant");
//     } else {
//       console.log("Not an alphabet character");
//     }
// }

// //3
// let seasonCode = 1;
// switch (seasonCode) {
//   case 1:
//   case 2:
//     console.log("Winter");
//     break;
//   case 3:
//   case 4:
//     console.log("Summer");
//     break;
//   default:
//     console.log("Invalid choice (enter 1 to 4)");
// }


// //4
// let marks = 78;
// switch (true) {
//   case marks >= 75:
//     console.log("Distinction");
//     break;
//   case marks >= 60:
//     console.log("1st class");
//     break;
//   case marks >= 50:
//     console.log("2nd class");
//     break;
//   case marks >= 35:
//     console.log("3rd class");
//     break;
//   default:
//     console.log("Failed");
// }

// //5
// let role = "admin";
// let action = "edit";
// switch (role) {
//   case "admin":
//     switch (action) {
//       case "create":
//         console.log("Admin: Record created");
//         break;
//       case "edit":
//         console.log("Admin: Record edited");
//         break;
//       case "delete":
//         console.log("Admin: Record deleted");
//         break;
//       default:
//         console.log("Admin: Unknown action");
//     }
//     break;
//   case "user":
//     console.log("Limited Access");
//     break;
//   default:
//     console.log("Invalid role");
// }

// //6
// Mango is yellow
// Banana is yellow
// Unknown fruit
//correct ans
// let fruit = "mango";
// switch (fruit) {
//   case "apple":
//     console.log("Apple is red");
//     break;
//   case "mango":
//     console.log("Mango is yellow");
//     break;
//   case "banana":
//     console.log("Banana is yellow");
//     break;
//   default:
//     console.log("Unknown fruit");
// }

// //7
// let val = "0";
// switch (val) {
//   case 0:
//     console.log("Number zero (0)");
//     break;
//   case "0":
//     console.log('String zero ("0")');
//     break;
//   case false:
//     console.log("Boolean false");
//     break;
//   case null:
//     console.log("Null value (null)");
//     break;
//   case undefined:
//     console.log("Undefined value (undefined)");
//     break;
//   default:
//     console.log("Other value");
// }

// //8
// let a = 10;
// let b = 0;
// let operator = "/";
// switch (operator) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     if (b === 0) {
//       console.log("Error: Division by zero is not allowed");
//     } else {
//       console.log(a / b);
//     }
//     break;
//   case "%":
//     if (b === 0) {
//       console.log("Error: Modulo by zero is not allowed");
//     } else {
//       console.log(a % b);
//     }
//     break;
//   case "**":
//     console.log(a ** b);
//     break;
//   default:
//     console.log("Invalid operator");
// }

// //9
// let dayOfMonth = 15;
// switch (true) {
//   case dayOfMonth >= 1 && dayOfMonth <= 10:
//     console.log("Beginning of the month");
//     break;
//   case dayOfMonth >= 11 && dayOfMonth <= 20:
//     console.log("Middle of the month");
//     break;
//   case dayOfMonth >= 21 && dayOfMonth <= 31:
//     console.log("End of the month");
//     break;
//   default:
//     console.log("Invalid day of the month");
// }

// //10
// let category = "veg";
// let item = "paneer";
// let size = "full";
// let price = 0;
// switch (category) {
//   case "veg":
//     switch (item) {
//       case "paneer":
//         switch (size) {
//           case "half":
//             price = 120;
//             break;
//           case "full":
//             price = 220;
//             break;
//           default:
//             console.log("Invalid size");
//         }
//         break;
//       case "dal":
//         switch (size) {
//           case "half":
//             price = 90;
//             break;
//           case "full":
//             price = 160;
//             break;
//           default:
//             console.log("Invalid size");
//         }
//         break;
//       default:
//         console.log("Invalid veg item");
//     }
//     break;
//   case "nonveg":
//     switch (item) {
//       case "chicken":
//         switch (size) {
//           case "half":
//             price = 180;
//             break;
//           case "full":
//             price = 320;
//             break;
//           default:
//             console.log("Invalid size");
//         }
//         break;
//       case "fish":
//         switch (size) {
//           case "half":
//             price = 200;
//             break;
//           case "full":
//             price = 360;
//             break;
//           default:
//             console.log("Invalid size");
//         }
//         break;
//       default:
//         console.log("Invalid non-veg item");
//     }
//     break;
//   default:
//     console.log("Invalid category");
// }
// if (price > 0) {
//   console.log(`Order Summary: ${category.toUpperCase()} - ${item} (${size}) | Total: ₹${price}`);
//}

//---------ternary opraters-----------

// // 1
// let numDiv7 = 14;
// let resDiv7 = numDiv7 % 7 === 0 ? "Divisible by 7" : "Not Divisible by 7";
// console.log(resDiv7);

// // 2
// let temp = 32;
// let resTemp = temp >= 30 ? "Hot Day" : "Pleasant Day";
// console.log(resTemp);

// // 3
// let str = "";
// let resStr = str.length === 0 ? "Empty String" : "String has content";
// console.log(resStr);

// // 4
// let ageGroupVal = 16;
// let resAge = ageGroupVal < 13 ? "Child" : ageGroupVal <= 19 ? "Teenager" : "Adult";
// console.log(resAge);

// // 5
// let a = 12, b = 25, c = 19;
// let greatest = a >= b ? (a >= c ? a : c) : (b >= c ? b : c);
// console.log(greatest);

// // 6
// let studentMarks = 76;
// let gradeClass =
//   studentMarks >= 75 ? "Distinction" :
//   studentMarks >= 60 ? "First Class" :
//   studentMarks >= 50 ? "Second Class" :
//   studentMarks >= 35 ? "Pass" : "Fail";
// console.log(gradeClass);

// // 7. Number Sign and Parity (Single Nested Ternary)
// let parityNum = -6;
// let parityRes =
//   parityNum === 0 ? "Zero" :
//   parityNum > 0 ? (parityNum % 2 === 0 ? "Positive Even" : "Positive Odd") :
//   (parityNum % 2 === 0 ? "Negative Even" : "Negative Odd");
// console.log(parityRes);

// // 8
// let leapYear = 2024;
// let leapRes =
//   leapYear % 4 === 0
//     ? (leapYear % 100 !== 0 || leapYear % 400 === 0 ? "Leap Year" : "Not a Leap Year")
//     : "Not a Leap Year";
// console.log(leapRes);

// // 9
// let role = "admin";
// let action = "edit";
// let accessRes =
//   role === "admin"
//     ? (action === "delete" ? "Admin Delete" : action === "edit" ? "Admin Edit" : "Admin Other")
//     : role === "user"
//     ? (action === "view" ? "User View" : "User Restricted")
//     : "Invalid Role";
// console.log(accessRes);

// // 10
// let cartTotal = 3500;
// let discountSummary =
//   cartTotal >= 5000
//     ? { discountPercent: 20, finalAmount: cartTotal * 0.8 }
//     : cartTotal >= 2000
//     ? { discountPercent: 10, finalAmount: cartTotal * 0.9 }
//     : cartTotal >= 1000
//     ? { discountPercent: 5, finalAmount: cartTotal * 0.95 }
//     : { discountPercent: 0, finalAmount: cartTotal };
// console.log(discountSummary);