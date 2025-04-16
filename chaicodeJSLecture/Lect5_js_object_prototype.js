

// here this obj1 is an instace of Object , so obj1 has all the property that Object has 
// as there is like , __proto__=Object.prototype;
// its an object
const obj1={
    fname:'lrisha',
    lname:'kumar',
    getFullName:function ()
    {
          if(this.lname!==undefined) return `${this.fname}  ${this.lname}`;
    }
}


const obj2={
    fname:'rahul',
    lname:'singh'
}

obj2.__proto__ =obj1;  // it mean now obj2 inherit the property of obj1

//Note, we dont do this , obj2.__proto__ =obj1.__proto__, as we know by deafult , both obj has __proto__ which is equal to Object.Prototype
// so when  if we do like this   obj2.__proto__ =obj1.__proto__ , it would be equl to  obj2.__proto__ =obj1.__proto__=Object.prototype, which boh the object are already doing be default ,
// so to inheri the property of obj1 , we do obj2.__proto__=obj2;


console.log(obj1.__proto__);

 console.log(obj2.getFullName());
 console.log(obj2.fname.toUpperCase());




// NOTE ->>>>>>
// for class, like Object , Array we use prototype , 
// for object of class , like const arr=[],  here arr is object of class Array
// , we use __proto__


// we dont need to copy the one objec to creatr another similar obj 
// we can use class 

//->>>>>>>>>>>>.class->>>>>>>>>>>>>>>>>>>

// yeh ek class he iske liye .prototype use larna hta he , like person.prototype
class person{
    constructor(fname, lname){
 this.fname=fname,
 this.lname=lname
    }

    getFullName(){
        return `${this.fname}  ${this.lname}`
    }
} 


const p1= new person('piyush','kumar');
// internyy p1.--proto=person.protoType;
const p2= new person('krish','sig');

// p1.__proto__ is equal to p2.__proto__ , And boht are equal to 

// console.log(p1.getFullName());
// console.log(p2.getFullName());



// ->>>>>>>>>>>>down here , humne class banay he pers ka , usse inherit kar rahe he obj3, obj4

class pers{
    getFullName()
    {
        return this.fname;
    }
}

// here this obj1 is an instace of Object , so obj1 has all the property that Object has 
// as there is like , __proto__=Object.prototype;
// its an object
const obj3={
    fname:'rani',
    lname:'kumar',
   
}


const obj4={
    fname:'rahul',
    lname:'singh'
}
// is trike se karna padta he 
obj3.__proto__=pers.prototype;
obj4.__proto__=pers.prototype;

console.log(obj3.fname);

// lekin agar hum class bana ke new keyword ka use kare to wo easy rhat he 
