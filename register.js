// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBfnsxtNpcTj4oGFewKACtFhvyGyVnDp_4",
    authDomain: "login-authentification-d69f7.firebaseapp.com",
    projectId: "login-authentification-d69f7",
    storageBucket: "login-authentification-d69f7.firebasestorage.app",
    messagingSenderId: "281243985617",
    appId: "1:281243985617:web:42f1ddd28d86d076a947f0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


//submit button
const submit = document.getElementById ('submit');
submit.addEventListener("submit",function(event){
  event.preventDefault()

  //inputs
  const email_input = document.getElementById('email-input').value;
const password_input = document.getElementById('password-input').value;
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating Account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})