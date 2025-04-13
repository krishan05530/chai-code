// filter
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



// forEach loop
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


//  sort and filter method  method chaining 
// give me all those task which are not completed adn then sort them by priority
let tasks=[
    {description:"write report", completed:false, priority:2,},
    {description:"send email", completed:true, priority:3,},
    {description:"prepare presentation ", completed:false, priority:1,}
]

// identify task which are not completd /// increasing order
let Srotuncompletdtask=tasks.filter((task)=>task.completed===false). sort((a,b)=>(a.priority-b.priority));
console.log(Srotuncompletdtask);



///  map function with reducer
// find average movie rating
 let movieRatings=[
    {title:"Movie A", ratings:[4,5,3]},
    {title:"Movie B", ratings:[5,5,4]},
    {title:"Movie B", ratings:[3,4,2]}
]



let averageRatings=movieRatings.map((movie)=>{
    let total=movie.ratings.reduce((acc,rating)=>{
        return acc+rating;
    },0);

    average=total/movie.ratings.length;
  
    // now create a obj wiht title and averga
    return {title:movie.title, average:average.toFixed(2)};
 
})
console.log("print average rating of movie");    
console.log(averageRatings);
// op in this  formate
// [{title:"Movie A",average:4.0},{}]
