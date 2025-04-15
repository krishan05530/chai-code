// create a obj rep a type of tea wiht prop for name , type , caffeine content

const tea={
    name:"lemon tea",
    "type of":"green",
      caffien: "low",
}


// cess and print the name and type propertied of tea
console.log(tea.name);
console.log(tea["type of"]);  // this is another way tp aceess it

// add new property "orogin" to tea obj
tea.origin="Assam";

// chnage the caffine level

tea.caffien="high";

// remove the type property 
delete tea["type of"];

// check if tea has property origin.
console.log("origin" in tea);

// use case statmentt to print the caffine level of tea
switch(tea.caffien)
{
    case "high":
        console.log("high caffine level");
        break;
    case "low":
        console.log("low caffine level");
        break;
    default:
        console.log("no caffine level found")
}

// use for in loop to print all property of the obj
for(let key in tea)
{
    console.log(key +" " +tea[key]);
}

// create a nested object representing diffeent types of teas and their propertyies
const teaTYpe={
    green:{
        name:"green tea",
        caffine:"low",
        origin:"china",
    },
    blackTeas:{
        name:"black tea"
    }
}



// create a copy of tea object 
const tea_copy=JSON.stringify(tea);
const tea_copy2=JSON.parse(tea_copy); // this is deep copy

console.log(tea_copy2);