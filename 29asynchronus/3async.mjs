console.log("start")

setTimeout(()=>{
    console.log("yo")
},1000);


console.log("end");


/* the "yo" is printed at last because the async function is stored in  memory queue.

those function that is stored in node's memory is called asynchronous function

event lop is a program that constantly  looks over the call stack & memory queue

call stack executes code inside it, firstly sync and aysnc

memory queue is a queue for asynchronous function that works in fifo principle, to avoid conflict

settimeout doesnt guarantee the exact time but the minimum time



*/