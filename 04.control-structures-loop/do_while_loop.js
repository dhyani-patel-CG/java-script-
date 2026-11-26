//1
// let i = 10;
// do {
//   console.log(i);
//   i--;
// } while (i >= 1);
// //2
// let i = 2;
// do {
//   console.log(i);
//   i += 2;
// } while (i <= 20);
// //3
// let n = 5;
// let sum = 0;
// let i = 1;
// do {
//   sum += i;
//   i++;
// } while (i <= n);

// console.log("Sum of first", n, "natural numbers:", sum);
// //4
// let n = 234;
// let product = 1;
// let temp = n;

// if (temp === 0) {
//   product = 0;
// } else {
//   do {
//     product *= (temp % 10);
//     temp = Math.floor(temp / 10);
//   } while (temp > 0);
// }

// console.log("Product of digits:", product)
// //5
// let n = 58372;
// let firstDigit = n;

// do {
//   firstDigit = Math.floor(firstDigit / 10);
// } while (firstDigit >= 10);

// console.log("Leftmost digit:", firstDigit);
// //6
// let base = 3;
// let exponent = 4;
// let result = 1;
// let i = 0;

// do {
//   if (exponent === 0) {
//     result = 1;
//     break;
//   }
//   result *= base;
//   i++;
// } while (i < exponent);

// console.log(base + " raised to power " + exponent + " is:", result);
// //7
// let i = 1;
// do {
//   if (i % 4 === 0 && i % 8 !== 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 100);
// //8
// let n = 1221;
// let original = n;
// let reversed = 0;
// let temp = n;

// do {
//   reversed = reversed * 10 + (temp % 10);
//   temp = Math.floor(temp / 10);
// } while (temp > 0);

// if (original === reversed) {
//   console.log(n, "is a Palindrome number");
// } else {
//   console.log(n, "is not a Palindrome number");
// }
// //9
// let a = 48;
// let b = 18;

// do {
//   let temp = b;
//   b = a % b;
//   a = temp;
// } while (b !== 0);

// console.log("GCD is:", a);
// //10
// let decimal = 13;
// let binary = "";
// let temp = decimal;

// if (temp === 0) {
//   binary = "0";
// } else {
//   do {
//     binary = (temp % 2) + binary;
//     temp = Math.floor(temp / 2);
//   } while (temp > 0);
// }

// console.log("Binary representation:",binary);