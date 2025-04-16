const addBtn=document.getElementById("add-btn");
const todoInput=document.getElementById('todo-input')
const deleteAllBtn =document.getElementById('delete-all');

const todoItemContainer=document.getElementById('todo-item-container');
addBtn.addEventListener('click', ()=>
{

    const value =todoInput.value;
    console.log('User enetre', value);

    const li=document.createElement('li');
li.innerText=value;

 const delButton=document.createElement('button');
delButton.innerText='X';

delButton.addEventListener('click',()=>{
   li.remove();
   // remove the delbtton also , no need as li has delbutton as child , it will get deleted atomaticaaly
})

li.appendChild(delButton);
// as we have created this tag, now add this el 
todoItemContainer.appendChild(li);
todoInput.value='';
})

// now add the li elemtn


// console.log(completediv);
// const allchild=todoItemContainer.innerHTML;


deleteAllBtn.addEventListener("click", () => {
    todoItemContainer.innerHTML = ""; // clears all todos
  });
  