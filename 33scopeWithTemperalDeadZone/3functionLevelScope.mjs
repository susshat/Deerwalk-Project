//functional level scope -> Var
//any variable that is defined using var its said to be a function level scope 
//a variable will be known within its function block only
//there is no TDZ in function level scope
// funcion-level-scope = accessible zone

function sum() {
    console.log(a)//undefined
    //
    //
    //
    var a = 10
    //
    //
    //
    console.log(a)//10
}

// console.log(a)
sum()

