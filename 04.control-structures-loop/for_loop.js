//--------for loop----------
// // question = 1

// let array = [28, 32, 25, 40, 18, 35] ;
// count= 0 
// for (let i = 0 ; i < array.length ; i++ ){
//     if ( array[i] >= 30 ){
//     count += 1 
//     }
// }
//   console.log(count)


// // question = 2

// var  num = "456" ;
// var result = 0 ;l
// for ( let i = 0 ; i < num.length ; i++){
//     result += Number(num[i] )
// }
// console.log(result)



// let num = 4563 ;
// let result = 0 ;
// for ( let i = num ; i > 0 ; i = Math.floor(i / 10) ){
//     let digit = i % 10;
//     result += digit  
// }
// console.log(result)

// // question = 3
 
// for(let i = 1 ; i <= 100 ; i++){
//     if( i % 3 ! 0 && i % 5 ! 0 && i % 7 != 0 ){
//         console.log(i)
//     }
// }


// // question = 4

// let string = "JavaScript"
// string = string.toLowerCase()
// for ( let i = 0 ;  i < string.length ; i++){
//     if ( string[i] != "a" && string[i] != "e" && string[i] != "i"&& string[i] != "o"&& string[i] != "u"){
//         console.log(string[i])
//     }
// }

// // question = 5 

// let arry = [1,4,3];
// let largestNumber = 0;
// let secondlargestNumber = 0;
// for (let i = 0; i < arry.length; i++){
//     if (arry[i] > largestNumber){
//         secondlargestNumber = largestNumber;
//         largestNumber = arry[i];
//     } else if (arry[i] > secondlargestNumber && arry[i] < largestNumber) {
//         secondlargestNumber = arry[i];
//     }
// }
// console.log(secondlargestNumber)

// // question = 6

// let num = 6 ;
// total = 0 ;
// for(let i = 1 ; i < num ; i++ ){
//     if ( num % i == 0 ){
//         // console.log(i)
//         total = total + i
//         }
// }
// console.log(`Sum = ${total}`)
// if (total == num ){
//     console.log("Perfact number.")
// }else {
//     console.log("Not a perfact number.")
//         }
    
// // question = 7 
// let c = 1
// bag = ""
// for (let i = 1 ; i <= 8 ; i++){
//     bag += c +" " 
//     c *= 2
// }
// console.log(bag)


// // question = 8 
// c = 0 ;
// a = 1 ;
// for (let i = 0 ; i <= 20 ; i++){
//     console.log(c) ;
//         let next = a + c 
//         a = c ;
//         c = next; 
// }

// let fibSeries = " 0 1 "
// let a = 0 ;
// let b = 0 ;
// for (let i = 0  ;  i <= 20 ; i++){
//     let c = a + b 
//     fibSeries += c+ " "
//     a = b
//     b = c 
// }
// console.log(fibSeries)


// // question = 9 

// let arry = [45, 78, 90, 32, 56, 88] ;
// students = arry.length
// count = 0 ;
// total = 0 ;
// for (let i = 0 ; i < arry.length ; i++){
//     total += arry[i] 
//         average = total / students
//     } 
// for (let i = 0  ; i < students ; i++){
//     if(arry[i] > average){
//             count += 1
//         }
//     }
// console.log(`Average Score = ${average}`)
// console.log(`Students above average = ${count}`)

// // question = 10 

// let num = 99 ;

// for(let i = 0 ; i > 0  ; i++ ){

    

// }


//---break inside for loop--------

// // question = 1 

// let arry = [1,2,3,4,5,6,7,7,9,0]
// for (let i = 0 ; i < arry.length ; i++){
//     if (arry[i] == 7 ){
//         console.log("found")
//         break ;
//     }
// }

// // question = 2


// let correctPassword = "python@10";
// let accessGranted = false;
// for (let i = 1; i <= 5; i++) {
//     const prompt = require("prompt-sync")();
//     let password = prompt("Enter password (Attempt " + i + " of 5):");

//     if (password === correctPassword) {
//         console.log("Access granted");
//         accessGranted = true;
//         break;
//     }
// }
// if (!accessGranted) {
//     console.log("Account locked");
// }

// // question = 3 

// let sum = 0 ;
// for (let i = 0 ; i <= 40 ; i++){
//     sum += i ;
//     if ( sum >= 100){
//         console.log(sum-i)  
//         break ;
//     } 
    
// }

// // question = 4 

// let arry = ["jitesh" , "daksh" , "neel" , "Shashi" , "Ansh" ]
// for(let i = 0 ; i< arry.length ; i++){
//     if ( arry[i][0] == "S"){
//         console.log(arry[i])
//         break ;
//     }
// }

// // question = 5 

// for (let i = 20 ; i <= 50 ; i++){
//     if( Number.isInteger(i ** (1/2) )){
//         console.log(i)
//         break ;
//     }
// }


//----continue inside a for Loop----

// // question = 1

// for(let i = 0 ; i <= 30 ; i++){
//     if (i % 4 == 0 ){
//         continue ;
//     }
//     console.log(i)
// }

// question = 2 

// let sum = 0 ;
// let arry = [1,2,-3,-1,-1,-4] ;
// for(let i = 0; i < arry.length; i++){
//     if ( arry[i] < 0 ){
//         continue ;
//     }else {
//         sum += arry[i]
//     }
// }
// console.log(`Sum = ${sum}`)

// // question = 3 
 
// let str = "Hello world" ;
// let bag = ""
// for (let i = 0 ; i < str.length ; i++){
//     if(str[i] == " "){
//         continue ;
//     }
//     bag += str[i]
// }
// console.log(bag)

// // question = 4 

// let num = 6 ;
// let pdt = 1 ;
// for( let i = 1 ; i <= 12 ; i++){
//     pdt = num * i 
//     if  (pdt % 5 == 0 ){
//         continue ;
//     }
//     console.log(pdt)
// }



// // question = 5 

// let arry = [12, 18, 25, 15, 30, 17, 22] ;
// for(let i = 0 ; i < arry.length ; i++){
//     if ( arry[i] < 18 ){
//         continue ;
//     }
//     console.log(arry[i])
// }


//-------Reverse For Loop-----

// // 1
// for (let i = 50; i >= 1; i--) {
//   if (i % 3 === 0 && i % 9 !== 0) {
//     console.log(i);
//   }
// }

// // 2
// let arrNums = [12, 45, 7, 23, 56, 89, 34];
// let largestBelow50 = null;
// for (let i = arrNums.length - 1; i >= 0; i--) {
//   if (arrNums[i] < 50) {
//     if (largestBelow50 === null || arrNums[i] > largestBelow50) {
//       largestBelow50 = arrNums[i];
//     }
//   }
// }
// console.log("Largest number < 50:", largestBelow50);

// // 3
// let targetNum = 4729;
// let digits = String(targetNum);
// let oddProduct = 1;
// let hasOdd = false;
// for (let i = digits.length - 1; i >= 0; i--) {
//   let d = Number(digits[i]);
//   if (d % 2 !== 0) {
//     oddProduct *= d;
//     hasOdd = true;
//   }
// }
// console.log("Product of odd digits:", hasOdd ? oddProduct : 0);

// // 4
// let word = "Programming";
// let vowels = "aeiouAEIOU";
// let reverseConsonants = "";
// for (let i = word.length - 1; i >= 0; i--) {
//   let ch = word[i];
//   if (!vowels.includes(ch)) {
//     reverseConsonants += ch;
//   }
// }
// console.log("Reversed consonants:", reverseConsonants);

// // 5
// let fib = [0, 1];
// for (let i = 2; i < 15; i++) {
//   fib[i] = fib[i - 1] + fib[i - 2];
// }
// for (let i = fib.length - 1; i >= 0; i--) {
//   console.log(fib[i]);
// }

// // 6
// let palNum = 12321;
// let reversedNum = 0;
// let tempPal = palNum;
// for (; tempPal > 0; tempPal = Math.floor(tempPal / 10)) {
//   let digit = tempPal % 10;
//   reversedNum = reversedNum * 10 + digit;
// }
// console.log(palNum === reversedNum ? `${palNum} is a Palindrome` : `${palNum} is NOT a Palindrome`);

// // 7
// let temps = [32, 28, 41, 19, 35, 27, 38];
// let coldDaysCount = 0;
// for (let i = temps.length - 1; i >= 0; i--) {
//   if (temps[i] < 30) {
//     coldDaysCount++;
//   }
// }
// console.log("Days colder than 30°C:", coldDaysCount);

// // 8
// let decimal = 13;
// let binaryDigits = [];
// for (let n = decimal; n > 0; n = Math.floor(n / 2)) {
//   binaryDigits.push(n % 2);
// }
// let reversedBinaryOutput = "";
// for (let i = binaryDigits.length - 1; i >= 0; i--) {
//   reversedBinaryOutput += binaryDigits[i];
// }
// console.log("Binary digits in reverse order:", reversedBinaryOutput);

// // 9
// let scores = [90, 85, 70, 95, 60, 88, 75];
// for (let i = scores.length - 1; i >= 0; i--) {
//   if (scores[i] > 80) {
//     console.log(`First score > 80 from end: ${scores[i]} at index ${i}`);
//     break;
//   }
// }

// // 10
// for (let i = 40; i >= 1; i--) {
//   let root = Math.floor(Math.sqrt(i));
//   if (root * root === i) {
//     continue;
//   }
//   console.log(i);
// }

//-------Nested For Loop Questions----------

// // 1
// let rows1 = 4;
// let currentNum = 1;
// for (let r = 1; r <= rows1; r++) {
//   let line = "";
//   for (let c = 1; c <= r; c++) {
//     line += (c > 1 ? " " : "") + currentNum;
//     currentNum++;
//   }
//   console.log(line);
// }

// 2
// let rows2 = 5;
// for (let r = 1; r <= rows2; r++) {
//   let line = "";
//   for (let c = 0; c < r; c++) {
//     line += (c > 0 ? " " : "") + String.fromCharCode(65 + c);
//   }
//   console.log(line);
// }

// // 3
// let rows3 = 5;
// for (let r = 1; r <= rows3; r++) {
//   let line = "";
//   for (let c = 1; c <= r; c++) {
//     if (r === rows3 || c === 1 || c === r) {
//       line += (c > 1 ? " " : "") + "*";
//     } else {
//       line += "  ";
//     }
//   }
//   console.log(line);
// }

// // 4
// let rows4 = 5;
// for (let r = rows4; r >= 1; r--) {
//   let line = "";
//   for (let c = 1; c <= r; c++) {
//     line += "*";
//   }
//   console.log(line);
// }

// 5
// let rows5 = 5;
// for (let r = rows5; r >= 1; r--) {
//   let line = "";
//   for (let c = 1; c <= r; c++) {
//     line += (c > 1 ? " " : "") + r;
//   }
//   console.log(line);
// }

// // 6
// let rows6 = 5;
// for (let r = rows6; r >= 1; r--) {
//   let line = "";
//   for (let c = 1; c <= r; c++) {
//     line += (c > 1 ? " " : "") + c;
//   }
//   console.log(line);
// }

// // 7
// let rows7 = 5;
// let descNum = 15;
// for (let r = rows7; r >= 1; r--) {
//   let line = "";
//   for (let c = 1; c <= r; c++) {
//     line += (c > 1 ? " " : "") + descNum;
//     descNum--;
//   }
//   console.log(line);
// }

// // 8
// let rows8 = 5;
// for (let r = rows8; r >= 1; r--) {
//   let line = "";
//   for (let c = 1; c <= r; c++) {
//     if (r === rows8 || c === 1 || c === r) {
//       line += (c > 1 ? " " : "") + "*";
//     } else {
//       line += "  ";
//     }
//   }
//   console.log(line);
// }

// // 9
// let size9 = 5;
// for (let r = 1; r <= size9; r++) {
//   let line = "";
//   for (let c = 1; c <= size9; c++) {
//     if (r === c) {
//       line += " ";
//     } else {
//       line += "*";
//     }
//   }
//   console.log(line);
// }

// // 10
// for (let t = 1; t <= 5; t++) {
//   let line = "";
//   for (let m = 1; m <= 10; m++) {
//     let prod = t * m;
//     if (prod % 2 === 0) {
//       line += (line.length > 0 ? " " : "") + prod;
//     }
//   }
//   console.log(line);
// }

// // 11
// let n11 = 4;
// for (let r = 0; r < n11; r++) {
//   let line = "";
//   for (let c = 0; c < n11; c++) {
//     let diff = r >= c ? r - c : c - r;
//     line += (c > 0 ? " " : "") + diff;
//   }
//   console.log(line);
// }

// // 12
// for (let i = 1; i <= 10; i++) {
//   for (let j = i + 1; j <= 10; j++) {
//     let sum = i + j;
//     let root = Math.floor(Math.sqrt(sum));
//     if (root * root === sum) {
//       console.log(`(${i}, ${j})`);
//     }
//   }
// }

// // 13
// let n13 = 5;
// for (let r = 1; r <= 2 * n13 - 1; r++) {
//   let peak = r <= n13 ? r : 2 * n13 - r;
//   let spaces = n13 - peak;
//   let line = "";
//   for (let s = 0; s < spaces; s++) {
//     line += " ";
//   }
//   for (let asc = 1; asc <= peak; asc++) {
//     line += asc;
//   }
//   for (let desc = peak - 1; desc >= 1; desc--) {
//     line += desc;
//   }
//   console.log(line);
// }

// 14
// let n14 = 6;
// let spiral = [];
// for (let r = 0; r < n14; r++) {
//   spiral[r] = [];
//   for (let c = 0; c < n14; c++) {
//     spiral[r][c] = 0;
//   }
// }
// let val14 = 1;
// let top = 0, bottom = n14 - 1, left = 0, right = n14 - 1;
// let layers = Math.ceil(n14 / 2);
// for (let layer = 0; layer < layers; layer++) {
//   for (let c = left; c <= right && val14 <= n14 * n14; c++) {
//     spiral[top][c] = val14++;
//   }
//   top++;
//   for (let r = top; r <= bottom && val14 <= n14 * n14; r++) {
//     spiral[r][right] = val14++;
//   }
//   right--;
//   for (let c = right; c >= left && val14 <= n14 * n14; c--) {
//     spiral[bottom][c] = val14++;
//   }
//   bottom--;
//   for (let r = bottom; r >= top && val14 <= n14 * n14; r--) {
//     spiral[r][left] = val14++;
//   }
//   left++;
// }
// for (let r = 0; r < n14; r++) {
//   let rowStr = "";
//   for (let c = 0; c < n14; c++) {
//     let cell = String(spiral[r][c]);
//     if (cell.length === 1) cell = " " + cell;
//     rowStr += (c > 0 ? " " : "") + cell;
//   }
//   console.log(rowStr);
// }

// // 15
// let pascalRows = 8;
// for (let r = 0; r < pascalRows; r++) {
//   let line = "";
//   for (let sp = 0; sp < pascalRows - r - 1; sp++) {
//     line += " ";
//   }
//   for (let k = 0; k <= r; k++) {
//     let numFact = 1;
//     for (let a = 2; a <= r; a++) numFact *= a;
//     let kFact = 1;
//     for (let b = 2; b <= k; b++) kFact *= b;
//     let rkFact = 1;
//     for (let d = 2; d <= r - k; d++) rkFact *= d;
//     let coeff = numFact / (kFact * rkFact);
//     line += (k > 0 ? " " : "") + coeff;
//   }
//   console.log(line);
// }

// // 16
// let matrixRows = 5;
// let matrixCols = 6;
// for (let r = 0; r < matrixRows; r++) {
//   let line = "";
//   for (let c = 0; c < matrixCols; c++) {
//     let cellVal;
//     if ((r + c) % 3 === 0) {
//       cellVal = 2;
//     } else if (r === 0 || r === matrixRows - 1 || c === 0 || c === matrixCols - 1) {
//       cellVal = 1;
//     } else {
//       cellVal = 0;
//     }
//     line += (c > 0 ? " " : "") + cellVal;
//   }
//   console.log(line);
// }