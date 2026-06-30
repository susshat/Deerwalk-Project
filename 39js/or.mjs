//true 
//false => 0,"",null, undefined, false


let b = undefined || null || ""||"truthy value";


console.log(b)// "truthy value"

/* 
or will look for the closest truthy value 
if there are none it will take the last falsy value

*/