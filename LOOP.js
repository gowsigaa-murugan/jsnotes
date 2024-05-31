//loops
// for,while,dowhile
//for for(initalisation;condition,increment or decrement)
    let i
for( i=1;i<=5;i++){
    //console.log("hello")
    console.log(i)
}
console.log('outside loop'  +i)
console.log('outside loop',i)

// print 10 to 1
for (i=10;i>=1;i--)
    {
        console.log(i)
    }
    console.log('outside loop', i)
    // while()--> we can give only condition
    i=10// initialization
    while(i>=1)
        {
console.log(i)
i-=1// when we forget to give this it will go infinity
        }
        console.log('outside loop'+i)
       let j=0
       while(j>=1){
        console.log(j)
       }
console.log(i)

        //do while-->when the condition is fail it will work automaticallybut while don't
i=10
        do{
console.log(i)
i-=1
        }while(i>=1)// t is atleast one tme can be excute
        // break-stop the loop
        while(true){
            num=Number(prompt('enter a number'))// prompt
           if(!isNaN(num))
            break;

        }
       // let a=prompt("whast is your name")
        //onsole.log(a)
        // isNaN()--> not a number whether to say yes or no