// Topic # 01 -> Const :

// const Para = "This is a const variable";
// // Para = "this" 
// console.log(Para);

// Topic # 02 -> Block-Scope Variable:

// let x = "hello world";
// alert(x);

// {
//     let xyz = "hello user";
//     console.log(xyz);
// }

// Topic # 03 -> Block-Scope Functions:
// 
// {
//     function add(num1, num2){
//         return num1 + num2;
//     }
//     let add1 =  add(1,2);
//     console.log(add1);
// }

// Arrow Functions
// Topic # 04 ->  Expression Bodies:

// const work = () => {
//     console.log(" i am working");
// }
// work();

// let work1 = (a, b) => a + b;
// console.log(work1(2,3)); 

// let work2 = num => num - 3;
// console.log(work2(34));

// const evens = [2,4,6,8,10];

// let odd = evens.map(function(val){
//     return val - 1;
// });

// console.log(evens);
// console.log(odd);

// let odd1 = evens.map(val => val - 1);

// console.log(evens);
// console.log(odd1);

// const numbers = [1,2,4,6,7,8,10];
// let evens = numbers.filter(val => val % 2 === 0);
// console.log(evens);

// Topic # 05 -> Statement Bodies : 

// const numbers = [1,2,4,6,7,8,10];
// let evens = numbers.filter(val => val % 2 === 0);
// console.log(evens);

// evens.forEach(val => console.log(val));

// Topic # 06 ->

// Topic # 07 -> Default Parameter Values:

// function f (x, y = 7, z = 42) {
//     return x + y + z
// }
// console.log(f(1) === 50); 

// Topic # 08 -> Rest Parameter :
// rest parameters hamesha functions me as a para,meter use hotay hai.

// function add (x, y, ...a){
//     let answer = 0;
//     a.forEach(val => {
//         answer += val;
//     });
//     return x + y + answer;
// }
// console.log(add(1,2,3,4,6,7));

// Topic # 08 -> spread Parameter :
// array or object me spread operator use hotay hai.

// let params = ["hello", true, 6];
// let other = [1, 2,...params];
// let p = "foo";
// console.log(...p);
// console.log(other);

// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);


//  Topic # 10 -> String Interpolation :

// const val = 6;
// console.log("this is a number " + val);

// const val1 = 5;
// console.log(`this is a number ${val1}`);

// const val2 = 5;
// console.log(`this is a number  ${val2 === 4 ? true : false}`);

// Topic # 11 -> Enhanced Object Properties
// Property Shorthand :

// const x = 0, y = 0;
// const obj = {x, y}; // const obj = {x : 0, y : 0}; {x : x, y : y};
// console.log(obj);

// Topic # 12 -> Computed Property Names:

// let quux = () => Math.random(); 
// let obj1 = {
//     foo: "bar",
//     [ "baz" + quux() ]: 42
// }
// console.log(obj1);

// const obj = {key : 5};
// let objkey = "key";
// console.log(obj[objkey]);

// Topic # 13 -> Method Properties :

// let obj = {
//     sqaure: (a, b) => (a +  b)
// };
// console.log(obj.sqaure(1,2));

// Destructuring Assignment:

// Topic # 14 -> Array Matching:

// var list = [ 1, 2, 3 ]
// var [ a, , b ] = list
// console.log(a,b);
// console.log([ b, a ] = [ a, b ]);

// Topic # 15 -> Object Matching, Shorthand Notation:

// const data = () => ({ op: 5, lhs: 1, rhs:2 });
// var { op, lhs, rhs } = data();
// console.log(op,lhs,rhs);

// Topic # 16 -> Object Matching, Deep Matching:

// let data1 = {
//     op : 1,
//     lhs : 2,
//     rhs : 3,
//     xyz : {
//         abc: 7
//     }

// };
// let {op:a, lhs, rhs:c, xyz:{abc:f} } = data1;
// console.log(a,lhs,c,f);

// Topic # 17 -> Object And Array Matching, Default Values :

// var obj = { a: 4 , b: 3};
// var { a, b = 2 } = obj;

// var arr = [ 5  ];
// var [ x, y = 8 ] = arr;

// console.log(`a = ${a} b = ${b} x = ${x} y = ${y}`);

// Topic # 18 -> Parameter Context Matching:

// function f ([ name, val ]) {
//     console.log(name, val)
// }
// function g ({ name: n, val: v }) {
//     console.log(n, v)
// }
// function h ({ name, val }) {
//     console.log(name, val)
// }
// f([ "bar", 42 ])
// g({ name: "foo", val:  7 })
// h({ name: "bar", val: 42 })

// Topic # 19 -> Fail-Soft Destructuring:

// var list = [ 7, 42 ]
// var [ a = 1, b = 2, c = 3, d ] = list
// a === 7
// b === 42
// c === 3
// d === undefined
// console.log(`a = ${a} b = ${b} c = ${c} d = ${d} `);

// Topic # 20 -> Classes : Class Definition

// class State {
//     constructor(a, b, c) {
//         this.a = a;
//         // this.move(b, c) 
//     }
//     move (b, c) {
//         this.b = b;
//         this.c = c;
//     }
// }
// let round = new State(1, 2 , 3);
// round.move(12,34);
// console.log(round);


// class Period {
//     constructor (x, y, z){
//         this.x = x;
//         this.y = y;
//         this.move(z);
//     }
//     move (z){
//         this.z = z;
//     }

// }
// let present = new Period(44, 11, 22);
// //present.move(2222)
// console.log(present);

// Topic # 20 -> Class Inheritance :

// class Department {
//     constructor(name, empCount) {
//         this.name = name;
//         this.empCount = empCount;
//     }

//     work() {
//         console.log(`${this.name} is working`);
//     }
// }

// class SalesDepartment extends Department {
//     constructor(name, idrEmpCount, outEmpCopunt) {
//         super(name, idrEmpCount + outEmpCopunt);
//         this.idrEmpCount = idrEmpCount;
//         this.outEmpCopunt = outEmpCopunt;
//     }
// }
// const hr = new Department("HR", 5);
// const sales = new SalesDepartment("Sales", 7, 10);
// hr.work();
// sales.work();
// console.log(hr);

//  Topic # 21 -> static members :

// class Shape {
//     static default () {
//         return true;
//     }
// }
// // const sh = new Shape();
// console.log(Shape.default());
// console.log(Date.now()); 

// let obj = { name: "asif" };
// undefined
// obj
// { name: "asif" }

// JSON.stringify(obj);
// '{"name":"asif"}'
// let data = JSON.stringify(obj);
// undefined
// localStorage.setItem("myData", data);
// undefined
// localStorage.getItem("myData");
// '{"name":"asif"}'
// let data1 = localStorage.getItem("myData");
// undefined
// JSON.parse
// function parse()

// JSON.parse(data1);
// { name: "asif" }

// Localstorage learn and define:

// class DataSaver {
//     constructor(prices){
//         this.prices = prices;
//     }

//     getTotal (){
//         return this.prices.reduce((previous, current) => {
//            return previous + current;
//         },0)
//     }
//     static save(name, data) {
//         const json = JSON.stringify(data);
//         localStorage.setItem(name, json);
//     }
//     static get(name) {
//         const json = localStorage.getItem(name);
//         return JSON.parse(json);
//     }
// }

// let d1 = new DataSaver([120,130,140,150]);
// console.log(d1.getTotal());

// DataSaver.save("obj",{key: "value"});
// let data = DataSaver.get("obj");
// if (data) {
//     console.log(data);
// }


//////////////////////////////// """ ( IB ) """ ///////////////////////////////////////
/////////////  chapter : 01  //////////////////

// let firstName =  "Asif"; // variable // var // let

// variable rules
// 1. Legal or illegal names
// legal: 
// let lastName // CamelCase
// lastname
// allowed special characters 
// _ $ 
// let $nameWith$Dollar = "";
// let _nameWith_Dollar = "";
// var cannot be start with a number 
// let myName

// Illegal :
// let last name // spaces
// let my#name

// alert (firstName);

// Data Types 

// 1. String 

//let firstName =  "Asif";
// Example = "farrukh", "an apple", "#", "8", "email@test.com"
// any letter, word or sentence is string in javascript.

// 2. Number
// let myNum = 8;
// Example = 2, 3, 56, 78, 0, -12, -54 

// 3. boolean
// let isTodayMonday = ture;
// Example = true & false 



/////////////  chapter : 02  //////////////////

// let data = "hello";
// let data2 = " students";

// let data3 = data + data2; // strings concatenation
// console.log(data3);

// num + num = addition
// string + num = concatenation
// num + string = concatenation
// string + string = concatenation

// let data = 5;
// let data2 = 5;

// let data3 = data + data2; // additions 
// console.log(data3);

// let data = "Hello Students";
// let data2 = data.includes("Students");
// console.log(data2);

// let data = "5";
// let data2 = 5 ;
// console.log(+data + data2);
// console.log(parseInt(data) + data2);
// console.log(Number(data) + data2);

// Math 0perator =  + - * / %  :

// let num = 10;
// let num2 = 5;
// console.log(num + num2);
// console.log(num - num2);
// console.log(num * num2);
// console.log(num / num2);
// console.log(num % num2);

// let userInput = prompt("What is your fav number ?");
// console.log(userInput);

// let userName = prompt("What is your Name ?");
// console.log ( "My name is : " +  userName);

// let randomNumber = Math.random();
// // randomNumber = randomNumber * 10;
// randomNumber *= 10; // short hand 
// let roundNum = Math.round(randomNumber);
// console.log(roundNum);

// Bodmas = Brakets of, Divide , Multiply , Additions , Subtraction.

// let num = (5 + 5) * (5 / 5);
// console.log(num);

// let num = 5 ** 2; // power or 5 square .
// console.log(num);

// let num1 = 5 ** 3; // power or 5 cube .
// console.log(num1);


/////////////  chapter : 03  //////////////////

// Comparsion Operators

// == , :-> only define value
// === , :-> both define type and value
// console.log(5 === "5");
// != , !== 
// console.log(5 != 6);
// < , > , <= , >= 
// let user1 = 7;
// let user2 = 23;
// console.log(user2 <= 18);

// IF & ELSE IF OR ELSE :

// let userAge = +prompt("Enter your age");

// if (userAge >= 18) {
//     console.log("you can apply for NIC");
// }else {
//     console.log("you are not eligible ");
// }

// If & Else Game :

// let userFavNum = +prompt("Enter a number");
// let computerNum = Math.round(Math.random() * 10);

// if (userFavNum === computerNum) {
//     console.log("you win! " + computerNum);
// } else if (userFavNum - 1 === computerNum || userFavNum + 1 === computerNum ) {
//     console.log("you are so close : " + computerNum);
// } else {
//     console.log("you lose! " + computerNum);
// }

// SECOND GAME EVEN OR ODD USER-INPUT :

// let userInput = prompt("Even or Odd");
// let computerNum = Math.round(Math.random() * 10);

// if (computerNum % 2 === 0 && userInput === "even") {
//     console.log("you win! " + computerNum + " is even number");
// } else if (computerNum % 2 !== 0 && userInput === "odd") {
//     console.log("you win! " + computerNum + " is odd number");
// } else {
//     console.log("you lose! " + computerNum);
// }

// Initialisation
// Condition
// Increment

// for (let i = 1; i <= 10; i++) {
//     console.log("hello " + i);
// }

// let table = +prompt("enter a number");
// for (let i = 1; i <= 10; i++) {
//     console.log( table + " X " + i + " = " + i * table);
// }



/////////////  chapter : 04  //////////////////


// Functions : 
// Normal function memory main apna ek alag scope create krty hai.

// alert, parseInt, Math.round = built-in functions
// greet = custom function

// function greet () {
//     console.log("hello students");
// }
// greet();

// function greet (studentName) { // Parameter
//     console.log("hello! " + studentName);
// }
// greet("Asif"); // Argument 
// greet("Farhan"); // Argument 
// greet("Ahmed"); // Argument

// function employee(fileNo) {
//     return "working on file no ! " + fileNo ;
// }
// let result =  employee(8);
// console.log(result);

// function add (num1, num2) {
//     return num1 + num2 ; 
// }
// let res = add(2,8);
// console.log(res);
// document.write(res);

// Recursion:

// function writeData (data, times)  {
//     document.write(data);
//     if (times > 0) {
//         writeData(data,times - 1);
//     }
// }
// writeData("hello! ", 5);

// function factorial (num) {
//     if (num > 1) {
//         return num * factorial(num - 1);
//     }
//     return 1;
// }
// console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1

// closures => Scopes
// Global Scope => whole file
// Local Scope => inside function

// let abc = 7; // Global scope
// function print () {
//     let def = 14; // local scope
//     console.log(def);
// }

// console.log(abc);

// print();


// let abc = 7; // Global scope
// function print (def) {
//     // def = local scope
//     return function (ghi) { // anonyums function
//         console.log(def + ghi );
//     }
// }

// let innerFunction = print(7);
// let innerFunction2 = print(8);
// innerFunction(2);
// innerFunction2(4);

// function print1 (def){
//     return function (ghi) {
//          console.log(def + ghi);
//     }
// }
// let innerFunction3 = print1(2);
// innerFunction3(3);
// let innerFunction4 = print1(5);
// innerFunction4(5);


// function saveUrl (url) {
//     return function () {
//         fetch(url)
//       .then(response => response.json())
//       .then(json => console.log(json))
//     }
// }
// // SAVE URL 
// let makeRequest = saveUrl("https://jsonplaceholder.typicode.com/todos/1");

// // Request attempt 
// makeRequest();
// makeRequest();


/////////////  chapter : 05  //////////////////


// Array 

// let months = ["january", "february", "march", "April"];
// // months[4] = "May"; // Not recomended

// let user = prompt("array me value rakhun?");
// if (user === "yes"){
//     months.push("May");
// }
// console.log(months); 

// let months = ["january", "february", "march", "April"];

// months.shift(); // Removes 1st index
// months.unshift("Jan"); // add value on 1st index
// months.push("May"); // add value on last index
// months.pop(); // Removes last index
// months.length; // tells the quantity of values
// months.splice(2,1, "jun", "july"); // Remove or replace value 
// months.slice(); // provide a new copy of array

// let newArr = months.slice(0,2);
// console.log(months);
// console.log(newArr);

    // forEach() :
// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function(val) {
//     console.log(val);
// })

    // filter() :
// let arr = [1, 2, 3, 4, 5, 8 ,2 , 10];

// let filterArr =  arr.filter(function(val){
//   return val % 2 === 0;
//     if (val % 2 === 0){
//         return true;
//     }else {
//         return false;
//     }
// });
// console.log(filterArr,arr);

    // Sort() :
// let arr = [1, 9, 3, 6, 7, 2, 8, 5, 4, 10];

// let sortedArr =  arr.sort(function(a, b){
//     if (a > b){
//         return 1;
//     }else {
//         return -1;
//     }
// });

// console.log(sortedArr); 

// reduce

// let arr = [1, 9, 3, 6, 7, 2, 8, 5, 4, 10];

// let total =  arr.reduce(function(prevValue, currValue){
//     return prevValue + currValue;
// },0);

// console.log(total);

// let data = ["Hello","Dear","Mohsin","Hii"];

// let data1 = data.reduce(function (val1, val2){
//     return val1 + " " + val2
// });

// console.log(data1);


/////////////  chapter : 06  //////////////////


// Objects :
// properties => es object ky undr kia kia khososiyat hai usy khty hai .
// methods => es object ky jo jo kam hai wo esky methods hai. 

// let person = {
//     name: "Ishaq",
//     cnic: 123456789,
//     eyeColor: "blue",
//     canSpeakEnglish: false,
//     speak: function(sentence){ // object ky under koi bhi function store hai usy method khty hai.
//         console.log(sentence + this.name);
//     }
// };
// console.log(person.name);
// let pass = person.name = "Amjad";
// console.log(pass);
// let del = delete person.name
// console.log(del);
// console.log(person);


// let person2 = { // person2 = object
//     name: "Nadir", // name: "Nadir", = properties   
//     cnic: 123456789, // cnic = key
//     eyeColor: "blue", // "black" = value
//     canSpeakEnglish: false,
//     speak: function(sentence){ // object ky under koi bhi function store hai usy method khty hai.
//         console.log(sentence + this.name);
//     }
// };
// // console.log(person);
// person2.speak("hello! I am ")
// console.log(person.name);

// let student1 = {
//     name: "Hamza",
//     rollNo: 420,
//     teacher: "Nadir",
//     className: "JavaScript"
// };

// let student2 = {
//     name: "Ahmed",
//     rollNo: 421,
//     teacher: "Ishaq",
//     className: "CSS"
// };

// function provideStudent (name1, rollNo1, teacher1, className1){
//     return {
//         name: name1,
//         rollNo: rollNo1,
//         teacher: teacher1,
//         className: className1
//     }
// };

// let students = [
//     provideStudent("Ahmed", 421, "Nadir", "CSS"),
//     provideStudent("Ali", 422, "Ameen", "Javascript"),
//     provideStudent("Hamza", 423, "Ishaq", "Node.JS")
// ];

// console.log(students);


// let prevStudents = localStorage.getItem("students");
// let students = prevStudents ? JSON.parse(prevStudents) : []; 
// function provideStudent (){
//     let std = {
//          name: prompt("Enter your Name"),
//          rollNo: +prompt("Enter your roll no"),
//          teacher: prompt("Enter your teacher Name"),
//          className: prompt("Enter your class Name")
//     };
//     students.push(std);
//     console.log(students);
//     let stringify = JSON.stringify(students);
//     localStorage.setItem("students",stringify);
// };

// localStorage.setItem("name","Asif");


/////////////  chapter : 07  //////////////////

// DOM  : manupulation 

// let data =  document.getElementById("my-para");
// data.innerText = "hello world";
// console.log(data);

// let data = document.querySelector("p");
// data.innerHTML = "<b>Pakistan Zindabad</b>";
// console.log(data);

// let data = document.querySelector("p");
// data.innerHTML = "<b>Pakistan Zindabad</b>";
// data.style.backgroundColor = "black";
// data.style.color = "white";

// setInterval(function(){
//     if (data.style.display === "none"){
//     data.style.display = "block";
//     }else{
//         data.style.display = "none";
//     }

// },1000);

// let data1 = document.querySelector("#your-para");
// data1.innerHTML = "<b>Pakistan Zindabad</b>";
// data1.style.backgroundColor = "black";
// data1.style.color = "white";
// data1.style.width = "100%";

// setInterval(function(){
//     let width = data1.style.width;
//    if (width === "100%"){
//     data1.style.width = "10%";
//    }else { //"30%"
//     width = +width.replace("%",""); // "30%" => "30" => "30"
//     data1.style.width = width + 10 + "%"; // 30 + 10 = 40 + "%" = "40"
//    }

// },1000);

// let data = document.getElementById("my-para");
// data.innerHTML = "<b>Pakistan Zindabad</b>";

// setInterval(function(){
//     let color1 =Math.floor(Math.random()*16777215).toString(16);;
//     let color2 = Math.floor(Math.random()*16777215).toString(16);;
//     console.log(color1, color2 );
//     data.style.backgroundColor = "#" + color1;
//     data.style.color = "#" + color2;
// },1000);


/////////////  chapter : 08  //////////////////


// const date = new Date();

// console.log(date.getDate());
// const months = ["jan","feb","mar","apr","may","jun"];
// console.log(months[date.getMonth()] + " , " + date.getMonth( ));
// console.log(date.getFullYear());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// const doomsDay = new Date();
// doomsDay.setDate(15);
// doomsDay.setMonth(10);
// doomsDay.setFullYear(2025);
// doomsDay.setHours(0);
// doomsDay.setMinutes(0);

// const date = new Date();

// // console.log(date.getTime() , doomsDay.getTime());

// let diff = doomsDay.getTime() - date.getTime();
// console.log((diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1));

// const hour = document.getElementById("hours");
// const min = document.getElementById("minutes");
// const sec = document.getElementById("seconds");
// const ampmElment = document.getElementById("amPm");

// setInterval(function () {
//     const date = new Date();
//     let hr = date.getHours();
//     let amPm = "AM";
//     if(hr > 11){
//         amPm = "PM";
//         if(hr > 12){
//             hr -= 12;
//         }
//     }
// hour.innerText = hr;
// min.innerText = date.getMinutes();
// sec.innerText = date.getSeconds();
// ampmElment.innerText = amPm;
// },1000);



/////////////  chapter : 09  //////////////////

// IIFE => Immediately involed function Experssions
(async function(){
    const response = await fetch("./receipes.json");
    const recipes = await response.json();
    // console.log(recipes);

    const inputElem =  document.getElementById("searchInput");
    const btnElem =  document.getElementById("searchBtn");

    function search(){
        const query = inputElem.Value;
        console.log(query);
    }

    btnElem.addEventListener("click", search);
})();


/////////////  chapter : 10  //////////////////


// Synchronous Example :

// line by line chalta hai .jab tak pehli line chal na
// jaye 2sri line ko nhi chalata.

// alert("");

// for(let i = 0; i < 2000; i++){
//     console.log(i);
// }
// console.log("hello");

// Asynchronous Example : 
// ye bhi line by line chalta hai lekin kbhi agr pehli
// line chalny me dair hojaye tu dusri line chal deta hai.

// function runAfterSec(){
//     setTimeout(function(){
//         console.log("done");
//     },2000);
// };
// runAfterSec();
// console.log("hello pakistan");

// Callbacks =>  is a function.
// koi bhi esa function jisko hum us wqt chalaty hai jab wo complete hojata hai.

// function runAfter2Sec(cb){
//         setTimeout(function(){
//         let data = 5 + 123;
//         cb(data);
//         },2000);
//     };
//     function toBeExecutedWhenDone(dataToGet){
//         console.log("yes It's done", dataToGet);
//     }

//     runAfter2Sec(toBeExecutedWhenDone);
//     console.log("hello pakistan");

// Promises : => .then sirf isky undr he chalta hai.
// resolve : => .then
// reject : => .catch

// function runAfter1Sec(val){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             let data = 5 + val;
//             resolve(data);
//         },1000);
//     } )
// };

// runAfter1Sec(5)
// .then(function(data){
//     return runAfter1Sec(data);
// }).then(function(data){
//     return runAfter1Sec(data);
// }).then(function(data){
//     return runAfter1Sec(data);
// }).then(function(data){
//     console.log(data);
// });

//async / await : 
// short key for return promise async/await .

// function runAfter1Sec(val){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             let data = 5 + val;
//             resolve(data);
//         },1000);
//     });
// };
// (async function(){
//     const data =  await runAfter1Sec(5);
//     const data1 =  await runAfter1Sec(data);
//     const data2=  await runAfter1Sec(data1);
//     const data3 =  await runAfter1Sec(data2);
//     console.log(data3);
// })();