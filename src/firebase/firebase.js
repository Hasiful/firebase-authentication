// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8bfcPSI29v1HqTtCjjHBu21Covg9Guhs",
    authDomain: "fir-authentication-65f6f.firebaseapp.com",
    projectId: "fir-authentication-65f6f",
    storageBucket: "fir-authentication-65f6f.appspot.com",
    messagingSenderId: "34095334401",
    appId: "1:34095334401:web:28b670a9d49057dd98ec00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app