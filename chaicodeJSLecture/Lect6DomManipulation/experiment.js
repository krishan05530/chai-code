// onclick on ADD button
// get the value from input tag
// creat list with the value 
// appedn it with ul 


const Addbutton=document.getElementById('todo-button');
const inputTag=document.getElementById('todo-input');
const ulcontainer=document.getElementById('ul-container');

Addbutton.addEventListener('click',()=>{
    const value =inputTag.value;
    console.log(value);

    const list=document.createElement('li');
    list.innerText=value;

    const delbutton=document.createElement('button');
    delbutton.innerText='X';

    list.appendChild(delbutton);

    // append this list wiht the ul
    ulcontainer.appendChild(list);

inputTag.value='';
})