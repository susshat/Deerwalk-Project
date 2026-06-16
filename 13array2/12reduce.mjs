let product =[
    
    {name: "mobile", price: 10000},
    {name: "tv", price: 20000},
    {name: "laptop", price: 30000},
]


let filtProduct = product.reduce((pre,cur)=>{
if(cur.price >= 20000){
    return cur.price
}
else{
    return "ok";
} 
},0

);

    console.log(filtProduct);