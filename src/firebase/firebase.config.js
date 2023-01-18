// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6mNp7Yh91vfpzxCZlvh6v6LwGSb_oOTc",
    authDomain: "food-box-foundation.firebaseapp.com",
    projectId: "food-box-foundation",
    storageBucket: "food-box-foundation.appspot.com",
    messagingSenderId: "755232307452",
    appId: "1:755232307452:web:04b88ad3b8e0de01aa7f79"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;