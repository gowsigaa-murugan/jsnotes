// promise=> we will get a two outcome it is like a probability  for eg we can say today it may rain or not
// i) type-1 it rain today ->this is called resolve=> successful
//ii)type 2 it not rain today -> this is called reject=>failure
// promise-> is a object and it is easy to handle the asynchronous object
/*const tatkalbook=new Promise((resolve, reject) => {
    let bookingsuccess=true
    if(bookingsuccess)
        
            resolve(1000)// it is stored in the then
        
        else
        reject()//it can stored in the catch()
    
})*/
//tatkalbook.then(success)//in then() we can give the resolve
//.catch(failure) // in catch () we can give the reject
function tatkalbook()
    {
    return new Promise((resolve, reject) => {
        let bookingsuccess=true
        if(bookingsuccess)
            
                resolve(1000)// it is stored in the then
            
            else
            reject()//it can stored in the catch() 
    })
    }






tatkalbook().then((amt)=>console.log(`thanks buddy i will transferred Rs.${amt} to you`))
.catch(()=> console.log("thanks for trying!.....")) 
/*function success()

    {
        console.log("thanks buddy i will transfer the ammount")
    }
    function failure()
    {
        console.log("thanks for trying!.....")
    }
*/
function tosscoin(){
return new Promise((resolve, reject) => {
    // 0-head(success) 1-tail(failure)
   const rand= Math.floor(math.random()*2)
   if(rand==0)
    resolve()
   else
    reject()
})
}
/*tosscoin()
.then(()=>console.log("Congrats it's head"))
.then(()=>console.log("Congrats it's head"))
.then(()=>console.log("Congrats it's head"))
.then(()=>console.log("Congrats it's head"))
// we don't use the promise at that time we can use then but we can use the lot of functions this is called call back hell
.catch(()=>console.log("sorry!!!! it's tail"))*/
let reachA=new Promise(()=>
{
    const reached=true
    if(reached)
        setTimeout(resolve,3000,"anu reached")
    else
    reject("anu not reached")
})
let reachB=new Promise(()=>
    {
        const reached=true
        if(reached)
            setTimeout(resolve,2000,"ramya reached")
        else
        reject("ramya not reached")
    })
    let reachC=new Promise(()=>
        {
            const reached=true
            if(reached)
                setTimeout(resolve,1000,"gita reached")
            else
            reject("gita not reached")
        })
        // promise can be in three states =>pendig,resolved,rejected
Promise.all(reachA,reachB,reachC) 
.then((message)=>console.log(message) )    
.catch((message)=>console.log(message))
//promise.any()any one condition can be resolved everything is resolved otherrwise everthing caan be rejected
//promise.race()=>if one function is solved it can give the resultt
Promise.all([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

//promise - pending,resolved,rejected (settled)
Promise.allSettled([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

Promise.any([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

Promise.race([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

// error handling or exception handling ===> try,catching and throw =>first we want to know in which code of line it has the error incase these code may occur error we want to put it in the try block
// try - we know that this code is going to get the error that want to be in user understandable format so we use the try
//num=prompt("enter a number") //Prompt ==> is to used to get the input from user 
//console.log(num**2)// when we give this way in input i give b the output is nan 
try{
    num=prompt("enter the number")
    if (num==='')
        throw 'cannot be empty'
    if(isNaN(num))
        throw 'enter a valid number' // throw=>if the statement is not true throw message will be available
        console.log(num**2)
}
catch(error)
{
    console.log(error)
}
// when we use throw we want to use the catch
finally{
    console.log('bye')
}
// if the code has the error or not finally statement can print

//async await
// when we async before the function it always return the promise
function fn(){
    return 'hello'
}
console.log(fn())
fn().then((msg)=>console.log(msg))// here we can use the then or wait when we are using async
// when we use the async to call the resolve we don't want to usen then()
async function status(){
    console.log('hi....')
    res=await reachA// await is used only when we use the async and promise function take time to excute await is used to wait a functiom
    console.log(res)
    console.log('bye')
}
//when the promise is not resolved we want to handle that scenario in try and caught
async function status(){
    try{
    console.log('hi....')
    res=await reachB// await is used only when we use the async and promise function take time to excute await is used to wait a functiom
    console.log(res)
    console.log('bye')
    }
    catch(err)
    {
        console.log(err)
    }
}