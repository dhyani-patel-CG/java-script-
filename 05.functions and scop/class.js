// function great(name){
//     return `welcome to Gurukul ${name}.`
// }
// console.log(great("Dhyani"))

// let great=function(name){
//     return `welcome to Gurukul ${name}.`
// }
// console.log(great("Dhyani"))

// function great(name){
//     return "welcome to Gurukul => "+  name;
// }
// console.log(great("Dhyani"))

// function greet(a,b){
//     return "multiply of two numbers are =>"+a*b
// }
// console.log(greet("4","4"))

// function fullname(first,last){
//     console.log("First name is "+ first+ " and last name is "+ last+".")
// }
// fullname("dhyani","patel")

// function isEven(even){
//     //     if(even%2==0){
//     // console.log("true")
//     //     }else{
//     //         console.log("false")
//     //     }
//     return (even%2==0)
// }
// console.log(isEven(11))

// function greet(){
//     return
// }
// let x  =greet();
// console.log(x)

// function cube(n){
//     return n**3;
// }
// console.log(cube(4))

// function isPositive(num){
//     if(num>0){
//         return true;
//     }else{
//         return flase;
//     }
// }
// console.log(isPositive(-8))

// function calculateTotal(m1, m2, m3) {
//     return (m1 + m2 + m3)/3;
// }
// console.log(calculateTotal(100, 100, 100)); 
// console.log(calculateTotal(10, 70, 90)); 

// function sumOfThree(a,b,c){
//    c= a+b+c;
//    return c;
// }
// console.log(sumOfThree(4,8,9))

// let batch = "CSE";

// function printBatch() {
//     console.log(batch);
// }

// printBatch(); 

// function displayAge(age){
//     return age;
// }
// console.log(displayAge(28))

// let course = "javascript"
// function display(){
//    console.log(course)
// }
// display()

// function studentReport(name , m1, m2, m3){
//     let total = m1+m2+m3;
//     let avg = (m1+m2+m3)/3;
//     return "The student "+ name +" getting total marks "+ total +" and average "+ avg +"."
// }
// let result = studentReport("Aniket",99,89,70);
// console.log(result)

// function checkPass(m1,m2,m3){
//     let total = m1+m2+m3;
//     let avg = (m1+m2+m3)/3;
//     if(avg>=40){
//         console.log("pass")
//     }else{
//         console.log("fail")
//     }
//        return avg>=40?"pass:"fail";
// // }
// checkPass(90,90,87)


// function studentReport(name, s1, s2, s3) {
    
//     function total(a, b, c) {
//         return a + b + c;
//     }

//     let t = total(s1, s2, s3);
//     let a = (s1+s2+s3)/3
//     return name + ". total marks: " + t +". average is =>" + a +".";
// }

// console.log(studentReport("Krishna", 75, 88, 92));



// function main() {
//     function helper() {
//         return "Helper function called";
//     }
//     return helper();
// }

// console.log(main()); 


// function calculationDimentions(r){
//     // let radius = 5
//     function areaOfCircle(r){
//         console.log(3.14*r*r);
//     }
//     function perameterOfCircle(r){
//         console.log(2*3.14*r);
//     }
//     return areaOfCircle(5),perameterOfCircle(5);

// }
// calculationDimentions(5)



// let name = "Ankit";

// function myfunc(){
//     console.log(name)
// }

// myfunction()
// console.log(name)

// function myfunc(){
//     let name = "Ankit" 
//     console.log(name)
// }
// myfunction()
// console.log(name)


// if(true){
//     let name = "Ankit"
//     console.log(name)
// }
// console.log(name)

// function studentName(name,m1,m2,m3){
//     let student_name  = dhyani 
//     let total_marks = 80
//     let avarage = total_marks/3
//     if (avarage>35){
//         console.log("Pass")
//     }else{
//         console.log("Fail")
//     }
//     return`student name is ${student_name}and total marks is ${total_marks} and avarage is ${avarage}`
// }
// console.log(studentName())

// for (const i=1 ; i<=5 ;i++){
//     console.log(i)
// }

// for (var i=1 ; i<=5 ;i++){
//     console.log(i)
// }

// for (let i=1 ; i<=5 ;i++){
//     console.log(i)
// }

// function sampple(){
//     const name = "suraj";
//     console.log(name)
// }

// function sampple(){
//     var name = "suraj";
//     console.log(name)
// }

// function sampple(){
//     let name = "suraj";
//     console.log(name)
// }

// if(true){
//     var name = "Ashish";
//     console.log(name);
// }
// console.log(name);

// if(true){
//     const name = "Ashish";
//     console.log(name);
// }
// console.log(name);

// if(true){
//     let name = "Ashish";
//     console.log(name);
// }
// console.log(name);

//  function runloops(){
//     for(var i=1;i<=5;i++){
//         console.log(i);
//     }
//     console.log(i);
//  };
//  runloops();
//  console.log(i)

// greet()

// function greet(){
//     console.log("Good Evening!!!")
// }

// greet()

// let greet = function(){
//     console.log("Good evening !!")
// }


// let x = 5;
// function outer(){
//     let y = 10;
//     function inner(){
//         let z = 15;
//         console.log(z);
//         console.log(y);
//         console.log(x);
//     }
//     inner()
// }
// outer();


// let x = 5;                          //globle scope
// function outer(){
//     let y = 10;                     //outer functional
//     function inner(){
//         let z = 15;                 //inner functional
//     console.log(z);
//     console.log(y);
//     console.log(x);
//     }
//     inner()
// }
// outer();


///<<<===variable shadowing===>>>///


//type = 1
// let a = 100;
// function test(){
//     let a = 200;
//     console.log(a)
// }
// test()
// console.log(a)

//type - 2
// var score = 50;
// function test(){
//     var score = 90;
//     console.log(score);
// }
// test();
// console.log(score)


//type = 3
//const score = 50;
// function test(){
//     const score = 90;
//     console.log(score);
// }
// test();
// console.log(score)

//type = 4
//var score = 50;
// function test(){
//     score = 90;
//     console.log(score);
// }
// test();
// console.log(score)


//type = 5
//let score = 50;
// function test(){
//     var score = 90;
//     console.log(score);
// }
// test();
// console.log(score)


//type = 6
//const score = 50;
// function test(){
//     var score = 90;
//     console.log(score);
// }
// test();
// console.log(score)


//<<<===Nested functions===>>>///


// function funcA(){
//     let p = 25;
//     function funcB(){
//         let q = 50;
//     }
//     funcB();
// }
// funcA();
// console.log(p)
// console.log(q)

// for(var counter = 1;counter<=5;counter++){
//     console.log(counter)
// }
// console.log(counter)

// function A(){
//     let p = 10;
//     function B(){
//         let q = 40;
//     }
//     B();
// }
// A();
// console.log(q)
// console.log(p)

// function studentInfo(){
//     let name = "Anil";
//     let course = "Full stake";
//     function display(){
//         console.log(name)
//         console.log(course)
//     }
//     display();
// };

// studentInfo();

