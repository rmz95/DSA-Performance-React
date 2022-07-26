// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBt3nTcC5nh9rwyp24rSvL0XsXdX19JNvA",
    authDomain: "dsareact-e520e.firebaseapp.com",
    projectId: "dsareact-e520e",
    storageBucket: "dsareact-e520e.appspot.com",
    messagingSenderId: "207279185994",
    appId: "1:207279185994:web:ff318482286f702b34c6b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);