// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU32_22mV88tZg59fwu9-17aise_ayQ6c",
  authDomain: "portfolio-ayoub-ee24d.firebaseapp.com",
  projectId: "portfolio-ayoub-ee24d",
  storageBucket: "portfolio-ayoub-ee24d.firebasestorage.app",
  messagingSenderId: "181274263179",
  appId: "1:181274263179:web:970b540606b1fe72ab1e8e",
  measurementId: "G-TTYRGLJPZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
    console.log("Firebase Analytics active ✅");
  }
});