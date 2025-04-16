// before runnign , cd to this foldeer
// console.log(window); // it gives error as reference error as window is not define

// window is not part of our js 
// window is part of our browser 

// so using node inde.js , wont work here 

// it will show on browser , manipulate the hmtl
// window.document.write("hello from js");

 function chnageBackGround(color){
    document.body.style.backgroundColor=color
 } 

const themebutton=document.getElementById('theme-button');
console.log(themebutton);

// darkButton.innerText='hahahah';
themebutton.addEventListener('click', function(){
    console.log('i got clicked');
})

themebutton.addEventListener('click', function ()
{
    console.log("stoe in db ");
})
themebutton.addEventListener('click',()=>{
    console.log(document.body.style.backgroundColor);
 const currentColor=document.body.style.backgroundColor
 if(!currentColor || currentColor=='white')
 {
    chnageBackGround('black');
    themebutton.innerText='Light Mode';
 }
 else{
    chnageBackGround('white');
    themebutton.innerText='Dark mode';
 }
})