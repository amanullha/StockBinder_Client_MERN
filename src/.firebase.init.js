// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjZ0XLF3fT9XwkRFd2eYaqVOzo8qkCaMI",
    authDomain: "stock-blinder.firebaseapp.com",
    projectId: "stock-blinder",
    storageBucket: "stock-blinder.appspot.com",
    messagingSenderId: "1058746102991",
    appId: "1:1058746102991:web:dbc14fbe949887da3bb3ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;