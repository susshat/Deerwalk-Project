{//parent
    let a =10
   // console.log(a)
    
    {//child
        a = 11
       // console.log(a)

    }
   // console.log(a)
}

//if a new value to an old variable is assigned in the child block,
//it will try to look for in in its own block, if not found 
//it will change the parent block of the variable. 
//grandchild ==> child ==> parent 


let s = 6
let r = 9
{//child
    let s= 5
    {//grandchild
        s= 4
    }
    console.log(s)//4
}
console.log(s)//6
console.log(r)//9