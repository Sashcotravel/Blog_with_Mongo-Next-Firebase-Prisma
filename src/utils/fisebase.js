// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-c7afa.firebaseapp.com",
    projectId: "blog-c7afa",
    storageBucket: "blog-c7afa.appspot.com",
    messagingSenderId: "1027231457393",
    appId: "1:1027231457393:web:48da9cb132e06161987bd0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);