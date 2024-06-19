let json1='dave'// we can store a string,num,boolean,array and we cans store js object in json
let json2=4
let json3=true
let json4=[4,5,6,7]
let json5={
    "stock":"tcs",
    "price":3500
}// here is the minor difference between js and json to storing a object in json for key we want to write in double quotes but js not like that
/*let json6=[
    {
       "stock":"tcs",
    "price":3500 
    },
    {
        "stock":"hul",
    "price":2000
    },
    {
        "stock":"tcs",
    "price":1300
    }
] */  // these is the array contain the objects
let json6=`[
    {
       "stock":"tcs",
    "price":3500 
    },
    {
        "stock":"hul",
    "price":2000
    },
    {
        "stock":"tcs",
    "price":1300
    }
]`
//parse()convert thst string into json Object
// i want a statement totally a string so i using backtick
let parsed=JSON.parse(json6)// this method can give an separate array of objects
//JSON.parse() is a JavaScript function that converts a JSON string into a JavaScript object.
console.log(json6)
console.log(parsed)
console.log(parsed[1])
console.log(parsed[0].price)
//stringfy=> for transmiting the objects we want  to convert into the string
//JSON.stringify() is a JavaScript function that converts a JavaScript object or value to a JSON string
console.log(JSON.stringify(parsed))


// fetch API
//we can use thr github "https://github.com/public-apis/public-apis?tab=readme-ov-file"
// the github api is used to get the api link
//console.log(fetch('https://dog.ceo/api/breeds/image/random'))
// when we use the fetch we get the promise
/fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>res.json())
.then((msg)=>console.log(msg[0].setup,msg[0].punchline))
.catch((err)=>console.log(err))
// get and post
fetch('https://randomfox.ca/floof/')//get request
.then((result)=>{
    if(result.ok)
        console.log('success')
    else
    console.log('failed')
return result.json()
})
.then((message)=>console.log(message.image,message.link))
.catch((error)=>console.log(error))

// post
fetch('https://dog.ceo/api/breeds/image/random',{
    method:'POST',
    headers:{'content-type':'application.json'},
    body:JSON.stringify({
        userId:22,
        id:123,
        title:'kural',
        completed:true
    })
})
.then((re)=>re.json())
.then((ms)=>console.log(ms.message,ms.status))
// put is also used but it is basically  used for update