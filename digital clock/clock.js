
/*let dateTime=new Date() // newdate() gives current date and time
console.log(dateTime)
// .getDate() => give only the date for eg today date is 10
dateTime.getDate()
console.log(dateTime)*/
// i create a function because the time want to be for every seconds
let ampm=document.getElementById('ampm')
function displaytime()
{

    let dateTime=new Date() 
    let hr=dateTime.getHours()
    let min=padzero(dateTime.getMinutes())
    let sec=padzero(dateTime.getSeconds())
    if(hr>12)
        {
            hr=hr-12
            ampm.innerHTML='PM'
        }
        else
        {
            ampm.innerHTML='AM'
        }
    // this below function is used to get to store the id value in the variable
    document.getElementById('hours').innerHTML=padzero(hr)
    document.getElementById('mins').innerHTML=min
    document.getElementById('seconds').innerHTML=sec

}
function padzero(num)
{
    return num<10?"0"+num:num
}
setInterval(displaytime,500) //here we give 2000s it will skip the one second value for eg when it show 12sec next second it skip 13 and go to to 14 sec