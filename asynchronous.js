// synchronous ==> a task completed step by step it is a blocking
// asynchronous ==>a task completed simtaneously
// basically js is a synchronous
//with the help of the browser we act the js as asynchronous
console.log('hello') // f1
function sync()
{
console.log('step 1')//f3
console.log('step 2')//f4
console.log('step 3')//f5

}
sync()//f2
let a=100
let b=20
let c=a+b

// what are the fu
// global scope can be excuted at first when new function it stored in the callstack but when function is printed  and completed successfully it is removed from the call stack
// next function can be added to the call stack same process can be done again and again it is common to all funcxtion
// seTimeout() is used to excute the function when we set a time it will excute after that time and it will go to another work 
// when an another function excution is going on settimeout() is added to call back queue because these method is happen to the not to distrubing the the current processing function
setTimeout(()=>console.log('step 1'),4000)//excute the functon after 4  seconds //f6 
setTimeout(()=>console.log('step2'),3000) // f7
setTimeout(()=>console.log('step3'),1000) // f8
console.log('good bye')// f9
for (let i=1;i<10;i++)
    console.log(i)
// event loop => check call stack is empty if it is queue data can be added to the stack it main process is to check the call stack is empty
// setInterval() =>this method is used to excute function or a print statement every 2 seconds
  setInterval(()=>console.log("hi...."),2000) 
  // asynchronous is non blocking