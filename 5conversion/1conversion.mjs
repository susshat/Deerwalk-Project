//to convert into sting into number
 
let a = 1
console.log(a);
console.log(String(a));

let b = "2"
console.log(b);
console.log(Number(b));

// Boolean conversion 

/* all empty values are falsy */
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

/* all other values are truthy */
console.log(Boolean("hello")); // true
console.log(Boolean(1)); // true
console.log(Boolean({})); // true
console.log(Boolean([])); // true