// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBD0sWIqlJ_5b1P4Z_eVsf7K_PxlkdZ2o",
    authDomain: "email-password-auth-8a15e.firebaseapp.com",
    projectId: "email-password-auth-8a15e",
    storageBucket: "email-password-auth-8a15e.firebasestorage.app",
    messagingSenderId: "211671853747",
    appId: "1:211671853747:web:e7319944be8bec62369ec6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);