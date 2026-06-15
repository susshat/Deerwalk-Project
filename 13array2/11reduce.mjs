let product =[
    
    {name: "mobile", price: 10000},
    {name: "tv", price: 20000},
    {name: "laptop", price: 30000},
]


let total = product.reduce((pre,cur)=>{
return pre + cur.price
},0);

console.log(total);