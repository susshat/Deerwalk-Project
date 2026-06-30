/* 
replacement of if else

*/

let isGood = true;
let o = isGood === true ? "he can be trusted" : "he cant be trusted";

console.log(o);


let age = 89
let vote = age >= 18 ? "can vote" : "cant vote";

console.log(vote);


let gender = "female"


let output = gender === "male" ? "he is male" :gender === "female" ? "she is female" : gender === "other"? "u gey":"none"

console.log(output);


let age1 = 60

let output3 = age1>=0 && age1<= 17 ? "under aged" : age1 >=18 && age1<= 60 ? "adult":"old"
console.log(output3);

let hasCar = true;

let output6 = hasCar === true ? "he is rich" : null;

// ternary operator always requires a value if there is none we can use null 
