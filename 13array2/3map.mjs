let ar1 = [10,11,12,13];

let ar2 = ar1.map((item, i)=>{


return  item*i;

})
console.log(ar2);


let ar3 = ar1.map(  (item,i)=>{
    return item+2;
})
console.log(ar3);


let ar4 = ar1.map((item,i)=>{
    if(item%2===0){
return "even";
    }
    else{
        return"odd";
    }
});
console.log(ar4);




let names= ["ram","sahm","ham","jam"];

let nicknames = names.map((item, i)=>{
return `${item} solti`;
})
console.log(nicknames);

let ar5 = ["s","u","S","H","a","N","t"];

let ar6 = ar5.map((item , i) =>{
if(i===0){
return item.toUpperCase();
}
else{
    return item.toLocaleLowerCase();
}
});

console.log(ar6);

//declared a variable that has  string value
let name = "sushant";

//converted that value to arry
let name2 = name.split("")


//checking the value
console.log(name2);

//using map to convert the first index into capital and the rest into small letter
let name3 = name2.map((item, i)=>{
    if(i===0){
        return item.toUpperCase()
    }
    else{
        return item.toLocaleLowerCase();
    }
})


//printing value
console.log(name3.join(""));

