
const arr=[1,2,3];
// arr.filter() // thsea method comes , here comes the prototy

const str="krish";

const obj={
    x:1, length:1


}

obj.x;
// dot operator object ke properties ko acess karne me help karta he 

// Aary has  .map
    //  .filter
    //  .forEach 
    // araay has these function , 
    // prototype : its an obj
    // when we create an array , then js , in array create a .prototype object 
    // in that all that , all the method copy is created

    //jab bhi veribale banate he , uske prototype me saare function available ho jate he


    // in case of string 
    // const str="piysh";
    // now str jo ki ek string veriable he , uske prototype me sare method availbel honge
    
    
    // arr._proto_


    // Array.prototype={propperties}
//   const aray=[1,2,3];
//   aray.__proto__=Array.prototype
 // Array ke jitne bhi property he wo ab aray ke prototype me copy ho gaye


 // string ke jitn ebhi method he uske prototype me ,
//  String.prototype();
 const st="piy";
//  st.__proto__=String.prototype();
//string ke jitn ebhi method he uske prototype me ,  wo sub st ke proto me copy ho gaye

Array.prototype.piyush=function (){
    console.log('thi is hanldeld by piyush');
}

const num=[1,2,3,4]; 
num.piyush(); // op  thi is hanldeld by piyush'

//->>>>>>>>>>>>>>>>>POLYFILL FUNCTIOn->>>>>>>>>>>>>>>..

if(!Array.prototype.fill)
{

    // this is called polyfilll function , backup function 
    Array.prototype.fill=fnction()
    {

    }
}

// ex if fill function is not supported by o\bowser then

//->>>>>>>>>>>>>>>>>>>>>>now try to write polyfill function ->>>>>>>>>>>>>>>>
// polyfil function for foreach
//return undefined, 
// takes function and index as input


if(!Array.prototype.myforEach)
{
  Array.prototype.myforEach=function(userFn){
    const originalArr=this //current object ki traf point karta he 
    
    // for evry value i have to call use functon
    for(let i=0;i<originalArr.length;i++)
    {
     userFn(originalArr[i],i);
    }
  }
}

        // ye arr hi current object he 
let ret=arr.myforEach(function(value, index){
    console.log(`my for each value at index ${index} is ${value}`)
});

console.log(`return val is`,ret);

//->>>>>>>>>>>>>>>> map ka polyfil
// signature :-> it return the new array , containign the result of callbackfunction on every element of array
// it takes argument :-> element -> the current element being procees
           //               index , it index of current eleemnt

           // here n is new array , original array remain intact
           const n= arr.map((e)=>e*2);
           console.log(n);

if(!Array.prototype.myMap)
{
    Array.prototype.myMap=function(userFn)
    {
       const result=[]

       // me har value ke liye userFn ko call kiya he , or result ko aray me push kar diya
   for(let i=0; i<this.length; i++)
   {
      const value=  userFn(this[i],i);
      result.push(value);
   }

       return result;
    }
}

const m= arr.myMap((e)=>e*2);
const t= arr.myMap((e)=>e*3);
console.log(`the value from my map is ${m}`);
console.log(`the triple  value from my map is ${t}`);



// ->>>>>>>>>>>>>>>Filter polyfill ->>>>>>>>>>>>>>>
// filter method takes the function as input 
// it return an array which has elemnt , which has pass the confiton 

const words=["abdersf","avd","adfdfdfdf","asssddeee","aasd"];
const result=words.filter((word)=>word.length>5); 
// this will returnt the word having length >5

console.log("result is",result);

// so signature for this filter method is 
// return an array 
// return the value which passes the conditon
// it check the condiotn for every value  



// polyfll for it

if(!Array.prototype.myfilter)
{
 Array.prototype.myfilter=function(userFn)
 {
     // it return an array
     const res=[];
      for(let i=0;i<this.length; i++)
      {
      if(userFn(this[i],i))
      {
        res.push(this[i]);
      }
      }
      return res;
 }
}


const op=words.myfilter((word)=>word.length>5); 

console.log("op is",op);

//->>>>>>>>>>>>>>>>>>>..REDUCE polyfill->>>>>>>>>>>>>>>>>>>>.

/*
how reduce work

*/

const numb=[1,2,3,4];

const res=numb.reduce((acc,curr)=>acc+curr,0);
console.log("res is",res);

// so reduce function take only two arumnet ,1 function , 2nd is initial value
// how does reduce function work, we can provide intitla value also we dont provide intial value then :->
// if we provide intial value then:-> accumulcator =intilavalue, currentvalue start with arr=[0]
// if we dont provide initla value then :->accumultor initalize with arr[0] and currentvalue with =arr[1]


if(!Array.prototype.myReduce)
{
    Array.prototype.myReduce=function(callback, intitValue)
    {
        let currentvalue;
        let acummulator;
        let startindex=0;

        const originalarray=this;
        if( typeof intitValue!="undefined")
        {
            acummulator=intitValue;
        }
        else{
        acummulator=originalarray[0];
        startindex=1;
        }

        for(let i=startindex; i<this.length; i++)
        {
            acummulator=this[i]+acummulator;
        }
return acummulator;
    }
}


const returnval=numb.myReduce((acc,curr)=>acc+curr,1);
console.log("return val is",returnval);