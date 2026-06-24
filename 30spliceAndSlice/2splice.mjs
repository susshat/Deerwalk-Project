//when we need to add or remove something on the original array we use splice

let list = ["a","b","c","d","e"];

//list.splice(1,3)// the first value i.e "1" locates the index and 3 means delete the 3 index from the first value


//list.splice(2,1)// here the "c" is removed from the original array 


//below we can see that the fist value gave the index form hwere we start the second index means we delete 2 from the given index  and the two string are added in after the given first value
list.splice(2,2,"boobi","titty");

let list2 = list.splice(1,2);//here the return of splice gives out the value that was discarded


console.log(list2)