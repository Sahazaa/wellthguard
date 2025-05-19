//first,we need to get all our elements into variables
const form=document.getElementById('form') //we have a form that we need to get through its id
const firstname_input=getElementById('firstname-input')
const email_input=getElementById('email-input')
const password_input=getElementById('password-input')
const repeat_password_input=getElementById('repeat-password-input')

//we have now our elements in javascript
form.addRventListener('submit', (e) =>{//the event object e is a very special object in event listeners
    e.preventDefault()//will prevent the default behaviour,which is submit
    //but we only need to prevent this when there are any errors
    let errors= [] //creating an array that we are going to fill with error messages for every error that are detected in the form 
    if(firstname_input){
    //if we have a firstname input then we are in the signup
    errors = getSignupFormErrors(firstname_input.value, email_input.value, password_input.value,repeat_password_input.value)//they will get the value of the input fields as an argument
}
    else{
        //if we don't have a firstname input then we are in the login
        errors= getLoginformErrors(email_input.value,password_input.value)
    }
})//adding an event listener to the form;this event will be fired once the form is submitted 

//writing the error detecting for this function
function getSignupFormErrors(firstname,email,password,repeatPassword){//the values that the user enter in the form
let errors =[]
if (firstname === '' || firstname == null ){
    errors.push('Firstname is required')
    firstname_input.parentElement.ClassList.add('incorrect')
}
if (email === '' || email== null ){
    errors.push('Email is required')
    firstname_input.parentElement.ClassList.add('incorrect')
}

}
