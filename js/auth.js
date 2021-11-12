
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkX7mqPZb0ChCKUzSmAWXWBPKQiNM50JY",
  authDomain: "bufandafirebase.firebaseapp.com",
  projectId: "bufandafirebase",
  storageBucket: "bufandafirebase.appspot.com",
  messagingSenderId: "613420783855",
  appId: "1:613420783855:web:8f3318998c630ff1b2a31a",
  measurementId: "G-2DSWXGDEHM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const loginForm = document.getElementById("login");
const registerForm = document.getElementById("register");

const createUser = async (email,password) => {
  await createUserWithEmailAndPassword(auth,email,password);
}

createUser();

