let numberofguest=4;

let pizasize;
//small<=2, med <=5, large<1-0

if(numberofguest<=2)
{
    pizasize="small";
}else if(numberofguest<=5)
{
    pizasize="medium";
}
else if(numberofguest<=10)
{
    pizasize="large";
}
else
{
    pizasize="extra large";
}
console.log(`pizza size is ${pizasize}`);

