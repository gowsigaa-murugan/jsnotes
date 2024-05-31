let mark=[100,20,30,40,50]
console.log(mark.length)
// array index starts from 0 .in reverse it starts from -1
console.log(mark[3])
console.log(mark[mark.length-2])
// when we want a index
// we can give array im numbers and words
let ar=[[1,2,3],[4,5,6],[8,9.10]]// two dimensional 
console.log(ar)
//push-add elements to array at the end
ar.push('e','f','a')
console.log(ar)
//pop-->removes last element  of the array from the end and returns removed value
ar.pop('f')
console.log(ar)
console.log(ar.pop('f'))
console.log(ar)
// shift -removes elememt from the begining of the array and returns removed value

console.log(ar.shift('e'))
console.log(ar)
//unshift-adds element ton the start of the array and returns now length
console.log(ar.unshift('c'))
console.log(ar)
//delete-->remove the element from the array
//delete ar[0]
//console.log(ar[0])// better not to use the array because this can leave the index empty
//instead of using delete we can use splice this can used to remove and replace the element

ar.splice(2,1)
console.log(ar)
//ar.splice(0,'c','e')
ar.splice(0,2,'e',[1,2,3])// replace-deletes element at index 0 and inserts e and[1,2,3]
console.log(ar)
ar.splice(1,0,"b")// we cannnot delete any element herebut we can add a element here
console.log(ar)
// slice(startingindex,ending index)
//ending index not included
console.log(ar.slice(0,2))
console.log(ar.slice(-4))
// .reverse by using these we can rerverse the array
ar.reverse()
console.log(ar)
// join- convert array to string
// split-convert string to array
let str=ar.join()
console.log(str)
let arr=str.split(',')
console.log(arr)
//concat and spread operator(we can use use both)
let b=[1,2,3]
let c=[4,5,6]
//let d=[b,c]
let d=b+c
d=b.concat(c)// joined the two array into one array
console.log(d)
// spread can be used [...b,...c]
let e=[...b,...c]
console.log(e)