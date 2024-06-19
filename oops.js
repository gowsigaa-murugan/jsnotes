// oops=>object oriented programming we want to think all the one are ocjects and classes.except the primitive types all the one are objects
/*let user1={
    name:'gowsi',
    age:22,
    login(){
        console.log('hey',this. name)
        console.log('you are logged in')
    },
    logout(){
        console.log('hey',this. name)
        console.log('you are logged out')
    }
}
let user2={
    name:'anu',
    age:21,
    login()
    {
        console.log('hi',this.name,'and your age',this.age)
        console.log('you are logged in')
    },
    logout()
    {
        console.log('hi',this.name,'and your age',this.age)
        console.log('you are logged out')
    }
}
let user3={
    name:'raj',
    age:23,
    login()
    {
        console.log('Hi',this .name)//this .key used to specify the we are in which object
        console.log('you are logged in')
    },
    logout()
    {
        console.log('Hi',this .name)
        console.log('you are logged out')
    }
}
user2.logout()
user3.logout()
user1.login()
// by using class => class Name {} class name must start with capital letter.clas is a template of properties and method
class User{
    static numberofusers=0; // static is commonly used to track the total numbers we couldn't concentrate and this is a common variable for class when we mention a static variable inside a constructor we want to use the 
       constructor(name,age) // constructor => is used to initiaize the data it can immediately we can give our datas inside the construction it calls an object when it create a class
    {
        // this is called the instance od class
        this.name=name
        this.age=age
        User.numberofusers++  //when we mention a static variable inside a constructor we want to use the classname.staticvariablename
    }

    login()
    {
        console.log('Hi',this .name)//this .key used to specify the we are in which object
        console.log('you are logged in')
    }
    logout()
    {
        console.log('Hi',this .age)
        console.log('you are logged out')
    }
    
}
let userone=new User('neha',24)
let usertwo=new User('vidhya',25)
console.log('number of users',User.numberofusers)
let movie ='ps1'
console.log(movie.length)// this method has a temporary wraper class this is a primitive data type
// now we can  create an object like the string
let music=new String('arr') //this an object
userone.login() // classes normal variables is called instance
// inheritance ==> we can use the source of existing class to the new class
// acquiring properties of a base class or parent class or super class  for eg user()=> is a base class
// derived class or child class or sub class is a paiduser here  base class user() properrties can be used by derived class
 class paiduser extends user1{
    constructor (name,age){
       /* this.name=name
        this.age=age*/ // instead of using these we can user super() keyword
       /* SourceBuffer(name,age)
        this.storage =100
    }*/
    message()
    {
       console.log("you have 100 gb storage") 
    }
    // overriding => here when we give a function name it is already mentioned in the base class
    login()
    {
        console.log("thanks for your support")// here i give a login function within a derived class it doesnot goes to base class
        return this // this can be used for method chaining
    }
 
 let paiduser1= new paiduser('ram',28)
 paiduser1.login()
 paiduser1.message()
 // base class canot be able to derive the derived class sources
 // method chaining => when there are two or more functions in a single varible
paiduser1.login().message()

// es6 can be introduced by using the class.but before es6  class can not be used
// prototype => can be attached to prototype we can acess the inheritance by using protype

// now we cannot use the class
function user(name,age)
{
    this.name=name
    this.age=age
    this.login=function(){
        console.log("you are logged in")
    }
user.prototype.login=function()
    {
        console.log('hi',this.name)
        console.log("you are logged in")
    }
}

let user1=new user('gowsi',34)
user1.login()

// get and set => we can see how to use in class
// get => said what is that value
// set=>when we want to change the value
class temperature{
    constructor(temp){
        this._temp=temp // the _ is used to specify the variable especially we used in get and set and _ is the private property we could not use this outside of class
    }
    get temp()
    {
        return `${this._temp} deg.celcius`
    }
    set temp(temp){
        if(temp>100)
            temp=100
        this._temp=temp
    }
}
let temp1=new temperature(25)

temp1.temp=150
console.log(temp1.temp)





// when we want to export a class from a one file to another file
// export deafult class name
// export {function name} // the functions which are mentioned in the class
// in new file we want to be mentioned where it is used
// import class name from pathname of the file
//import class name,{function name1,function name2} from pathname of the file
// to be accesed we want to use the <script type="module" src="script file name">