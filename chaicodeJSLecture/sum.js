let myArray =[1,2,3,4,5,6];



function sumfac(number)
{
    let ans=0;
    for(let i=0; i<number.length; i++)
    {
     ans+=number[i];
    }
 return ans;
    
    
}

 let ans =sumfac(myArray);

 console.log(ans);