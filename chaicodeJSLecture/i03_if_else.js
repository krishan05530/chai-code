function  prepareChai(type)
{
    if(type==="masla")
    {
        console.log("adding spice");
    }
    else{
        console.log("prepareing regural chai");

    }


}
prepareChai("masla");


/*

if amount >10000 give discount of 10%
else full amount pay
*/

function caluclate(amount)
{
    let number= Number(amount);
      

//   if(amount>10000)
//   {
//     number=number-(number*0.1);
// return number;
//   }
  
//     return amount


// ternary operator 
    return amount>10000? amount-(amount*0.1):amount;
  
}

let finalbill=caluclate(10000);
console.log(finalbill);


// switch case

function trafficcolor(color)
{
    switch(color)
    {
        case "red":
            console.log("stop");
            break;
        case "yellow":
            console.log("ready");
            break;
        case "green":
            console.log("go");
            break;
            default:
                console.log("invalid color");
                break;

    }}

    trafficcolor("red");

    function checkValue(value)
    {
        if(value)
        {
            console.log("value is true");
        }
        else{
            console.log("value is false");
        }
    }
    checkValue(0);
    checkValue(1);
    checkValue(""); // false

    
    // why we get value true for empty array 
    checkValue([]);
 // js conside object true even if object are empty
    checkValue({});

    checkValue(null); // false
    checkValue(undefined); // false
    checkValue(NaN); // false
    checkValue([1,2,3]);
    checkValue("0");
    checkValue("false");

    function login(username, password)
    {
        if(usename==="admin" && password==="12345")
        {
            console.log("login success");
        }
        else
        {
            console.log("login failed");
        }
    }

    login("admin","12345");
    