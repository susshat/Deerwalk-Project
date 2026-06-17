/* non premitive = array, object, function, date, set, error
memory location
    its checks if the its a copy or not, if no itll make a new container
if its a cope itll share the memory

===
it looks for memory rather than value


*/

let a =[1,2];
let b = [1,2];
let a=c;

console.log(a===b);
console.log(a===c);