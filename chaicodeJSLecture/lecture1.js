// let name = "hitesh";

// const pie = 3.14;


// data type : primitve , non-primitive(object)

// primitve
// let num = 10; // Number (N in cap)
// number is 10.01 also 


// let text = "hello" // String (S in cap)

// let isTrue = true; // Boolean (B in cap)  

// let nothing = null; // data type of null is object
// let undefineVar = undefined; //  data type of Undefined is undefined (U in cap)

// let symbolVar = Symbol(); // Sysmbol dataType
// console.log(typeof nothing);
// console.log(typeof undefineVar);

// non-primitive
// object 
// let person = {
//     name: "hiteh",
//     age: 19
// };



// conversion of data type
let number = "42"; // its strign datatype 

// // ->>>>>>>standared , us it to convert string into number
// let convertedNumber = Number(number); // converted into number datatype
// console.log(typeof convertedNumber);


// other way to do 
// let convertedNumber =+number; // converted into number datatype
// console.log(typeof convertedNumber);

// let convertedNumber= parseInt(number); // converted into number datatype



// let str = 123;
// let convertedStr = String(str); // converted into string datatype
// console.log(typeof convertedStr);


// operation 
// let a = 10;
// let b = 13;
// let sum = a + b;
// let diff = a - b;
// let prd = a * b;
// let quot = a / b;
// let rem = a % b;
// let power = a ** b;

// let x = 5;
// let y = 10;
// comarison  
// === check type also 
// == check only value
// console.log(x === y);
// console.log(x !== y);
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);


// js has package
// math 
// dateTime

// nodejs  has package
// crypto
// http

console.log(Math.max(5, 10));
console.log(Math.min(5, 10));

console.log(Math.random()); // here we get value betwene 0 to 1

console.log(Math.floor(5.9)); // it will give 5
console.log(Math.random() * 10); // it will give value between 0 to 10
// get value between 1 to 6 
console.log(Math.floor(Math.random() * 6) + 1);

let firstName="krishan";
let lastName="kumar";

let fullName=firstName+" "+lastName; // it will give krishan kumar

let message="hello word";

console.log(message.length); // it will give length of message

console.log(message.toUpperCase());
console.log(message.toLowerCase());

console.log(message.indexOf("word")); // it will give index of word
console.log(message.slice(0,5)); // it will give hello
let myName="Krishan";

let  greeting =`Hello ${myName}`; // it will give Hello Krishan
