var a=10
var b=a.toString();
//.toString //()-->convert a number into a String
console.log(typeof(b))
// typeof-->identifies the what its data type
var c=a.toExponential(3)
//to exponential() give the exponential format in bracket what are the number can be given like that it can be display after the point
var d=a.toFixed()
// .to fixed is used to how many numbers want to be displayed it is fixed after point 
var e =a.toPrecision(4)
// .toprecision totally how many numbers displayed
//now we see the how to converrt primitive methods
var f=a.valueOf()
// .valueof() can be used convert primitive value
var g=Number("10.67")
console.log(g)
// number()can be used given a number as a string it can be converted into a number otherwise we given a words it can be said to be NaN
var h=parseInt(10.78)
// it can be convert into interger format
var i=parseFloat()
// parsefloat() it can be changed string or integer into float
var j=Number.MIN_VALUE
// the above given shows possible min value this is same to Number.MAX_VALUE
var k=1/0
console.log(k)
var l=Number.NEGATIVE_INFINITY
// the above mentioned gives the -infinity it related to -1/0
var m=Number.NaN
// not a number (NaN)
