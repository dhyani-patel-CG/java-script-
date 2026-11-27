// que - 1
// const colors = ['red', 'green', 'blue', 'yellow'];
// console.log(colors[colors.length - 2]);

//que - 2
// let hobbies = ['reading', 'travelling', 'swimming', 'coding'];

// let hobbies = new Array('reading', 'travelling', 'swimming', 'coding');
// console.log(hobbies);

// que - 3
// const trafficLight = ['red', 'yellow', 'green'];
// const trafficLight2 = new Array('red', 'green', 'yellow');
// console.log(trafficLight);
// console.log(trafficLight2);

// que - 4
// let cities = ['Ahemdabad', 'Surat', 'Rajkot', 'Vadodara' , 'Bhavnagr'];
// console.log(cities[1]);
// console.log(cities[4]);

// que - 5
// let arr = ["Hello kitty error" , "overthinker", "jethalal" , "poppu" , "laalkumar"];
// let res = arr.join(" , ");
// console.log(res);

// que - 6
// let scores = [55, 65, 75];
// scores[1] = 85;
// scores[2] = 100;
// scores[10] = 95;
// console.log(scores);

// que - 7
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.length);

// que - 8
// const students = ['John', 'Jane', 'Jim', 'Jill'];
// for (let i = 0; i < students.length; i++) {
//   console.log(i ,"=>" , students[i]);
// }
// let i = 0;
// while (i < students.length) {
//   console.log(i , "=>" , students[i]);
//   i++;
// }

// que - 9
// let num = [1,2,3,4];
// console.log(num.push(5,6,7)) // return a length of array
// console.log(num)
// console.log(num.unshift(-1,0))
// console.log(num)

// // que - 10
// let arry = [5,10,15]
// arry.push(20)
// console.log(arry)

// // que - 11
// let num = [5,10,15]
// num.unshift(0)
// console.log(num)

// que - 12
// let num = [100,200,300,400,500]
// num.pop()
// console.log(num)
// num.shift()
// console.log(num)

// // que - 13
// let num = [1,2,3,4,5]
// num.splice(1,2,7)
// console.log(num)


// que - 14
// let arr = [ "bhootnath" , "the-nun" , "aenabell" , "obssestion" , "conjuring"]
// let str = arr.toString()
// console.log(str)

// // que - 15
// let student = ["jiya" , "srusti" , "dhyani" , "pavitra" , "angle"]
// console.log(student.indexOf("jiya"))

// // que - 16
// let num = ["dhyani" , 100 , true]
// console.log(typeof(num))

// // que - 17
// let mat = [
//     [1,2],
//     [3,4],
//     [5,6]
//   ]
//   console.log(mat[1][0]);

// //que - 18
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// console.log(matrix[1][2])

// // que - 19
// let mat = [
//     [1,2,3,4],
//     [5,6,7,8]
// ]
// for(const ele of matrix[0]){
//      console.log(mat[0][i])

// }


// // // que - 20
// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let res = ""
// for(let i=0;i<=matrix.length-1,1++){
//     for(let j=0;j<=matrix[0].length-1;j++){
//         res+=matrix[i][j]+" "
//     }
// }
// console.log(res)


// //que - 21
// const arr=[
//     [95,83,77],
//     [74,59,98],
//     [88,98,78],
//     [87,78,77]
// ]
// for(let i=0;i<arr.length-1;i++){
//     console.log(arr[i][0])
// }
// for(ele of arr){
//     console.log(ele)
// }

// // que - 22
// const arr = [
//     [95,83,77],
//     [74,88,98],
//     [84,86,92],
//     [87,77,99]
// ]
// for(let i=0;i<arr[0].length;i++){
//     console.log(arr[2][2])
// }


// // que - 23
// const matrix = [
//   [1,2,3], 
//   [4,5,6]  
// ];
// matrix[1][1] = 100;
// console.log(matrix);


// // que - 24 baki che aaa.....
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// // for(let i=arr.length-1;i>=0;i--){
// //     console.log(arr[i][2])
// // }
// for(let i=arr[0].length;j>=0;j--){
//     for()
// }


// // que - 25
// const marks = [
//     [85, 90, 92],
//     [70, 75, 80],
//     [88, 82, 89]
// ];
// marks.push([90,99,78])

// for (let i = 0; i < marks.length; i++) {
//     const studentMarks = marks[i];
//     const total = studentMarks[0] + studentMarks[1] + studentMarks[2];
//     const avg = total / 3;
//     console.log("Student " + (i + 1) + ": getting an average => " + avg + " , geeting total marks =>" , total);
// }


// // que - 26
// let highest = 0 ;
// let lowest = 100;
// let arr = [90,99,98,70]
// for(const marks of arr){
//     highest = Math.max(highest,marks)
//     lowest = Math.min(lowest , marks)
// }
// console.log(highest)
// console.log(lowest)

// // que - 27
// let highest = 0;
// let lowest = 100;
// let sum = 0;
// let avg = 0;
// let arr = [90,98,78,87,88];
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
//     if(arr[i]>highest){
//         highest=arr[i];
//     }
//     if(arr[i]<lowest){
//         lowest=arr[i];
//     }
// }
// console.log(highest)
// console.log(lowest)
// console.log(sum)
// avg = sum/arr.length;
// console.log(avg)

// que - 28
// const codingGitaStudents = [
//     ["Jenil", [85, 90, 92]],
//     ["Mahir", [78, 80, 75]],
//     ["Yashvi", [88, 92, 89]]
// ];
// for(let i =0;i<=codingGitaStudents.length-1;i++){
//     let studentname = codingGitaStudents[i][0];
//     let studentmarks = codingGitaStudents[i][1];
//     let total = 0;
//     for(let j=0;j<=studentmarks.length-1;j++){
//         // console.log(j)
//         total += studentmarks[j];
//     }
//     let avg = total/studentmarks.length;
//     console.log("Name = ",studentname ," ; Marks = ", studentmarks , " ; total = " , total , " ; Average = " , avg )
// }

// // que - 29
// const codingGitaStudents = [
//     ["Jenil", [85, 90, 92]],
//     ["Mahir", [78, 80, 75]],
//     ["Yashvi", [88, 92, 89]]
// ];

// for(let i=0; i<= codingGitaStudents.length-1; i++){
//     let studentName = codingGitaStudents[i][0];
//     let studentMarks = codingGitaStudents[i][1];
//     let total=0
//     for(let j=0; j<=studentMarks.length-1 ; j++){
//         // console.log(studentMarks[j])
//         total += studentMarks[j];
//     }
//     // console.log(studentName, total)
//     let avg = total/studentMarks.length;
//     console.log("Name:", studentName );
//     console.log("Marks: ", studentMarks[0], studentMarks[1], studentMarks[2]);
//     console.log("Total: ", total );
//     console.log("Avearge :", avg );
//     // console.log(studentName, studentMarks)
// }
// let highestAttendence = 0;
// let topAttendence = ""
// for(let i=0; i<=attendance.length-1; i++){
//     let stName = attendance[i][0];
//     let stAttendence = attendance[i][1];
//     let c1=0
//     let c2=0;
//     for(let j=0; j<=stAttendence.length-1; j++){
//         stAttendence[j]=="P" ? c1++ : c2++;
//     }
//     let attPercentage = (c1/(c1+c2)) * 100;
//     if(attPercentage>highestAttendence){
//         highestAttendence = attPercentage
//         topAttendence = stName;
//     }
//     let status = attPercentage>=75 ? "Good" : "Low attendence";
//     console.log("Name", stName);
//     console.log("Present", c1);
//     console.log("Absent", c2);
//     console.log("Attendance", attPercentage);
//     console.log("Status", status);
//     console.log("----------------")
// }

// console.log("Highest Attendence =>", topAttendence)