//90 -A
// 80 -B
// 70- C
// 60>=D
// f

   function fac(a)
{
    if(a>=90)
    {
        return "A";
    }
    else if(a>=80)
    {
        return "b";
    }
    else if(a>=70)
    {
        return "c";
    }
    else if(a>=60)
    {
        return "D";
    }
    else return "F";
}

let grade=fac(80);
console.log(grade);


