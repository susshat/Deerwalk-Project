let sus = [10,11,12,13,14]

//here the returned value decides weather the 
// new value can be passed or not, if its true is passes.
let sus2 = sus.filter((item,i)=>{
    if(item % 2 === 0){
        return true;
    }
    else{
        return false
    }
});

console.log(sus2);


/*
input/output is array,
output are from input,
it doesnt modify  */


let ar3 =[10,11,22,13,35];


//for age grater than 18 from above array

let ar4 = ar3.filter((item,i)=>{
    return item >=18; //clean code 
/* if(item >= 18){
return true
}
else{
    return false
} */
});

//item that start with b 

let roj= ["teri", "maka", "bhos", "dhaa", "babuu",];


let roj2= roj.filter((item, i)=>{


    return item.startsWith("b");
    })
 


    let roj3 = roj.filter((item, i)=>{

      return item.startsWith("b") || item.startsWith("m");
    
    })

    

        let roj4 = roj.filter((item, i)=>{

      return item.length === 5;
    
    })

    
    console.log(roj4);
