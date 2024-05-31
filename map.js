// map-->excutes call back for each array element and return new array
let priceusd=[20,35,13]// convert dollar into rupees
let priceINR=priceusd.map(x=>x*83)// it works like a foreach() it give only give one by one value
console.log(priceINR)
// another method without using arrow function
priceINR=priceusd.map(convert)
function convert(val) {
    return val*83
    
}
console.log(priceINR)

const input=[// array of objects
    {name:'gowsi',age:15},
    {name:'ram',age:13},
    {name:'geetha',age:24},
    {name:'raj',age:19},
    {name:'anu',age:12}
]
// i want a ages
const age=input.map(y=>y.age)
console.log(age)
const name=input.map(z=>z.name)
console.log(name)
// filter=>retuen new array by checking each value of original arr using call back function
// it can filter the value want we given in that
let cost=[34,234,12,34,54,123]
let lessthan100=cost.filter(x=>x<=100)
console.log(lessthan100)
// reduce-excutes reducer callback and rerturns accumulated result
// reduce-returns a single value
cost=[34,234,12,34,54,123] //cost.reduce(acummalator) atleast two parameters
let cart=cost.reduce((total,el)=>total+el)// total is accumulator ,el is used to take and given one by one element
//let cart=cost.reduce((total,el)=>total+el, 1000) //here we give 1000 means we add a values from thousand
/*Syntax
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)*/
console.log(cart)
arr2d=[['a','b','c'],
['d','e','f'],
['d','g','c']
]
// result ={a;1,b;1;c=1} how many a,b,c are present
//console.log(arr2d.flat())//flat-> changes a two dimensional array into one dimensional array
let count=arr2d.flat().reduce((accumulator,currval)=>{
    if(accumulator[currval])
        
        accumulator[currval]++
        
    else
    
    accumulator[currval]=1
return accumulator
    
    
}
,{});// when an empty object is created  processed value is stored in the empty box
console.log(count)
// if i give a array i want to remove the duplicates of the array
let arr=[1,2,3,4,6,7,2,7,8,8]  
let a=arr.filter((index,items)=>arr.indexOf(index)===items)// when you want a original value do not want the duplicate value
//let a=arr.filter((index,items)=>arr[index]!=items) when you want get only the duplicate value
console.log(a)



// when  i give a string   in this i only want a uppercase leters
let b="Gowsigaa Bala Murugan"
let c=b.split("").filter((x)=>x===x.toUpperCase())
console.log(c.join("").trim().trim())


// returning function and closure
let aa=100
function funct1(){
    console.log("a is",aa)
}
aa=200
funct1()
// returning function-higherr order function
function outer(name) {
    let outerVariable='bread'
    function inner()
    {
        let innervariable='butter'
    console.log(innervariable)
    console.log(outerVariable)
    console.log('hello',name)

    }
    //inner()// we inner function able to access the outer function is called lexical scoping
   return inner// return a function
}
//outer()
//let call1=outer()
let call1=outer('gowsi')
call1()//return value is stored in variable

function makeadder(x)
{
    return function(y)
    {
        return x+y
    }
}
let add5=makeadder(5)
console.log(add5(10))
let add100=makeadder(100)
console.log(add100(20))
console.log(add100(45))// this is called closure

// memory allocation
//BigInt when we want large size of numbers we can stored in a bigint
// for eg const a =1234567899774n  => this is one type of method here we want to mention n atlast of the value
// another type is const a=BigInt(1234567890122)
//in memory there two types of memory that is i)stack ii)heap
//stack
let g=100 // it is stored in a stack
// reference types like array,function are atored in heap
let obj1={name:'gowsi',age:22} //this is stored in heap but stored heap has a variable that is in the stack
let obj2=obj1 // here heap stored only a value but value's variable stored in the stack heap doesn't change but stack create new storage for that variable here eg locating same variable


// set and map => we can used to store the vaalues
    // set object-collection of valuesbut values are unique
let ab=[1,2,1,3,4,2,6,5,5,10]
// set
let myset1=new Set(ab)// set can used to store the unique values it removes the duplicate value
console.log(ab)
console.log(myset1)
let myset2=new Set()
myset2.add(7)
myset2.add(5)
myset2.add('abc')
myset2.add(5)
myset2.add(4)
myset2.add*({'a':1,'b':4})
console.log(myset2)
console.log(myset2.size)
console.log(myset2.has(2))//has() represent the whether the give value present or not it gives output true or false
console.log(myset2.delete(7))//delete() it will delete the given number
let arr2=array.from(myset2)// it can store the the value from one to another array
console.log(arr2)

//MAP-->it is the collections of objects
//key-value pairs
//a key in the map may only occur once
//key or value can be object

let map1=new Map()
map1.set('a',1) //set() is ued to add values in the map
map1.set('b',2)
map.set('a',3)// here a value can be 3 not 1
// same as set()
map1.delete(a)
// using for() and foreach()
    for(let i of map1){
        console.log(i)
    }
    for(let[k,v] of map1)
{
    console.log(v)
}
for(let k of map1.keys())
    {
        console.log(k)
    }
   map1.forEach((v,k)=>{
    console.log('key',k,'value',v)
   })
   // we cant convert a value from one variable to another variable
   //2d arraY to map
   let kvarray=[['a',1],['b',2]]
   let map2= new Map(kvarray)
   console.log(map2)
   console.log(...map2)//...map2 convert into 2d array thisis called spread operator



















