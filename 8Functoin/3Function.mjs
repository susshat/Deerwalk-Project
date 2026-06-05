//passing values to function
//a,b,c are parameters
let fun1 = function (a,b,c,d,e){
    console.log(a,b,c,d,e);
}

// 1,2,3 are arguments
fun1(1,2,3);

//its not necessary to have the same number of arguments as parameters.
// If we have more parameters than arguments, the extra parameters will be undefined.
// If we have more arguments than parameters, the extra arguments will be ignored.