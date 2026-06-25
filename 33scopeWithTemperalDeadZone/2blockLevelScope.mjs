//block level scope (let,const) "{}"

{
/* 

this is the temporal dead zone we cant get the variable in this zone 

*/
    let a= 12
    console.log(a)  //from line 9-11 is the accessible zone
}
//console.log(a) -> sends error because a isnt defined in this block 

//block-level-scope = temporal dead zone + accessible zone

