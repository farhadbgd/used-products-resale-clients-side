// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,

    apiKey: "AIzaSyBn2sXtbcg5ztqqlumikkdQTlIGW4r2k4E",
    authDomain: "book-world-da049.firebaseapp.com",
    projectId: "book-world-da049",
    storageBucket: "book-world-da049.appspot.com",
    messagingSenderId: "203927991486",
    appId: "1:203927991486:web:2cce8609b3a20822d2daef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);