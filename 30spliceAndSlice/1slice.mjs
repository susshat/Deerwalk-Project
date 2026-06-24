//splice 
//slice

let list = ["a","b","c","d","e"];

//we use Slice if we need a certain portion of an array

let newList = list.slice(1,4);
//we need to take one higher index as the ending index, 
//thus we chose (1,4) instead of (1,3) in order to get ["b","c","d"]

let list2 = list.slice(3)//["d","e"]
//and if we dont write the ending index it will give all the value of the remaining index from the selected index 

