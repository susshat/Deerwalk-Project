let users = [
{name:"sushant", age:27,sex:"male"},
{name:"roja", age:25,sex:"female"},
{name:"ram", age:28,sex:"male"},

];

let names = users.map((item,i)=>{
    return item.name;
})

console.log(names);


let info = users.map((item,i)=>{
    return `${item.name} is ${item.sex}.Age is ${item.age}`;
})

console.log(info);

let newAge = users.map((item,i)=>{
    return item.age+ 2;
})

console.log(newAge);