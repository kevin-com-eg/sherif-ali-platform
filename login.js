import { auth } from "./firebase.js";

import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


function login(){

let email = document.getElementById("email").value
let password = document.getElementById("password").value


signInWithEmailAndPassword(auth, email, password)

.then((userCredential)=>{

alert("تم تسجيل الدخول")

})

.catch((error)=>{

alert(error.message)

})

}

window.login = login
