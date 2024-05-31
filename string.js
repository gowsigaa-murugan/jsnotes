var a="i am a good "
var b ="this is a bag"
// concatination a string -->combine two sentence into one sentence
// first method using +
var c=a+b
console.log(c)
// second method a.concat(b)
a.concat(b)
console.log(b)
a.concat("!@",b)
//partitioning string which we want part part or characters
//i)slice(start,end) we can use negative index
//ii)substring(start,end) it is similar to slice
//substr(start,length) l;ength mention how many characters are there want to be
//replace ('which word is going to be replace','new word')
// touppercase()-->change all words in capital letter
// tolowercase()-->change all words in small letter
//length-->mention the length of the sentence
//trim()-->remove the extra space,trimstart()-->remove extra space at start of the sentence,trimend()-->remove space at end of the sentence
//padend(length, what want to be added),padstart()same to padend
//a[]--> we can give the index value of the specific character or a.charat(1)it is same to a[1]
//.charCodeAt()we can give the index value but it can give the unic code of the character
//.indexOf('e') we can character and then we can get the index value
//.lastIndexOf(e) if the character is present these word we can get it index value otherwise it give -1
//.search('not')if the word present or not it is present it give the word first letter index otherwise -1
//.includes('not')if the word present or not it output is true or false
//.startsWith(s) same as includes but it says character it is similar to .endswith()
b.slice(3,6)
a.substring(-5,-10)
a.substr(5,10)
a.replace('good','nice')
a.toUpperCase()
b.toLowerCase()
a.length
a.padEnd(12,'e')