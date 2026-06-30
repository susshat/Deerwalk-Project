let obj1 = {
    name:"sus", 
    // age={
    //     isgood: true,
    // }
}

console.log(obj1.name) //sus
console.log(obj1.age.isgood)//error
console.log(obj1?.age?.isgood)//undefined

/* 
optional chaining
replace . with ?. which gives undefined 
it gives either data or undefined but doesnt give error 
it decreases peformance
its usually used when you get error like    
==> can not read property of undefined
==> can not read property of null
*/