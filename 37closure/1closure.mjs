let fun1 = () =>{
    let a = 12;

    let fun2 = () => {
        let b =12
        console.log(a);
        console.log(b);
    }
    fun2();
}
fun1();

/* 

function + its lexical scope => closure

*/