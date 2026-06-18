let ar1 = [1,2,3]


let ar2 = ar1.map((item,i) =>{
    return item*2
});

console.log(ar2)

let ar3 = ar1.map((item,i)=>item*i)
console.log(ar3);