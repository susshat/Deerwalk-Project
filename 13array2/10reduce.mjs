let ar1 = [1,1,2]


//reduce (function), initial value

let value = ar1.reduce((pre, cur)=>{
    return pre + cur;
}, 0)

console.log(value);


let product = ar1.reduce((pre, cur)=>{
return pre*cur;
},1)
console.log(product);

//in reduce the inital value is changed with the input value 