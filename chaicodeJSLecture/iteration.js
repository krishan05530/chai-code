// Description: Iteration in JavaScript
// an array of object
let salesData = [
    { product: "laptop", price: 100 },
    { product: "smartphone", price: 100 },
    { product: "headphone", price: 100 },
    { product: "keybord", price: 100 },
]

let totalSales = 0;
// for loop
// array.forEach(element => {
// });


salesData.forEach((sale) => {
    totalSales += sale.price;
})
console.log(totalSales);



// reduce function
let initialValue = 0;
let total = salesData.reduce((acc, sale) => (
    acc + sale.price), 0); // here 0 is initlavluae

// reduce method takes call back function , and initla value
// let total = salesData.reduce((acc, sale) => (acc + sale.price), initialValue);
console.log("total");
console.log(total);


let inventory=[
    {name:"widget A" , stock:30},
    {name:"widget B" , stock:120},
    {name:"widget C" , stock:45},
    {name:"widget D" , stock:70},
];

let  totalstock=inventory.reduce((acc, st)=>(acc+st.stock),0);


console.log(totalstock);

 // this filter will save value in lowstaock , which make condition true.  callback 
 // filter alaways gives array
let lowStock=inventory.filter((item)=>(item.stock<50))
console.log(lowStock);

// find most active user

let userActivity=[
    {name:"hitesh", activity:100},
    {name:"suresh", activity:200},
    {name:"rajesh", activity:300},
    {name:"dinesh", activity:400},
]

// if we dont initlaze it wiht 0 then accumulator will get initilize automactally wiht array[0] value

let mostactiveuser=userActivity.reduce((maxUser, user)=>(
    user.activity>maxUser.activity ? user : maxUser
));

console.log(mostactiveuser);

