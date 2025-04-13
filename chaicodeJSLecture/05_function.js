function greet(name)
{
    console.log( `Hello World ${name}`);
}

greet("krish");


let globalvar="i am  global";

function modifiesGlobal()
{
    globalvar="i am modified global";
    console.log(globalvar);

    let blockScopVar=" I am block scope";
    console.log(blockScopVar);
}

modifiesGlobal();


// iffi function ,  immedetly invoked function
let conf=function(){}(); // it exectured only once

// iffi function ,  immedetly invoked function
let config= function()
{

    let setting ={
        theme:"dark",
    }
    return setting;
}();



let person1={
    name:"ravi",
    greet:function()
    {
         console.log(`Hello ${this.name}`); // here need to use "this"
    }
}
// centext define karne ke liye this keyword use hota hai  
 
person1.greet(); // it will print ravi

let person2={
    name:"hitesh",
}

// how to do it , person1  ka function call ho , lekin person2 ka name print ho
person1.greet.call(person2); // call function is used to change the context of object

// using bind function
const bindGreet= person1.greet.bind(person2); // bind return the new function
console.log(bindGreet ());

// call is use to set the context of object
// bind is also use to set the context of object but it return function then we need to call that function


// we can aslo do like this
person1.greet.call({name:"suresh"}); // it will print suresh
