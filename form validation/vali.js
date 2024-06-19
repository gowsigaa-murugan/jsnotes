const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')
form.addEventListener('submit',(e)=>
{
    
    if(!validateInputs()){
        e.preventDefault()
    }
})
function validateInputs()
{// trim is ued to remove the white space
    const usernameVal=username.value.trim()
    const emailVal=email.value.trim()
    const passwordVal=password.value.trim()
    const cpasswordVal=cpassword.value.trim()
    let success=true
    if(usernameVal==='')
        {
            success=false
            setError(username,'Username is required')
        }
    else{
    setSuccess(username)
    }// this is user name validation
    if(emailVal==='')
        {
            success=false
            setError(email,'email is required')
        }
        else if(!validateEmail(emailVal))
            {
                success=false
                setError(email,'please enter a valid email')
            }
        else{
            setSuccess(email)
            }// this is email validation
            if(passwordVal==='')
                {
                    success=false
                    setError(password,'password is required')
                }
                else if(passwordVal.length<8){
                    success=false
                    setError(password,'password must be 8 characters long')

                }
            else{
            setSuccess(password)
            }// this is password validation
            if(cpasswordVal==='')
                {
                    success=false
                    setError(cpassword,'confirm password is required')
                }
                else if(cpasswordVal!==passwordval){
                    success=false
                    setError(cpassword,'password does not match')

                }
            else{
            setSuccess(cpassword)
            }// this is conform password validation
            return success
}

// element -password,message-password is required
function setError(element,message){
    // this is used to find the error message for eg password must be 8 character,password is too shortlike these message what to be displayed
const inputGroup = element.parentElement
const errorElement=inputGroup.querySelector('.error')
errorElement.innerText=message
inputGroup.classList.add('error')
inputGroup.classList.remove('success')
}
function setSuccess(element,message){
    // this is used to find the error message for eg password must be 8 character,password is too shortlike these message what to be displayed
const inputGroup = element.parentElement
const errorElement=inputGroup.querySelector('.error')
errorElement.innerText=''
inputGroup.classList.add('success')
inputGroup.classList.remove('error')
}
// validate email
const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )// this is a regular expression is used to validate the email
}