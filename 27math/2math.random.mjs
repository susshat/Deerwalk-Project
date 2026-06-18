//random 
   
//it generates number from [0, 1)'
//0 is included, 1 is excluded
console.log(Math.random());



let ran = Math.round(Math.random()*6+1);
console.log(ran)


let ar1 = ["nitan","sus","rishav","bivek","ash","samanata","subham"];

let participant = Math.random()*ar1.length //here we initially get a random number from (0,1) and we multiply it woth the length of the array

let chiya = Math.floor(participant); // here we roundoff the value of the outcome to lowest value because

console.log(ar1[chiya]);


