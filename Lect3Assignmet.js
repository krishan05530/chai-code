// create an array conting different tye of teas
let teas=["ninga", "green", "black", "long tea","white tea","masla tea","herbal tea"];

console.log(teas);

// add "chanomile tea
teas.push("chaimonal tea");

// remove long tea
// so first find this and then remove it
let f=false;

const index=teas.indexOf("long tea");

if(index>-1)
{
  let ans=  teas.splice(index,1);
  console.log(ans); // it show that splice method return the array which contain the deleted itm
}

//-???????????????>>>>>>>>>>>>>>>>FILER->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// filter mthod takes the callback function , a function to execute 
// filter method of array . it create the shallow copy of the given array , which contain the elemnt which has passed the conditon 
   let val =teas.filter((word)=>word==="green");
   console.log(val);  // here val conatin the green
   // filter doesnt delete the  green value from tea array 



   //filter the list to only include the teas that are cafeniated
 const   cafinatedTeas= teas.filter((t)=>t!="herbal tea");
 console.log(cafinatedTeas);


 // sort the list in albhabetical 
  console.log(teas.sort());


// use for loop to print each values
for(let i=0; i<teas.length; i++)
{
    console.log(teas[i]);
}
// use for loop to count how many teas are cafeniated
let caf=0;
for(let i=0; i<teas.length; i++)
{
    if(teas[i]!=="herbal tea");
    {
        caf++;
    }
}

console.log(caf);

//convert all value in uppercase
const uppercaseAr=[];
for(let i=0; i<teas.length; i++)
    {
     uppercaseAr.push(teas[i].toUpperCase());
    }

    console.log(uppercaseAr);

    // find the teas name wiht most charcter

//  Use a for loop to find the tea name with the most CharacterData
  let longtea="";

  for(let i=0; i<teas.length(); i++)
  {
        if(teas[i].length > longtea.length)
        {
            longtea=teas[i];
        }
  }
  //
  let reverseArra=[];
  for(let i=teas.length-1; i>=0; i++)
    {
         reverseArra.push(teas[i]);
    }
