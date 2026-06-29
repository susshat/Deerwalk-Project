if(true){//p1
    let a =1
    if(true){//p2
      //  let a=2
        let b =0
        if(true){//p3
          //  let a=3
            console.log(a) //1
        }
    }
}


/* 
here the console will print a = 1
because we have given the variable a =1 in the p1 block 

thus,
it will look for the value in
own block => parent block => grand parent block 
*/
