

let users = [
{name:"sushant", age:27,sex:"male"},
{name:"roja", age:17,sex:"female"},
{name:"ram", age:28,sex:"male"},

];


//filter gor male gender 

let maleUsers = users.filter((item,i) =>{
    return item.sex === "male";
})

//for age > 18 

let kids = users.filter((item,i)=>{

    return item.age > 18;
})
 


//for gender male and above 18

let maleeught = users.filter((item, i)=>{
    return item.age >18 && item.sex === "male"
})


// we can use map after filter or vice versa 
let name = users.filter((item,i)=>{
    return item.sex === "female"
}).map((item,i) =>{
    return item.name;
})



//for all gender whos age is >18


let gender = users.filter((item,i)=>{
    return item.age > 18
}).map((item,i)=>{
    return item.sex;
})

console.log(gender);