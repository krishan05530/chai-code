

let expenses=[
    {description :"Groceries", amount:50 , category:"Food"},
    {description :"Electrical Bill", amount:100 , category:"Utilities"},
    {description :"Dinner", amount:30 , category:"Food"},
    {description :"Internet Bill", amount:50 , category:"Utilities"},
    
];  


// so calculte the total expense per category 
// let expenseReport=expenses.reduce((report,expense)=>{
//       report[expense.category]+=expense.amount;
//      return report;
// },{Food:0, Utilities:0});


// let expenseReport=expenses.reduce((report, expense)=>{
//      report[expense.category]+=expense.amount;
//      return report;
// },{Food:0, Utilities:0});
// console.log("Expense Report", expenseReport);


// we havre best way to do it 



// here report is accumulator is define as emoty object
// so calculte the total expense per category 
let expenseReport = expenses.reduce((report, expense) => {
    if (!report[expense.category]) {
        report[expense.category] = 0; // Initialize if category not exists
    }
    report[expense.category] += expense.amount;
    return report;
}, {});


console.log("Expense Report", expenseReport);



// give me all those task which are not completed adn then sort them by priority
let tasks=[
    {description:"write report", completed:false, priority:2,},
    {description:"send email", completed:true, priority:3,},
    {description:"prepare presentation ", completed:false, priority:1,}
]

// identify task which are not completd 
let Srotuncompletdtask=tasks.filter((task)=>task.completed===false). sort((a,b)=>(a.priority-b.priority));
console.log(Srotuncompletdtask);

// now sort them by priority


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

    // this line do chnages on original object
    // movie.ratings=average.toFixed(2);
    // return movie;

    // now create a obj wiht title and averga
    return {title:movie.title, ratings:average.toFixed(2)};
 
})
console.log("print average rating of movie");    
console.log(averageRatings);
// op in this 
// [{title:"Movie A",average:4.0},{}]




