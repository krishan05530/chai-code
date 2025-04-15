

const person ={

    x:10,
    firstname:"krish",
    lastname:"kumar",
    hobbies:['cding', 'gym'],

    isMarried:false,

    getFULLname:function()
    {
   return "piyush"
    },

    // object insdie a object
    address:{
        hno:1,
        street:1,
        countryCode:10,
    }
}

console.log(person.address.countryCode)

const remote={
     color:"black",
     brand:"xyc",
     dmension:{
        height:1,
        width:2,
     },
     turnoff:function (){
   
     },

     volumeUp:function()
     {

     },
}



// in orimiitve they create copy 
// let fname="hitesh";
// let fname2=fname;
// console.log(fname) 

// fname2='pish';
// console.log(fname)


// here in object they are sharing the the same memory
let p1={
    fname:"hitehs",
}

let p2=p1
p2.fname='krish'  // changing it , chnages the p1 also

console.log(p2)
console.log(p1)

// conslusion :-> in case of object ,let p1=p2; , here we copy address directly , so any chnages reflect in both
//but in case of primitive , fname2=fname, directyly copy happends

// ->>>>>>>>>>>>>what if i want to copy the object ,no address copy ,

let t1={
    fname:"hitesh",
    lname:"choug",
}

let t2={
fname:t1.fname,
lname:t1.lname,
}

t2.fname='rahul'

console.log(t1.fname)
console.log(t2.fname) 

// here we created copy of object t1 , 
// but this method is very time consuming thats why we use SPREAD OPERATOR 
// ->>>>>>>>>>>>>>>>>>>>>>>>>>>>> SPREAD OPERAOTR->>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let t3={...t1}; // created th e copy of t1
console.log(t3);


// another case 

let m1={
    fname:"hitesh",
    lname:"choug",
    address:{
        l:1,
        f:1
    }
}

let m2={...m1}; // it do copy via value , but object inside another object is passed via ref

// agar array hota , tab bhi refernce hi pass hota
m2.address.l=2;

console.log(m1);

console.log(m2);
// see here it changes the l of m1 also , so object inside a object was copy via reference 
// this concept is known as->>>>>>>>>> shallow copy,<<<<<<<<<<< kuki uper uper se copy hua he ,

// so we have to do ">>>> deep copy <<<<<<<<<<
const m1_string =JSON.stringify(m1);
console.log( typeof m1_string);

console.log(m1);

const m2_object =JSON.parse(m1_string);
console.log(m2_object);

console.log(typeof(m2_object))