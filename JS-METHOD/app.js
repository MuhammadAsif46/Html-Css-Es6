// strings are immutable , strings can not be changed, excesting string not change new string return

// STRINGS METHODS : check Typeof 

// properties:

    // : length

// Methods:

    // - toUpperCase()
    // - toLowerCase()
    // - Slice()
    // - replace()
    // - concat()           //first string koin second string
    // - trim()
    // - charAt()
    // - includes()


// concat();

// let name1 = "asif"
// let name2 = "ahmed"

// console.log(name1.concat(" is a friend of ", name2, " Ok")); 

// trim();

// let name1 = "asif"
// let name2 = "     ahmed     " 
// console.log(name1.concat(" is a friend of ", name2, " Ok")); 
// console.log(name1.concat(" is a friend of ", name2.trim(), " Ok")); 

// includes();

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox'; //"fox2"
// console.log(sentence.includes(word));
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);



// Arrays are mutable, arrays can be changed,  

// ARRAYS METHODS: check Typeof

// properties:

    // length
    // delete

// methods:

    // - toString():   // convert array to strings
    // - join():       // convert array to strings   
    // - push():       // adding end  
    // - pop():        // removing end  
    // - shift():      // removing start  
    // - unshift():    // adding start  
    // - concat():     // return a new array, does not change existing array 
    // - sort():       // array change/modify alphabetic (1,2,3,4)
    // - sort(compare) // compare function to conver assending & desending
    // - reverse():    // value reverse krta hai



// join();

// let a = [1,2,3,4,5]
// let a = ["a","s","i","f"]
// console.log(a.join());
// console.log(a.join(""));
// console.log(a.join("-"));
// console.log(a.join(" "));


// concat();

// let num1 = [1,2,3,4,5,6,7]
// let num2 = [11,12,13,14,15,16,17]
// let num3 = [211,212,213,214,215,216,217]
// let num4 = num1.concat(num2, num3);
// console.log(num4);

// sort();

// let num1 = [11,222,53,4,75,96,7,8];
// num1.sort();
// console.log(num1);

// sort(compare);

// let compare = (a, b) => {
//     return a - b 
// }
// let compare = (a, b) => {
//     return b - a 
// }
// let num1 = [11,222,53,4,75,96,7,8];
// num1.sort(compare);
// console.log(num1);


// FOR LOOP ARRAY METHOD:

// Methods:

    // - forEach(()=>{}):   // existing array elements operation all elements print 
    // - map(()=>{}):       // create a new array by perfoming some opertion on each array element
    // - filter(()=>{}):    // filter an array with values that passes a test. Create a new array 
    // - reduce(()=>{}):    // Reduce an array to a single value
    // - Array.form():      // used to create an array from any other object/string
    // - For...of           // shortcut for loop 
    // - For...in           // shortcut for loop in key/index 



// forEach(()=>{});     // Arguments (value, index, array)

// let num = [3,4,5,6,7,8];
// num.forEach((n)=>{
//     console.log(n * n);
// })

// array.form(): 

// let name1 = "asifahmed";
// let arr = Array.from(name1);
// console.log(arr);


// For...of

// let num = [1,2,3,4,5,6]
// for(let i of num)
// console.log(i);

// For...in

// let num = [1,2,3,4,5,6]
// for(let i in num)
// console.log(i);


// map (()=>{});         // Arguments (value, index, array)

// let num = [3,4,5,6,7,8];
// let a =  num.map((n)=>{
//     console.log(n);
//     return n
// })

// console.log(a);


// filter (()=>{});

// let num = [2,3,4,5,6,7,8];
//  let a = num.filter((n)=>{
//     return n<5
// })

// console.log(a);


// Reduce (()=>{});

// let num = [2,3,4,5,6,7,8];
//  let a = num.reduce((n1, n2)=>{
//     return n1 + n2
// })

// console.log(a);

// reduce fatcorial genrate:

// let num = [1,2,3,4];
// let a = num.reduce((n1, n2)=>{
//     return n1 * n2
// })

// console.log(a);


// let number = Math.floor(Math.random()* 100);
// // let user = +prompt("Enter a number");
// let user;
// let chances = 0

// while(user != number){
//     chances = chances + 1;
//     user = +prompt("Enter a number");
//     if(user === number ){
//         console.log("you win correct number");
//         console.log(`you number is acctual in ${100 - chances} chances`);
//     }else if(user > number && user < 100){
//         console.log("your number is greater than actuall number");
//     }else if(user < number && user > 0){
//         console.log("your number is smaller than actuall number");
//     }
//     else{
//         console.log("enter number between 1 to 100");
//     }
// }

// console.log(user);
// if (user === number){
//     console.log("you win " + user);
// }else{
//     console.log("you lose " + user);
// }
// console.log(number);