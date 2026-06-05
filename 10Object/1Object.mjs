let sus = ["susahnt", false, 27];

let sush = {
    name: "susahnt",  // key: name , value :"sushanr" the whole thing is called a property
    isSingle: true, 
    age: 27,
};

console.log(sush);
console.log(sush.isSingle);
console.log(sush.age);
console.log(sush.name);

//change value
sush.age = 38
console.log(sush)

//add property
sush.address = "kathmandu";
console.log(sush)

//delete property 
delete sush.isSingle 
console.log(sush);
