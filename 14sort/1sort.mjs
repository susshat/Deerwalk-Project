let ar1 =["nitan", "ram", "anusa"];

let ar2 = ar1.sort();
// accending 
console.log(ar2);
console.log(ar1);

//the method sort also chages the o/p of the orignal array as seen in the console for ar1.


//decending 

let ar3 = ar1.sort().reverse()
console.log(ar3);

//sorting a number

let ar4 = [0,1,2,5,7,9]

let ar6 = ar4.sort((a,b)=>{
    return (a-b);
});


console.log(ar6)
//just the sort method is used to sort string