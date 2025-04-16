

Function.prototype.describe = function () {
    console.log(`Funcation name is ${this.name}`);
};


function greet(name)    // here name is paramter
{
    return `hello ${name}`
};

greet('rahul'); // here rahul is argument

greet.describe(); //



// this is function deceleration
function add(a, b) {
    return a + b;
}

// function expressed  
const substract = function (a, b) {
    return a - b;
}

// function pass in a function  && returning a function 
// first class function 
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const result = applyOperation(5, 4, (x, y) => x / y);


// 
function createCounter() {  /// this will return the cunction
    let count = 0;
    return function () {  
        count++;
        return count;
    }
}

const counter = createCounter(); // her it will retun the function
console.log("counter", counter());  

function onf() {
    let myName = "hitesk"
}

// console.log(myName); // it wont be , as myName is outof scope

// IIFE immediatly invoked function 

(
    function () {
        console.log("hitesh");
    })()

   // ()() 

