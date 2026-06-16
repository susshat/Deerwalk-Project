let product =[
    
    {name: "mobile", price: 10000},
    {name: "tv", price: 20000},
    {name: "laptop", price: 30000},
]



let pr1 = product.reduce((pre,cur)=>{

    if(cur.price >= 20000) {
        return [...pre,cur];
    }else{
        return pre
    }
},[])

console.log(pr1)


//question name those items whos names start from mobile and tv