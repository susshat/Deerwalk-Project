let users = [
    {name:"shnt", age : 26, address:"chakrapath"}, 
    {name:"ram", age : 22, address:"gham"}, 
    {name:"sham", age : 29, address:"rukum"}, 
    {name:"paruuuu", age : 21, address:"kailali"}, 
];
 
//we ultimatelly need number as a return value 
// sort according to age
let sortedUsers = users.sort((a,b)=>{
return a.age-b.age;
});
 console.log(sortedUsers)

let sortedUsers2 = users.sort((a,b)=>{
return a.name.length - b.name.length
})

console.log(sortedUsers2);

//sort, reverse , push, pop, shift give new values as well as change the orignal value.