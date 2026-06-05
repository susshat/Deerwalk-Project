// odd even function

const isEven = function(num){
    if (num %2 === 0){
        return "even";
    }else{
        return "odd";
    }
}

console.log(isEven(2));

console.log(isEven(56))    

console.log(isEven(13)) 

//voteing function

const canVote = function(age){
if(age >= 18){
    return "You can vote";

}else{
    return "You cannot vote";
}

};

console.log(canVote(18));
console.log(canVote(12));


// pronoun function

//created a function named proNoun that takes a parameter gender
const proNoun = function(gender){
    if (gender === "male"){
        return "He";
    }   else if (gender ==="female"){
        return "She";
    } else if(gender === "other"){
        return "They";
    }  else {
        return "Invalid gender";
    }
}


//passing the argument to the function and printing the return value

console.log(proNoun("male"));   
console.log(proNoun("female")); 
console.log(proNoun("other"));  