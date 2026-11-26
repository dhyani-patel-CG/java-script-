//1
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// //2
// let i = 1;
// let sum = 0;
// while (i <= 10) {
//   sum += i;
//   i++;
// }
// console.log("Sum of first 10 natural numbers:", sum);
// //3
// let num = 5;
// let i = 1;
// while (i <= 10) {
//   console.log(num + " x " + i + " = " + (num * i));
//   i++;
// }
// //4
// let n = 58372;
// let count = 0;
// let temp = n;

// if (temp === 0) {
//   count = 1;
// } else {
//   while (temp > 0) {
//     count++;
//     temp = Math.floor(temp / 10);
//   }
// }

// console.log("Number of digits in", n, "is:", count);
// //5
// let n = 12345;
// let reversed = 0;
// let temp = n;

// while (temp > 0) {
//   let digit = temp % 10;
//   reversed = reversed * 10 + digit;
//   temp = Math.floor(temp / 10);
// }

// console.log("Reversed number:", reversed);
// //6
// let n = 4729;
// let sum = 0;
// let temp = n;

// while (temp > 0) {
//   sum += temp % 10;
//   temp = Math.floor(temp / 10);
// }

// console.log("Sum of digits of", n, "is:", sum);
// //7
// let i = 1;
// while (i <= 100) {
//   if (i % 3 === 0 && i % 5 === 0 && i % 7 !== 0) {
//     console.log(i);
//   }
//   i++;
// }
// //8
// let n = 5;
// let factorial = 1;
// let i = 1;

// while (i <= n) {
//   factorial *= i;
//   i++;
// }

// console.log("Factorial of", n, "is:", factorial);
// //9
// let n = 121;
// let original = n;
// let reversed = 0;
// let temp = n;

// while (temp > 0) {
//   reversed = reversed * 10 + (temp % 10);
//   temp = Math.floor(temp / 10);
// }

// if (original === reversed) {
//   console.log(n, "is a Palindrome number");
// } else {
//   console.log(n, "is not a Palindrome number");
// }
// //10
// let decimal = 13;
// let binary = "";
// let temp = decimal;

// if (temp === 0) {
//   binary = "0";
// } else {
//   while (temp > 0) {
//     binary = (temp % 2) + binary;
//     temp = Math.floor(temp / 2);
//   }
// }

// console.log("Binary representation of", decimal, "is:", binary);