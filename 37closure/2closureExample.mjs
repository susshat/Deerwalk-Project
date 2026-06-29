let fun1 = () =>{
    let name = "sus"
     let fun2 = () =>{
        console.log(name);
     }
     return fun2;//here we are returning teh function itself not calling it
}

let _fun1 = fun1()// this becomes fun2
_fun1()

//This ability of a function to remember variables from where it was created is called a closure in JavaScript.

/* 
when the fun2 is returned it returns its lexical scope,
as well as the function itslef thus we its prints "sus" in terminal */