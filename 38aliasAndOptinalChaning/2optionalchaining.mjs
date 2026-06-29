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

*/