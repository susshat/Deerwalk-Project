/* 
true 
false => 0,"",null, undefined, false


"??" same as "||" but it only counts null and undefined as a falsy value


*/


let a = undefined ?? null ?? "" ?? null 


//example

let score = 0


let realScore = score || 40;

let realNullishScore = score ?? 40;

console.log(realNullishScore); // 0 
console.log(realScore);//40