
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBivXtNxvbWRvH_7B4OPxA2pmhPAN6DfGw",
    authDomain: "srijan-795e7.firebaseapp.com",
    projectId: "srijan-795e7",
    storageBucket: "srijan-795e7.appspot.com",
    messagingSenderId: "924379600558",
    appId: "1:924379600558:web:f3ddb23edf3afb2a4aff3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
    event.preventDefault()

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Created Account.....");
            // window.location.href="mine.html"
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
})