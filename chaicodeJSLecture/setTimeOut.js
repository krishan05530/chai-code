// node index.js to run js code
// console.log("Hello World");
// console.log("by by");

// // setTimeOut  method is used to execute a function after a specified number of milliseconds.
// setTimeout(()=>console.log("i am delayed "),5*1000); // here we are giving the time delay of 5 ms
// // but even if we make this delay 0 ms, stll it wont run immediaty
// setTimeout(()=>console.log("i am delayed "),0);
// console.log("i am first");




// const obj={
//     personName:'Mukul',
//     greet: function()
//     {
//         console.log(`Hello ${this.personName}`);
//     }
// }

// console.log("hello from js");
// setTimeout(obj.greet,2*1000); 
// here we are calling greet method of obj after 1 sec but it will give undefined

// console.log("good bye from js");

/*
js engine ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

js engine is single threaded and synchronous but
 it has some async behaviour because of web api and callback queue and event loop and task queue and micro task queue 
and promise and async await and setTimeOut and setInterval and setImmediate 
and process.nextTick and requestAnimationFrame and mutation observer and intersection 
observer and resize observer and performance observer and idle callback and service worker and web worker and
 web socket and web rtc and web assembly and webgl and webvr and webxr and webgpu

------------------------------js engline has callstack , which execture the js code in synchronous way
but  setTimeOut() function is part of browser ,  its not part of JS engine , its part of web api
so when we call setTimeOut() function, it will be executed by web api(Browser) and not by js engine
setTimeOut is browser feature,
*/


/*
js engine has call stack which will execture these in such sequence->
1 console.log("hellow from js");
2 setTimeout(obj.greet,2*1000); 
3. console.log("by by");

-> seqence of exection : 1->3->2 


->> broweser directly doesnt push anything in callstack, browser put code in callback queue. 
now from callback queue , event loop will push the code in callstack
 event loop will check if callstack is empty or not, if empty then it will push the code from callback queue to callstack
    and then it will execute the code in callstack
*/

/*
🔹 How setTimeout Works with the Event Loop
JavaScript engine sees setTimeout() and sends it to the Web API.
Web API starts the timer (e.g., 2 seconds countdown).
Meanwhile, JavaScript continues executing other synchronous code.
After 2 seconds, the callback is placed in the Task Queue.
The Event Loop checks if the Call Stack is empty and then executes the callback.
*/




// setTimeout(()=>console.log("i am delayed "),5*1000);  // minimum time delay 


/*
const ob={
    personName:'akasj',
    greet: function()
    {
        console.log(`Hello ${this.personName}`);
    }
}
console.log("hi");
ob.greet();  
console.log("by by");
//Note in this we wont get undefined because we are calling greet method of obj directly

*/


/*

// now if we run it using setTimeOut, it will give undefined
const ob={ // this line will execute early
    personName:'akasj', // this line will get exectued early

    // this function is getting called after 2 sec
    greet: function()
    {
        console.log(`Hello ${this.personName}`);
    }
}
console.log("hi");  // this line ill get exectued early
setTimeout(ob.greet,2*1000);  // here we are calling  greet method wiht delay of 2 sec
console.log("by by"); // this line wil get exected early

// so all the code get executed in call stack but after 2s, greet() function start to execute but , this.personName is undefined , now 

*/

//------------------------------------bind------------------------
/*
// now if we bind the context  then we wont get undefined
const ob={ // this line will execute early
    personName:'akasj', // this line will get exectued early

    // this function is getting called after 2 sec
    greet: function()
    {
        console.log(`Hello ${this.personName}`);
    }
}
console.log("hi");  // this line ill get exectued early
setTimeout(ob.greet.bind(ob),2*1000);  // here we are calling  greet method wiht delay of 2 sec but now function is binded wiht context
console.log("by by"); 
// now due to binding the context get provided for greet function and we dont get undefined
*/

//----------------------------------- promises
//const result =getWeather(); // this call will take sometime ,but till now it will have promise object
// promise has resolve and reject method


// console.log("hi");
// setTimeout(()=>console.log("hello after 2s"),0);
// Promise.resolve().then(()=>console.log("promise resolved"));
// setTimeout(()=>console.log("hello after 2s"),0);

// console.log("by");

// sequence of its executin?
/* understand , we have two different type of Quue 
1 micro task queue  :-> it handle the promises , and it get priority first than task Queue
2 task queue(callback Queue)  -> it hanle the setTimeOut and other

so output is 
hi
by
promise resolved
hello after 2s
hello after 2s
*/

// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> starvation of TaskQueue ----------------------------------->
/*
console.log("hi");

// here see once promice complete i put another promise in mirc task quue , if it run infinitly
//  it will make sure then taskQueue (callback Queue) code doesnt execute , and it will be starvtion of callback queue
setTimeout(()=>console.log("hello after 2s"),0);
Promise.resolve().then(()=>
{
    console.log("promise resolved") 
    Promise.resolve().then(()=>
        {
            console.log("promise resolved")

            Promise.resolve().then(()=>
                {
                    console.log("promise resolved")
                });

        });

});
// this will lead to starvation

setTimeout(()=>console.log("hello after 2s"),0);

console.log("by");
*/


// console.log("age is", age);
// let age=5;  // error cant acees age before initialization


// it will run 
test();
function  test()
{
    console.log("I am inside text function");
}


/*
 age=3000;  // now it gives 3000
 console.log("age is", age);
 //let age=20;  // for let it gives error 
 var age=30; // for var it gives undeifned 
*/
 

//-----------------------------------global ececution context  And Hoisitng-----------------------------
// console.log("age is", age);
// var age=20;

/* jab bhi code run hota he tab , global Execution Context  create hota he 
  this GEC has two part
 1 memory base                             
 all varibale , function load in this 
 all the varibale is undefined in this 
 so , age =undefined 


 2 code pahse
 in this code run line by line , so 
   first line -> console.log("age is", age);  //  this will seach in memeory phase where age is undefined , so conosle will give undefined
   second line -> var age=20;  // now it will assign 20 to age 

   and this process is callled Hoisting; 
   Hosting ->   its process in this interpretar appears to move decleration of function, varibale, classes to the top of their scope prior to exection of code
 */

   /*

   console.log("age is",age);  // undefined
   var age=24;

   test();  // it will run due to Hoisting , as when we weite function  like this we  host full body too
   function text()
   {
    console.log("testing");
   }
   console.log("age now", age); // 24


// here testing  function will gver error, cause  var testing , as its variable which is undefined during hoisting ,
testing();
     // it will give error as testing is not defined
   var testing= function(){
    console.log(" new testing");
   }

   */


//->>>>>>>>>>>>>>>>>Hoisitng with let(can we do it)------------------>>>> 
  console.log("age is",age);    
   //  till now it "Dead zone"  for let , so it will give errorwhen we try to access is upper
   let age =10;
   // let and const  both are hoisted by in cae of let , there is concept of TDZ(temporal dead zone)

   //TDZ is the term to describe the state where varobale are  unreachable . they are in scope but arent declared
   // let and const varibale exist in TDz from the start of the block until the declaration is processed

   /* two types of error we received  both are different
   1st when  we just console  -> console.log("age is",age);   and  comment the line let age=10;  
    ReferenceError: Cannot access 'age' before initialization

    2nd error , when we  do
      console.log("age is",age);  
       let age =10;
     eError: Cannot access 'age' before initialization  
     cant access mean , js know ther is variable name age but cant acees , so it mean age was hoisted but cant acess 
  */