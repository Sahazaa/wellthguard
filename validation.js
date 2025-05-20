//first,we need to get all our elements into variables
const form = document.getElementById('form') //we have a form that we need to get through its id
const firstname_input= document.getElementById('firstname-input')
const email_input= document.getElementById('email-input')
const password_input= document.getElementById('password-input')
const repeat_password_input= document.getElementById('repeat-password-input')
const error_message= document.getElementById('error-message')
//we have now our elements in javascript
form.addEventListener('submit', (e) =>{//this event will be fired once the form is submitted
    e.preventDefault()//e.preventDefault() Prevent Submit ;only need to prevent if there are any errors
    let errors = [] //creating an array that we are going to fill with error messages 
    if(firstname_input){
    //if we have a firstname input then we are in the signup
    errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value,repeat_password_input.value)//inputs to work with
}
    else{
        //if we don't have a firstname input then we are in the login
        errors= getLoginformErrors(email_input.value,password_input.value)//variable
    }
    if (errors.length > 0 ){
        //If there are any errors inside the array
        e.preventDefault()//this would prevent the submitting of the form
        error_message.innerText = errors.join (". ")//the join method can combine multiple strings of an array into one string (and we want to put a dot and a space between each sentence )
    }
})//adding an event listener to the form;this event will be fired once the form is submitted 

//writing the error detecting for this function
function getSignupFormErrors(firstname,email,password,repeatPassword){//the values that the user enter in the form
    let errors =[]//empty array
    if (firstname === '' || firstname == null ){
    errors.push('Firstname is required')//message pushed to the errors array
    firstname_input.parentElement.classList.add('incorrect')//has a parent element which is the div where the class needs to be;making it visible to the user
    }
    if (email === '' || email== null ){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
    }
    if (password === '' || password== null ){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
    }
    if (password.length < 8){
        errors.push('Password must have at least 8 characters')
        password_input.parentElement.classList.add('incorrect')
    }
    if (password !== repeatPassword){
        errors.push('Password does not match repeated password')
        password_input.parentElement.classList.add('incorrect')
        repeat_password_input.parentElement.classList.add('incorrect')

    }
    return errors;//the errors would be return to the variable
}
function getLoginformErrors (email, password){//defining the login function
    let errors=[] //empty errors array that we will return at the end of the function
    if (email === '' || email== null ){
    errors.push('Email is required')
    email_input.parentElement.classList.add('incorrect')
    }
    if (password === '' || password== null ){
    errors.push('Password is required')
    password_input.parentElement.classList.add('incorrect')
    }

}
const allInputs = [firstname_input, email_input, password_input, repeat_password_input ].filter( input => input != null)//array


allInputs.forEach (input => {
    input.addEventListener('input', () => {//using the input event
        if (input.parentElement.classList.contains('incorrect')){
            //if it contains the class incorrect
            input.parentElement.classList.remove('incorrect')
            error_message.innerText = ''

            

        }

    })
})