let chaiType=["Msala", "ginde hi", "green chai"];

// console.log(chaiType[2]);

// console.log(`Totlal masla ${chaiType.length}`);

// chaiType.push("green tea");
//   const data =chaiType.pop();

//   console.log(data); // last one return 

//   let index = chaiType.indexOf("ginde hi");

//   if(index!==-1)
//   {
//     chaiType.splice(index,1);
//   }
//   console.log("chaiType");
//     console.log(chaiType);
 
//     // call back function 
//     chaiType.forEach((chai, index)=>{
//  console.log(`${index+1} : ${chai}`)
//     })

//     console.log("new chai");

//     let moreChaiType=["black tea", "white tea", "lemon tea"];
//     // let allChaiTypes=chaiType.push(moreChaiType);
//     // spread operator 
//   let allChaiTypes=[...chaiType,...moreChaiType];
//     console.log(allChaiTypes);

//     console.log("new chai");
//     let newChaiTye=[...chaiType,"rab chia"];
//     console.log(newChaiTye);

//      newChaiTye= newChaiTye.concat("newmas chia");
//     console.log(newChaiTye);

    // =------------object
    let chaiRecipe={
        name:"masala chai",
        ingredients:{
            water:"1 cup",
            tea:"1 spoon",
            sugar:"1 spoon",
            milk:"1 cup"
        },
        instructor:"boild wwater and get milk",
    };


console.log(chaiRecipe.name);
console.log(chaiRecipe.ingredients.milk);


 
let updatedChaiRecipe={
    ...chaiRecipe,
    instructor:"biol and mast kha jao",
}
console.log(updatedChaiRecipe);


// object destructring
let {name, ingredients}=chaiRecipe;

// array destructring
 let [firstchai , secondchai]=chaiType;
 console.log(firstchai);  


 //->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> operation 
 