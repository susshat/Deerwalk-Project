let fun1 = () =>{
    let a =10

    let fun2 = () =>{
        let b= 12

        let fun3 = () =>{
            let c = 14;
        }
        fun3();
    }
    fun2();
}

fun1();

/* 
lexical scope => scope of the parent only(not grand parent)

lets see the scope for,

fun3 => has "c" as a variable (this is its own scope)

fun3(parent scope)a.k.a(lexical scope) => had "b" as a variable and fun2()
thus the total scope of fun3 is both of the above.
*/