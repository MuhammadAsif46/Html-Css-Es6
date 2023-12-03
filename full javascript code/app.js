   //kesi bhi data type ko read kese krty hai :
// Read kese krna hai.
// Write kese krna hai.
// Modify kese krna hai. / change kese krna hai.

// chapter # 01 : alert

// alert("hello world");

// alert("hello user");

// var greeting = prompt("enter your name");
// console.log(greeting);

// remainder answer hoga/remaining jo bachey ga:
// alert(5 % 2);

// chapter # 02 : var for string:

// var str = "asif";
// str = "faizen"
// alert(str);

// chapter # 03 : var for Number:

// var num = 123;
// num = 456;
// alert(num);

// chapter # 04 : Legal & Illegal:

// _, $, camelCase, last(1,2,3,4) : /// legal :
// remaing all element are :  /// illegal :

// chapter # 05 : Math Expression :- Familiar operator:

// + , - , * , / , % :

//chapter #  06 :  Math expressions: Unfamiliar operators
// POST-INCREMENTS :

// var num = 5;
// num++;
// alert(num); // 6

// POST-DECREMENTS : 

// var num1 = 6
// num1--;
// alert(num1);// 5

//PRE-INCREMENTS :

// var num1 = 6
// ++num1;
// alert(num1); // 7

//PRE-DECREMENTS :

// var num = 8;
// ++num;//9
// var num1 = num--;//9
// --num;//7
// var num2 = ++num;//8
// num++;//8
// alert(++num + num1 + num2);// 27

// chapter # 08 : Concatenating text strings..
//CONCATINATIONS:

// var text = "hello ";
// var text2 = "world";
// console.log(text + text2);

// chapter # 09 : Prompts..
//  PROMPT :
// var name1 = prompt("enter your name??");
// alert("Hi there is "+ name1 + " greeting");

//PROMPT ADVANCE :
// var myName = prompt("enter your age??",5);
// myName = Number(myName);
// console.log(myName + 5);


// chapter # 10 : if statements..
//IF AND ELSE ONLY :

//   var myName = prompt("enter a number");

//   if (myName % 2 === 0){
//      alert("this is a even number");
//   } else {
//      alert("this is a odd number");
//   }


//chapter # 11 : COMPARSION OPERATOR: (MEANS)
//'HAN' YA 'NA' means 'TRUE' or 'FALSE':

// " === : !== : < : > : >= : <= "

// var num = 5 ;
// var num2 = 7 ;

// "5" == 5 // true; // only check value:
// "5" === 5 // false; // both checked type and value:

// console.log(num !== num2);

// chapter # 12 : if...else and else if statements.
// IF AND ELSE IF AND ELSE :

// var home = prompt("kuch mila bhai ??");

// if (home === "bread" && home === "butter" ){
//    console.log("sab mill gaya..");
// } else if ( home === "bread"){
//    console.log("bss bread");
// } else if ( home === "butter"){
//    console.log("bss butter");
// } else {
//    console.log("kuch nhi mila");
// }

// chapter # 13 : Testing sets of conditions..

// var num = +prompt("enter a number");

// if (num % 3 === 0 && num % 5 === 0){
//     console.log("both 3 & 5");
// } else if (num % 3 === 0){
//     console.log("only 3");
// } else if (num % 5 === 0){
//     console.log("only 5");
// }

// if (weight > 300 && time < 6 && age > 17 && gender === "male") {
//     alert("Come to our tryout!");
// } else {
// alert("Come to our cookout!");
// }


// && :  CONDICATIONS :        

// TRUE & TRUE :             //TRUE
// TRUE & FALSE :            //FALSE
// FALSE & TRUE :            //FALSE
// FALSE & FALSE :           //FALSE

// NUMBER : CONDICATIONS :

// 0 :                                //FALSE
// EVERYY NUMBER 1,2,3,-3,-4,-8       //TRUE

// STRINGS : CONDICATIONS : 

// "ANYONE NAME" ETC:- "ASIF","FARHAN"   //TRUE
// "  "  EMPTY STRINGS IS :              //FALSE

// UNDEFINED :         //FALSE
// NULL :              //FALSE

// chapter # 14 : if statements nested..

// var num = +prompt("type your percentage");
// var grade;

// if (num >= 0 && num <= 100){
//   if (num >= 80){
//     grade = "A+"
//   } else if (num >= 70){
//     grade = "A"
//   } else if (num >= 60){
//     grade = "B"
//   } else if (num >= 50){
//     grade = "C"
//   } else {
//     grade = "D"
//   }
//   console.log(grade);
// }else {
//     console.log("wrong input! please input type <= 100");
// }

// chapter # 15 : ARRAY..

// var months = ["january","february","march","april","may"];
// console.log(months[2]);

// chapter # 16 & 17 -> INSERT/DELETE/FIRST/LAST ALL ARRAY PRACTICE :

// var months = ["january","february","march","april","may","june"];
// months[5] = ("june"); //wroung work 
// months.push("july","august","september","octuber","november","december"); // "end sy insert"
// months.pop(); // "end sy delete"
// months.unshift("first"); // "start sy add"
// months.shift(); // "start sy delete"
// months.splice(2,3,"dec","dec","kuch ");//kha sy kha tak delete krna hai.1st index/2nd length.
// var months2 = months.slice(0,5); // "kha sy kha tak data copy krna hai.1st index/2nd length."
// console.log(months);
// console.log(months2);

//NESTED LIST WITH ARRAY TRIKY :

// var country = prompt("ENTER YOUR COUNTRY ");
// var city = prompt("ENTER YOUR CITY");

// var countries = ["Pakistan", "China", "America", "Japan", "Bangladesh"]
// var cities = ["Karachi", "Beijing", "New york", "Tokyo", "Dhaka"]

// if (countries[0] === country) {
//    console.log("WELCOME TO PAKISTAN");

//    if (cities[0] === city) {
//       console.log("WELCOME TO KARACHI");
//    } else {
//       console.log("SORRY! THIS CITY IS NOT AVALIABLE");
//    }

// } else if (countries[1] === country) {
//    console.log("WELCOME TO CHINA");

//    if (cities[1] === city) {
//       console.log("WELCOME TO BEIJING");
//    } else {
//       console.log("SORRY! THIS CITY IS NOT AVALIABLE");
//    }

// } else if (countries[2] === country) {
//    console.log("WELCOME TO America");

//    if (cities[2] === city) {
//       console.log("WELCOME TO NEW YORK");
//    } else {
//       console.log("SORRY! THIS CITY IS NOT AVALIABLE");
//    }

// } else if (countries[3] === country) {
//    console.log("WELCOME TO Japan");

//    if (cities[3] === city) {
//       console.log("WELCOME TO TOKYO");
//    } else {
//       console.log("SORRY! THIS CITY IS NOT AVALIABLE");
//    }

// } else if (countries[4] === country) {
//    console.log("WELCOME TO Bangladesh");

//    if (cities[4].toLowerCase === city) {
//       console.log("WELCOME TO DHAKA");
//    } else {
//       console.log("SORRY! THIS CITY IS NOT AVALIABLE");
//    }
// } else {
//    console.log("SORRY! THIS COUNTRY IS NOT AVAILABLE");
// }

// SIMPLE NESTED LIST :

// var fruit = prompt("ENTER YOUR FAV FRUIT");
// var fruitColor = prompt("ENTER YOUR FRUIT COLOR");

// if (fruit === "apple"){
//    if (fruitColor === "red"){
//       console.log("ENJOY YOUR FRUIT");
//    }else {
//       console.log("SORRY! NOT AVAILABLE");
//    }
// }else if (fruit === "banana"){
//    if (fruitColor === "yellow"){
//       console.log("ENJOY YOUR NEW FRUIT");
//    }else {
//       console.log("SORRY! NOT VALID ");
//    }
// }else {
//    console.log("SORRY!!!! UNDEFINED");
// }

// chapter # 18 -> LOOPS..
// SIMPLE LOOP PRACTICE :

// for (var i = 0; i <= 99; i++ ){
//   console.log("from loop" + i);
// }

// TABLE LOOP PRACTICE:

// var table = prompt("write a number.");
// for (var i = 1; i <= 10; i++ ){
//    console.log(table + " X " + i + " = " + i*table) ;
// }

// chapter # 19 -> Flags, Boolean, length..

// LOOP WITH ARRAY PRACTICE :

// var cities = ["karachi", "lahore", "multan", "peshawar", "islamabad"]
// var city = prompt("Enter a city name");
// var found = false;

// for (var i = 0; i < cities.length; i++) {
//    if (city.toLowerCase() === cities[i].toLowerCase()) {
//    console.log("found " + city);
//    found = true;
//    break;
//   }
// }
// if (!found) {
//         console.log("Not found " + city)
// }

//chapter # 20 -> NESTED LOOP PRACTICE :

// var array = [[1, 2, 3],["a", "b" , "c"]];

// for (var i = 0; i < array.length; i++ ){
//       for(var j = 0; j < array[i].length; j++){
//             console.log(array[i][j]);
//       }
// }

// chapter # 21 -> CHANGING CASE UPPER /LOWER :

// var text = "This is an Apple";

// text.toLowerCase();
// 'this is an apple'
// text.toUpperCase();
// 'THIS IS AN APPLE'
// text
// 'This is an Apple'
// text = text.toUpperCase();
// console.log(text);
// 'THIS IS AN APPLE'
// text 
// 'THIS IS AN APPLE'

//chapter # 22 -> Strings Measuring length and extracting parts :

// text
// 'THIS IS AN APPLE'
// text.slice(0,4);
// 'THIS'
// text.slice(5,8);
// 'IS '
// text.slice(11,16);
// 'APPLE'
// text.slice(11,16);
// 'APPLE'
// text.slice(11);
// 'APPLE'
// text.slice(8);
// 'AN APPLE'
// text.length;
// 16

//chapter # 23 -> Strings: Finding segments :

// var text = "This is an article about World War II, so enjoy."
// var toReplace = "World War II";
// var replaceWith = "the Second World War";

// for (var i = 0; i < text.length; i++) {
//   var toCompare = text.slice(i, i + toReplace.length);
//   // console.log(toCompare);
//   if (toCompare === toReplace) {
//   text = text.slice(0, i) + replaceWith + text.slice(i + toReplace.length);
//  }
// }
// console.log(text);

//SIMPLE WAY FINDING STRINGS :

// var text = "This is an Apple"
// undefined
// text
// 'This is an Apple'
// text.indexOf("is")
// 2
// text.lastIndexOf("is")
// 5
// text.indexOf("apple")
// -1
// text.indexOf("Apple")
// 11

// SECOND CONDITION OF NESTED FOR LOOP: with Finding segments : 

// var text = "tu kutta hai ek number ka, or kamina bhi hai.";
// var toReplace = ["kutta","kamina"];
// var replaceWith = "sher";

// for (var i = 0; i < text.length; i++) {
//     for (var j = 0; j < toReplace.length; j++) {
//         var toCompare = text.slice(i, i + toReplace[j].length);
//         if (toCompare === toReplace[j]) {
//             text = text.slice(0, i) + replaceWith + text.slice(i + toReplace[j].length);
//         }
//     }
// }
// console.log(text);

//chapter # 24 -> Strings : Finding a character at a location

// var text = "this is an apple or banana"
// undefined
// text
// 'this is an apple or banana'
// text.slice(0,1)
// 't'
// text.charAt(0)
// 't'
// text.charAt(11)
// 'a'
// text.charAt(15)
// 'e'
// text.charAt(text.length - 1)
// 'a'
// text.charAt(text.length - 3)
// 'a'
// text.charAt(text.length - 4)
// 'n'

//chapter # 25 -> Strings : Replacing characters :

// text
// 'this is an apple or banana'
// text.replace("apple","orange")
// 'this is an orange or banana'
// text.replace("apple","orange","banana","mango")
// 'this is an orange or banana'
// text.replace("banana","mango")

// 'this is an apple or mango'
// text = text.replace("banana","mango")

// 'this is an apple or mango'
// text
// 'this is an apple or mango'
// text = text.replace("apple","orange")
// 'this is an orange or mango'
// text
// 'this is an orange or mango'

// var x  = "abc";
// var y = x.replace("a","z");
// console.log(y); // change hogi value.
// console.log(x); // x value same he ayegi.

// chapter # 26 -> Rounding numbers : // ROUND :

// Math.round(5.67)
// 6
// Math.round(5.11)
// 5
// Math.round(5.5)
// 6

// rounding numbers : // CEIL : "point ky bad koi bhi value ho ye round krdeyta hai";

// Math.ceil(3.45)
// 4
// Math.ceil(9.99)
// 10
// Math.ceil(1.00000)
// 1
// Math.ceil(1.0001)
// 2
// Math.ceil(5.59)
// 6

// rounding numbers : // FLOOR : "point ky bad koi bhi value ho ye round nhi krta";

// Math.floor(1.22222)
// 1
// Math.floor(7.9999)
// 7
// Math.floor(12.111)
// 12

// chapter # 27 -> Generating random numbers : * 10,* 100, ........

// Math.random()
// 0.1926654448391527
// Math.random()
// 0.11319094551478281
// Math.random()*10
// 2.987080075848152
// Math.random()*10
// 2.5281310837135784
// Math.floor(Math.random()*10)
// 0
// Math.floor(Math.random()*10)
// 8
// Math.floor(Math.random()*10)
// 2
// Math.floor(Math.random()*100)
// 59
// Math.floor(Math.random()*100)
// 94
// Math.floor(Math.random()*100)
// 46

// USER GUESS A NUMBER GAME WITH HELP OF GENERATE A NUMBER :

// var num = Math.floor(Math.random()*10);
// var guess = +prompt("guess a number");

// if (num === guess){
//       alert ("YOU WIN : " + num);
// }else if (num + 1 === guess || num - 1 === guess){
//       alert ("YOU ARE SO CLOSE : " + num);
// }else {
//       alert ("correct number is : " + num);
// }

// CHAPTER : 28 -> Converting strings to integers and decimals :

// var num = "1234"
// undefined
// num
// '1234'
// +num
// 1234
// num
// '1234'
// Number(num)
// 1234
// parseInt(num)
// 1234
// num 
// '1234'
//  num = parseInt(num)
// 1234
// parseFloat("1.0009")
// 1.0009

// CHAPTER # 29 -> numbers to strings :

// var num = 1234
// undefined
// num
// 1234
// num.toString()
// '1234'

// CHAPTER # 30 -> Controlling the length of decimals :
// var num = Math.random()
// undefined
// num
// 0.5417483800886123
// num.toFixed(4)
// '0.5417'
// num.toFixed(3)
// '0.542'
// num.toFixed(2)
// '0.54'
// num.toFixed(1)
// '0.5'

// CHAPTER # 31/32 -> Getting the current & Extracting parts date and time. :

// date
// Wed Mar 29 2023 11:02:29 GMT+0500 (Pakistan Standard Time)
// date.getDate(); // aaj ki date :
// 29
// date.getMonth(); // jo month chal raha hai:
// 2
// date.getDay(); // aaj ka din :
// 3

// var date = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = dayNames[date.getDay()]
// console.log(day);

// date.getFullYear(); // jo year chal raha hai:
// 2023
// date.getHours(); // abhi ky ghanty :
// 11
// date.getMinutes(); // abhi ky minutes:
// 2
// date.getHours() + " : " + date.getMinutes()
// '11 : 2'
// date.getTime()
// 1680069749477
// var date2 = new Date()
// undefined
// date2
// Wed Mar 29 2023 11:11:58 GMT+0500 (Pakistan Standard Time)
// date2.getTime() - date.getTime()
// 569145
// 569145 / 1000
// 569.145
// 569.145 / 60
// 9.48575
// Math.round(9.48575)
// 9.

// EXTRACTING TIME :
// var date = new Date();
// undefined
// date
// Sun Apr 02 2023 19:51:02 GMT+0500 (Pakistan Standard Time)
// date.getTime();
// 1680447062916
// var date2 = new Date();
// undefined
// date2
// Sun Apr 02 2023 19:51:35 GMT+0500 (Pakistan Standard Time)
// date2.getTime();
// 1680447095078
// date2.getTime() - date.getTime(); 
// 32162
// 32162 /1000
// 32.162
// 32.162 /60
// 0.5360333333333334
// Math.round(0.5360333333333334)
// 1

// var hours =  document.getElementById("hour");
// var minutes =  document.getElementById("minute");
// var seconds =  document.getElementById("seconds");
// var sessions = document.getElementById("session");

// setInterval(function(){
//     var date = new Date();
//     var hrs = date.getHours();


// if (hrs >= 12){
//     sessions.innerText = "pm";
// }else{
//     sessions.innerText = "am";
// }
// if (hrs > 12){
//     hrs = hrs - 12;
// }

// hours.innerHTML = hrs;
// minutes.innerHTML = date.getMinutes();
// seconds.innerHTML = date.getSeconds();
// });

// chapter # 33 : Specifying a date and time:

// var today = new Date();
// undefined
// var doomsday = new Date("June 30, 2035");
// undefined
// var current = doomsday - today;
// undefined
// current
// 386308664155
// 386308664155 / 1000
// 386308664.155
// 386308664.155 / 60
// 6438477.735916666
// 6438477.735916666 / 60
// 107307.96226527776
// 107307.96226527776 /24
// 4471.165094386573
// 4471.165094386573 /12
// 372.5970911988811
// 372.5970911988811 
// 372.5970911988811

// var d = new Date("July 21, 1983 13:25:00");
// undefined
// d
// Thu Jul 21 1983 13:25:00 GMT+0500 (Pakistan Standard Time)

// chapter # 34 : Changing elements of a date and time :

//  var d = new Date();
//  d.setFullYear(2001)
//  986308809792
//  d
//  Tue Apr 03 2001 19:40:09 GMT+0500 (Pakistan Standard Time)
//  var d = new Date();
//  d.setHours(12)
//  1680507640788
//  d
//  Mon Apr 03 2023 12:40:40 GMT+0500 (Pakistan Standard Time)
//  var d = new Date();
//  d.setMonth(11)
//  1701614486998
//  d
//  Sun Dec 03 2023 19:41:26 GMT+0500 (Pakistan Standard Time);

// chapter # 35 : Functions :
   // JAVASCRIPT : main functions (first class citizen hai): 
                    //  q hai
    // 1. kesi variable me store hosaky:
    // 2. kesi function me pass hosaky:
    // 3. kesi function sy return hosaky:

// function tellTime() {
// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert("Current time: "+ theHr + ":" + theMin);
// }
// tellTime();

//// chapter # 36 : Functions Passing them data :- SECOND EXAMPLE:

// function sum(num1, num2){
//     var total = num1 + num2;
//     return total;
// }
// console.log(sum(2,3));
// console.log(sum(4,6));
// console.log(sum(11,9));

//// chapter # 37 : Functions Return back data :- THIRD EXAMPLE:

// function avg(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     let result = sum / arr.length;
//     result = result.toFixed(2);
//     result = Number(result);
//     return result;
// }

// console.log(  avg([2,4,2,3,4,5,4])  );

//FUNCTIONS USES ON CLICK BUTTTON:

// function sun(){
//     console.log(new Date());
// }

// Return Topic : 
// jo function kuch return na kry wo undefined hota hai..

// chapter # 36 : Functions: Passing them data.

// function add(a,b,c) {
//     alert(a * b + c);
// }
// add(2,4,6);


// 37 Functions: Passing data back from them.

// function add(x , y){
//     return  x + y ;
// }
// var res =  add(3,2);
// alert(res);


//chapter # 38 -> Functions: Local vs. global variables..
//HOISTING :

// var abc = 10; // global variable :

// function demo(){
//     console.log(abc); 
//     var abc = 20; // local variable :
// }
// demo();

// function showMessage(m, string, num){
//     alert(m + string + num);
// }
// var month = "March";
// showMessage(month, "'s winner number is ", 23);

// chapter # 39 -> switch statements: How to start them..

// var date = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var day = dayNames[date.getDay()] 
// // alert (day);

// var dayOfWk = day; 

// switch(dayOfWk) {
// case "Sat" :
//      alert("Whoopee Sat");
//      break;
// case "Sun" :
//     alert("Whoopee Sun");
//     break;
// case "Fri" :
//     alert("TGIF!");
//     break;
// default :
//     alert("Shoot me now!");
// }

// Switch case : second practice ..

// var weekDay = prompt("enter a day");
// switch (weekDay) {
//     case "Mon":
//         alert("working day");
//         break;
//     case "Tue" :
//         alert("same mon");
//         break;
//     case "sun":
//         alert ("rest day"); 
//         break;
//     default:
//         alert ("wella");
// }

//chapter # 41 -> while loops :

// var i = 0;
// while (i <= 3) {
//     console.log(i);
//     i++;
// }

//chapter # 42 -> do...while loops :
// DO WHILE (Means) :- kam phely hoga condition bad me chaly gi.

// var i = 0; 
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// chapter # 44 -> Commenting :

// koi bhi text ho usy comment krne ky do taraky hotay hai.
// 1. //
// 2. /*   */


// chapter # 45 -> Events: link..

//<a href="#" onclick= "alert(add(2,3))"; > Click </a>
// function add(a, b){
//     var sum = a + b;
//     return sum;
// }

// chapter # 46 -> Events: button..

//<input type="button" value="Click" onClick= "tellTime();">

// function tellTime() {
// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// alert("Current time: "+ theHr + ":" + theMin);
// }

// chapter # 47 -> Events: mouse..

// <a href="#" onmouseover= "console.log(sum(4,6));"> Click </a> 

// function sum(num1, num2){
//     var total = num1 + num2;
//     return total;
// }

// chapter # 48 -> Events: fields.. 

// Email:<br>
// <input type="text" size="30" onFocus="this.style.backgroundColor='yellow';"></input>
//onBlur="this.style.backgroundColor='white';">

// chapter # 49 -> Reading field values:

// <input type="text" id="text1">
// <input type="button" value="click me" onclick="checkIt()">

//  function checkIt (){
//     var text = document.getElementById("text1");
//     console.log(text.value);
// }  

// chapter # 50 -> Setting field values :

// <input type="text" id="text1">
// <input type="button" value="set" onclick="setIt()"></input>

//  function setIt (){
//     var text = document.getElementById("text1");
//     text.value = "hello!";
// }  

// chapter # 51 -> Reading and setting paragraph text :

// function expandLoris(){
//     var slowLoris = document.getElementById("slowLoris").innerHTML = "this is a new para.";
// }

// chapter # 52 -> Manipulating images and text :

// function expandLoris(){
//     var slowLoris = document.getElementById("slowLoris")
//     // slowLoris.innerHTML = "this is a new para.";
//     slowLoris.className += " hidden";
// }

// chapter # 53 -> Swapping images :
// chapter # 54 -> Swapping images and setting classes :

// chapter # 55 -> Setting styles :

// function makeBig() {
//     var p1 = document.getElementById("p1")
//     p1.style.fontSize = "2em";
// }

// chapter # 56 -> Target all elements by tag name :

// var par = document.getElementsByTagName("p");
// var textInMiddleParagraph = par[1].innerHTML;
// par[1].innerHTML = "This SUV is too big.";

// for (var i = 0; i < par.length; i++) {
//     par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
// }

//SECOND EXAMPLE :
// var para = document.getElementsByTagName("p");
// var paraChange =  para[2].innerHTML;
// para[2].innerHTML = "This is a New Car.";

//  for (var i = 0; i < para.length; i++ ){
//     para[2].style.color = "red";
//     para[i].style.fontFamily = "sans-serif";
//     para[i].style.fontSize = "20px";
// }

// chapter # 57 -> Target some elements by tag name :

// var pars = document.getElementsByTagName("p");
// var textInMiddleParagraph = pars[1].innerHTML;
// var e = document.getElementByID("rules");
// var paragraphs = e.getElementsByTagName("p");
// var e = document.getElementByID("rules");
// document.getElementsByTagName("p");
// e.getElementsByTagName("p");

// var t = document.getElementById("table1");
// var cells = t.getElementsByTagName("td");
// for (var i = 0; i < cells.length; i++) {
//  cells[i].style.backgroundColor = "pink";
// }

// second example :
// var t = document.getElementById("table1");
// var cells1 = t.getElementsByTagName("th");
// for (var i = 0; i < cells1.length; i++) {
//  cells1[i].style.backgroundColor = "yellow";
// }

// chapter # 58 -> The DOM : (Introduction)
// chapter # 59 -> The DOM: Parents and children :(Introduction)

// chapter # 60 -> The DOM: Finding children :

// var p = document.getElementsByTagName("p");
// var contents = p[4].innerHTML;
// p[4].innerHTML = "CHANGING VALUE !";

// var div = document.getElementById("ny");
// var p = div.getElementsByTagName("p");
// var contents = p[1].innerHTML;
// p[1].innerHTML = "NEW CHANGES :";

// var p = document.childNodes[0].childNodes[1].childNodes[1].childNodes[1];
// var contents = p.innerHTML;

// var d = document.getElementById("ny");
// var p = d.childNodes[1];
// var contents =  p.innerHTML;

// chapter # 61 -> The DOM: Junk artifacts and nodeType..

// var d = document.getElementById("humpty");

// var pCounter = 0;
// for (var i = 0; i < d.childNodes.length; i++) {
//     if (d.childNodes[i].nodeType === 1) {
//         pCounter++;
//     }
//     if (pCounter === 2) {
//         d.childNodes[i].innerHTML = "All his men.";
//         break;
//     }
// }

// chapter # 62 -> The DOM: More ways to target elements..

// var targetNode = parentNode.childNodes[0];
// var targetNode = parentNode.firstChild;

// var targetNode = parentNode.childNodes[2];
// var targetNode = parentNode.lastChild;


// var kidNode = document.getElementById("div2");
// var pNode = kidNode.parentNode;
// console.log(pNode);

// var firstEl = document.getElementById("div1");
// var secondEl = firstEl.nextSibling;
// console.log(secondEl);

// var firstEl = document.getElementById("div1");
// var nonexistentEl = firstEl.previousSibling;
// console.log(nonexistentEl);

// chapter # 63 -> The DOM: Getting a target's name..???

// var parent = document.getElementById("div1");
// var target = parent.firstChild;
//     nName = target.nodeName;
//     console.log(nName);

// chapter # 64 -> The DOM: Counting elements.??

// var liElements = document.getElementsByTagName("li");
// var howManyLi = liElements.length;
// for (var i = 0; i < howManyLi; i++) {
//     if (liElements[i].innerHTML === "orange") {
//         liElements[i].innerHTML = "hello";
//     }
// }

// var parentNode = document.getElementById("d1");
// var nodeList = parentNode.childNodes;
// // console.log(nodeList);

// var howManyKids = nodeList.length;
// // console.log(howManyKids);
// var numberPics = 0;
// for (var i = 0; i < howManyKids; i++) {
//     if (nodeList[i].nodeName.toLowerCase() === "img") {
//         numberPics++;
//     }
// } console.log(numberPics);

 // chapter # 65 -> The DOM: Attributes .. ???


// var target = document.getElementById("p1");
// var hasClass = target.hasAttribute("class");
// console.log(hasClass);

// var target = document.getElementById("div1");
// var attVal = target.getAttribute("class");
// console.log(attVal);

    //  .SET ATTRIBUTE :- kesi bhi node ky under attribute ky oper uski value pass krta hai :
// var target = document.getElementById("div1");
// target.setAttribute("class", "special");
// console.log(target);

// chapter # 66 -> The DOM: Attribute names and values..

// var list = document.getElementsByTagName("p");
// console.log(list);

// var list = document.getElementById("p1").childNodes;
// console.log(list);

// var list = document.getElementById("p1").attributes;
// console.log(list);

// var numOfItems = list.length;
// console.log(numOfItems);

// var numOfItems = document.getElementById("p1").attributes.length;
// console.log(numOfItems);

// var nName = list[2].nodeName;
// console.log(nName);

// var nValue = list[2].nodeValue;
// console.log(nValue);

// chapter # 67 -> The DOM: Adding nodes..

// var nodeToAdd = document.createElement("p"); // p  new element banaya ..
// console.log(nodeToAdd);

// var imgNodeToAdd = document.createElement("img"); // img new element banaya ..
// console.log(imgNodeToAdd);

// nodeToAdd.setAttribute("class", "regular"); // p element ky undr attribute or uski value define kii .
// console.log(nodeToAdd);

// imgNodeToAdd.setAttribute("border", "1"); //img element ky undr attribute or uski value define kii .
// console.log(imgNodeToAdd);

// var newTxt = document.createTextNode("Hello!"); // ye ek text lekha hai ..
// console.log(newTxt);

// nodeToAdd.appendChild(newTxt); // ab isko p ky element main kese bhejna hai wo bataya gaya hai.. 
// console.log(nodeToAdd);

// chapter # 68 -> The DOM: Inserting nodes..

// var parentDiv = document.getElementById("div1");
// var newParagraph = document.createElement("p");
// var t = document.createTextNode("Hello world!");
// newParagraph.appendChild(t);// 1st kha rakhna hai, 2nd functions name ,3rd kia rakhna hai ..
// parentDiv.appendChild(newParagraph);// same rule //

    // my own hand practice :
// var newDiv =  document.getElementById("div2");
// var newH1 = document.createElement("h1");
// var insText = document.createTextNode("my new work!");
// newH1.appendChild(insText);
// newDiv.appendChild(newH1);

// var parentDiv = document.getElementById("div1");
// var newParagraph = document.createElement("p");
// var t = document.createTextNode("Hello world!");
// newParagraph.appendChild(t);
// paragraph1 = parentDiv.firstChild;
// parentDiv.insertBefore(newParagraph, paragraph1);
// console.log(parentDiv);

// var target = parentDiv.childNodes[1];
// parentDiv.insertBefore(parentDiv ,target.nextSibling);
// console.log(parentDiv);


// chapter # 69 -> objects 
// object ky under jo functions hotay hai usy hum Method bhi khty hai.

    //kesi bhi data type ko read kese krty hai :
// 1. Read kese krna hai.
// 2. Write kese krna hai.
// 3. Modify kese krna hai.

// let rehan = {
//     name: "Rehan Ahmed",
//     age: 19,
//     email: "abc@gmail.com",
//     greet: function (){
//         console.log("hello from " + this.name);
//     },
//     address: {
//         area: "32/c",
//         streetNo: 22,
//         houseNo: 12
//     }
// };
// rehan.phone = 03155616172;
// rehan.hobbies = ["video Games","Reading"];
// delete rehan.age;
// // rehan.name = "rehan sahab";
// // console.log(rehan.name,rehan.email);
// // console.log(rehan.age);
// console.log(rehan.address);
// rehan.greet();


// let persons = ["ali","30","false"];
// console.log(persons[0]);
// persons[0] = "ahmed";
// console.log(persons[0]);

// let person = {
//     name: "john",
//     age: 20,
//     isMarried: false,
//     family: ["ali","ahmed","raza"],
//     subjects:{
//         urdu: 90,
//         english: 80,
//         math: 70
//     } 
// }
// console.log(person.subjects.english);

// person.subjects.english = 85;
// console.log(person.subjects.english);


// console.log(person.family[1]);

// person.family[1] = "faraz";
// console.log(person.family[1]);
// console.log(person.name);
// console.log(person.age);
// console.log(person.isMarried);

// person.name = "ahmed";
// person.age = 70;
// person.isMarried = true;
// person.fullName = "muhammad ahmed";
// console.log(person);

    // NON NATIVE / NON-PRIMATIVE :
        // OBJECTS:
        // ARRAYS:
        // PROTOTYPES:

// ye sab alag jaga rakhy hotay hai
// inka variable ky undr address chal raha hota hai. 

// let a = { name: "ali"}
// let b = a;

// console.log(a.name);
// console.log(b.name);

// a.name = "arsalan";

// console.log(a.name);
// console.log(b.name);

// b.name = "rehan";

// console.log(a.name);
// console.log(b.name);

// BEALTAN VARIABLE / NATIVE VARIABLE / PRIMATIVE :
// primative copy hoti hai apni value sy.
// 
// NATIVE VARIABLE IN JAVASCRIPT:
        //NUMBER:
        //STRING:
        //BOOLEAN:
        //NULL:
        //UNDEFINED:

// let num1 = 5; 
// let num2 = num1;

// console.log(num1);
// console.log(num2);

// num1 = 23;

// console.log(num1);
// console.log(num2);

// let a = { name: "ali"}

// let b = { ...a } ;// spread operater:

// console.log(a.name);
// console.log(b.name);

// a.name = "arsalan";

// console.log(a.name);
// console.log(b.name);

// b.name = "rehan";

// console.log(a.name);
// console.log(b.name);

// chapter # 71 -> object method : 

// let student = {
//     name: "Malik",
//     subject: "CS",
//     batch: "9",
//     marks: "70" 
// } 
// console.log(student.name);
// console.log(student["name"]);

// let student = {
//     name: "Malik",
//     subject: "CS",
//     batch: "9",
//     marks: "70",
//     // country: "pakistan" 
// }

// let key = "country";
// let value = "pakistan";


// student[key] = value;    

// console.log(student);

// let student = {
//     name: "Malik",
//     subject: "CS",
//     batch: "9",
//     marks: "70",
//     monthlyFees: 1500,
//     courseDuratioInMonths: 4,
//     calFees: function () {

//         return this.monthlyFees * this.courseDuratioInMonths
//        // return student.monthlyFees * student.courseDuratioInMonths
//     }
// }

// let result1 =  student.calFees();
// console.log(result1);

// chapter # 72 -> Objects Constructors => Banane wala 

// function Course(title, subtitle, durationInMonth,monthlyFees,instructotName){
//     this.title = title,
//     this.subtitle = subtitle,
//     this.durationInMonth = durationInMonth,
//     this.monthlyFees = monthlyFees,
//     this.instructotName = instructotName
// };

// let course1 = new Course(
//     "Ai chatbot development",
//     "lets talk to your computer like a human",
//     4,1500,
//     "M.asif ahmed"
// );

// console.log(course1.title);
// console.log(course1.durationInMonth);

// chapter # 73 -> Objects Constructors for Methods :

// koi bhi aesa function jo hamain object
// bana ky dy ussy constructor khty hai.

// function User(name,id,age){
//     this.name = name;
//     this.id = id;
//     this.age = age;
//     this.greet = function (){
//         console.log(this.name + "Hello, user");
//     }
// }

// let user1 = new User("Farhan ", 123, 24);
// let user2 = new User("Salam ", 1234, 34);
// let user3 = new User("Rehman ", 12345, 44);
// console.log(user1);
// console.log(user2);
// console.log(user3);
// user1.greet();

// chapter # 74 => Objects: Prototypes .

// function User(name,id,age){
//     this.name = name;
//     this.id = id;
//     this.age = age;
// };
// let user1 = new User("Farhan ", 123, 24);

// User.prototype.greet = function (){
//     console.log(this.name + "Hello, user");
// };
// user1.greet();
// // console.log(user1);

// chapter # 75 => Objects: Checking for properties and methods .
 
// var obj = {
//     color: "white",
//     length: "3cm",
//     speed: "24 km/h",
//     backgroundColor: "black",
//     "#123" : "data"
// };

// for(var key in obj){
//     console.log(key, " => ", obj[key]);
// };

// let m1 = "color" in obj;
// console.log(m1);

// let m2 = obj
// console.log(m2);




//////////////////////////////// """ ( GH ) """ ///////////////////////////////////////
/////////////  chapter : 01-05  //////////////////


// # : 01
// alert ("hello world");

// # : 02
// let data = "ghous ahmed";
// alert(data);

// let data = "ghous ahmed";
// data = "ishaq bhojani";
// alert(data);

// # : 03
// let num = 123;
// alert (num);

// let num = 10;
// num = num - 4
// // num += 6;
// alert (num);

// # : 05
// let num = 10;
// let num1 = 7;
// // let total = num + num1;
// // let total = num - num1;
// // let total = num * num1;
// // let total = num / num1;
// let total = num % num1;
// console.log(total);


/////////////  chapter : 06-10  //////////////////

// # : 06
// let num = 5;
// num++;
// num--
// --num
// ++num
// console.log(num);

// # : 07
// let num = 5
// let num2 = 6
// let num3 = 7
// let num4 = 9
// let sum = (num - num2) + (num3 + num4);
// console.log(sum);

// # : 08
// let name1 = "hello ";
// let name2 = "world ";
// let name3 = "users";
// let data = name1 + name2 + name3;
// console.log(data);

// # : 09
// let num = +prompt("enter a number");
// console.log(num);
// let num = prompt("enter your PhoneNumber","+92");
// console.log(num);
// let num1 = +prompt("enter a num 1");
// let num2 = +prompt("enter a num 2");
// console.log(num1 + num2);

// # : 10
// let num1 = +prompt("Enter a number 1") ;
// let opt = prompt("Enter a opertor") ;
// let num2 = +prompt("Enter a number 2") ;
// let result ;

// if (opt === "+"){
//     result = num1 + num2;
// }
// if (opt === "-"){
//     result = num1 - num2;
// }
// if (opt === "*"){
//     result = num1 * num2;
// }
// if (opt === "/"){
//     result = num1 / num2;
// }
// console.log(result);


/////////////  chapter : 11-15  //////////////////

// # : 11
// let salary = 1000;
// let bonus = 500;
// let firstTime = 600;
// let secondTime = 400;

// if(salary >= firstTime + secondTime){
//     alert("malegi..")
// }

// if(salary <= firstTime + secondTime){
//     alert(" nahi malegi..")
// }

// if (salary + bonus === firstTime + secondTime){
//     alert ("sorry nhi milskti...")
// }
// if (salary + bonus !== firstTime + secondTime){
//     alert ("ok mil jayegi..")
// }

// # : 12
// let food = prompt("Enter Your Fav Desh");
// if (food === "biryani"){
//     console.log("good");
// }else if (food === "burger"){
//     console.log("good hai");
// }else if (food === "fries"){
//     console.log("good hai bhai");
// }else if (food === "lays"){
//     console.log("bsss ab tu liya bhai");
// }else{
//     console.log("ghr aja bhai tuu...");
// }

// # : 12

// let food = prompt("Enter Your Fav Desh");
// // let addItem = prompt("Enter a additem");

// if (food === "biryani"){
//     let addItem = prompt("Enter a additem");
//     if(addItem === "raita"){
//         console.log("ye bhi lyaoo..");
//     }else{
//         console.log("sirf " + food + " he ly aoo..");
//     }
//     console.log("good");
// }else if (food === "burger"){
//     console.log("good hai");
// }else if (food === "fries"){
//     console.log("good hai bhai");
// }else if (food === "lays"){
//     console.log("bsss ab tu liya bhai");
// }else{
//     console.log("ghr aja bhai tuu...");
// }

// # : 13

// let employee = +prompt("Enter Your Age");
// let gender = prompt("Enter your gender");

// if (employee > 20 && employee < 40 && gender === "male"){
//     console.log("Your Are Selected");
// }else{
//     console.log("your entry now allow");
// }

// let items = prompt("Enter item");
// let coldItem = prompt("enter cold Item");

// if (items === "bread" || items === "roti" && coldItem === "milk"){
//     console.log("good hai..");
// }else{
//     console.log("rehne doo..");
// }

// # : 14

// let skillsReq = "html/css";
// let eduReq = "bba";
// let cityReq = "karachi";
// let skills = prompt("Enter Your Skills");
// let edu = prompt("Enter Your Edu");
// let city = prompt("Enter Your City");

// if(skills === skillsReq){
//     if(edu === eduReq){
//         if(city === cityReq){
//             console.log("app select hogaye ho..");
//         }else{
//             console.log("ye city allow nhi hai");
//         }
//     }else{
//         console.log("ye eduction allow nhi hai..");
//     }
// }else{
//     console.log("ye skills allow nhi hai");
// }

// # : 15
// let students = ["ghous","ahmed","raza","ali","khan"];
// console.log(students.length);

// let students = [["ghous","ahmed"],["raza",["ali"]],["khan"]];
// console.log(students[0][1]);
// console.log(students[1][0]);
// console.log(students[2][0]);
// console.log(students[1][1][0]);



/////////////  chapter : 16-20  //////////////////

// # : 16 , 17
// let fruits = ["Apple","Mango","Banana","Orange"];

// fruits.pop();
// fruits.push("Kiwi");
// fruits.shift();
// fruits.unshift("Grapes");
// fruits.splice(1,1,"Papaya");
// fruits.splice(0,0,"aamm");
// fruits.splice(4,1,"jaman")
// console.log(fruits);

// let copy = fruits.slice(0,3);
// console.log(copy);

// Topic : -> SORT
// let arr = [9,4,5,7,2,8,3,1];
// arr.sort();
// console.log(arr);

// Topic : -> JOIN => return string
// let arr = ["ghous","ahmed","khan","ali"]

// console.log(arr.join(" "));

// Topic : -> SPLIT => return array
// let str = "ghous ahmed"
// console.log(str.split(" "));

// Topic : -> REVERSE =>
// let arr = ["ghous","ahmed","ali","khan"];
// console.log(arr.reverse());

// let arr = ["ghous","ahmed","ali","khan"];
// console.log(arr.reverse().join(" "));

// Topic : -> TRIM => first or last sy space khatm krta hai:

// "hello world".trim();
// 'hello world'
// "hello world   ".trim();
// 'hello world'
// "    hello world   ".trim();
// 'hello world'
// "    hello world   "
// '    hello world   ';

// # :-> 18 / 19

// let cities = ["karachi","lahore","multan","pindi"];
// let userCity = prompt("Enter Your City Name");
// let flag = false;
// for(let i = 0; i < cities.length; i++){
//     if(userCity === cities[i]){
//         flag = true;
//         break;
//     }
// }
// if(flag === true ){
//     alert("true");
// }else {
//     alert("false")
// }

// let str = prompt("Enter Your Palinderome word");

// let strings =  str.split("").reverse().join("");
// console.log(strings);

// if (str === strings){
//     console.log("it's a palindrome word");
// }else{
//     console.log("it's not a palindrome word");
// }

// let str = prompt("Enter Your Word");
// let reverseStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i]
// }
// if (str === reverseStr) {
//     console.log("it's a palindrome word : " + reverseStr);
// } else {
//     console.log("it's not a palindrome word : " + reverseStr);
// }

// let countries = ["pakistan","america","china","japan"];
// let UserCountry = prompt("Enter your country");
// let flag = false;

// for(let i = 0; i < countries.length; i++){
//     if(UserCountry === countries[i]){
//         flag = true;
//         break;
//     }
// }
//     if (flag === true){
//     console.log("welcome");
// }else{
//     console.log("no entry");
// }

// # :-> 20

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     fullNames.push(firstNames[i] + lastNames[j]);
//   }
// }
// console.log(fullNames);



/////////////  chapter : 21-25  //////////////////

// # :-> 21

// let str = "asif ahmed";
// let upperCase = str.toUpperCase();
// console.log(upperCase);
// let lowerCase = upperCase.toLowerCase();
// console.log(lowerCase);

// let str = "asif";
// let capitalize = str[0].toUpperCase()
// console.log(capitalize);
// // let result = capitalize + str.slice(1);
// let result = capitalize + str.slice(-3);
// console.log(result);

// # NEW EXAMPLE TOPIC:
// let str = prompt("enter your name");
// var words = str.split(" ");
// let arr = [];

// for(var i = 0; i < words.length; i++){
//     var result = words[i][0].toUpperCase() + words[i].slice(1);
//     arr.push(result);
// }
// console.log(arr.join(" "));

// # :-> 22

// let str = "ghous asif ahmed";
// for(var i = 0; i < str.length; i++){
//     if(str.slice(i,i + 4) === "asif"){
//         console.log("nO allow");
//         break
//     }
// }

// # :-> 23

// let str = "karachi sy lahore tak";
// // console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));

// # :-> 24

// let str = "Hello, my name is ghous ahmed";
// // let data =str.charAt(str.length - 1)
// let data = str.charAt(1)
// console.log(data);

// # :-> 25

// let str = "Hello, my name is ghous ahmed";
// // console.log(str.replace("ghous","ali"));
// console.log(str.replaceAll("ghous","ali"));



/////////////  chapter : 26-30  //////////////////


// # :-> 26

// let num = Math.round(2.49);
// let num = Math.round(2.5);
// let num1 = Math.ceil(2.5);
// let num2 = Math.floor(2.5);
// console.log(num);
// console.log(num1);
// console.log(num2);

// # :-> 27
// let num = Math.random();
// let num = Math.random()*10;
// let num = Math.round(Math.random()*10);
// console.log(num);
// let num = Math.random()*10;
// console.log(Math.round(num));

// # :-> 28
// "123"
// '123'
// Number("123")
// 123
// +("123")
// 123
// parseInt("123")
// 123
// parseFloat("1.2344")
// 1.2344
// parseInt("1.2344")
// 1

// # :-> 29

// let num = 123;
// console.log(num.toString());
// let num1 = 123;
// undefined
// num1.toString()
// '123'
// num1.toString()
// '123'

// # :-> 30

// let number = Math.random();
// number
// 0.4908765070955621
// number.toFixed(2)
// '0.49'
// number.toFixed(3)
// '0.491'
// number.toFixed(4)
// '0.4909'
// number.toFixed(5)
// '0.49088'