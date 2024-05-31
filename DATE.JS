var a =new Date()// current date and time
console.log(a)
/*new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)*/
var b=new Date("november 12,2020 12:50:55")
console.log(b)
var c=new Date(2023,11)
console.log(c)
/*// when we specifify a month JavaScript counts months from 0 to 11:

January = 0.

December = 11.*/
var d=new Date(88,9,12)
console.log(d)
var e=new Date(-200000000000000)
console.log(e)
//Example (Complete date)
//const d = new Date("2015-03-25");
/*ISO Dates (Year and Month)
ISO dates can be written without specifying the day (YYYY-MM):

Example
const d = new Date("2015-03");*/
//short dates
var da= new Date("03/25/2015");
console.log(da)
// warning for short dates
/*WARNINGS !
In some browsers, months or days with no leading zeroes may produce an error:

const d = new Date("2015-3-25");
The behavior of "YYYY/MM/DD" is undefined.
Some browsers will try to guess the format. Some will return NaN.

const d = new Date("2015/03/25");
The behavior of  "DD-MM-YYYY" is also undefined.
Some browsers will try to guess the format. Some will return NaN.

const d = new Date("25-03-2015");
*/

// longh dates
/*Long dates are most often written with a "MMM DD YYYY" syntax like this:

Example
const d = new Date("Mar 25 2015");
Month and day can be in any order:

Example
const d = new Date("25 Mar 2015");
And, month can be written in full (January), or abbreviated (Jan):

Example
const d = new Date("January 25 2015");
Example
const d = new Date("Jan 25 2015");
Commas are ignored. Names are case insensitive:

Example
const d = new Date("JANUARY, 25, 2015");
*/
// date input

var time= Date.parse("march 13,2023")
console.log(time)
//you can use the Date.parse() method to convert it to milliseconds.

// when we mill second into date
var s=new Date(time)
console.log(s)
var f=s.getFullYear()
console.log(f)

// get date methods
/* Date Get Methods
Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)*

warning
Old JavaScript code might use the non-standard method getYear().

getYear() is supposed to return a 2-digit year.

getYear() is deprecated. Do not use it*/

// set date method--> is used to change date or time or set it
/*
Set Date methods are used for setting a part of a date:
Method	Description
setDate()	Set the day as a number (1-31)
setFullYear()	Set the year (optionally month and day)
setHours()	Set the hour (0-23)
setMilliseconds()	Set the milliseconds (0-999)
setMinutes()	Set the minutes (0-59)
setMonth()	Set the month (0-11)
setSeconds()	Set the seconds (0-59)
setTime()	Set the time (milliseconds since January 1, 1970)
*/
var g =new Date(s.setMonth(9))
console.log(g)
