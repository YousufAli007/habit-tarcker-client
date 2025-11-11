// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzvEUM0wuRSvr5NHhVuVZpEgxWb4vFGYc",
  authDomain: "habit-tracker-8ecc9.firebaseapp.com",
  projectId: "habit-tracker-8ecc9",
  storageBucket: "habit-tracker-8ecc9.firebasestorage.app",
  messagingSenderId: "716851353475",
  appId: "1:716851353475:web:9e07c941832989c026c8b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
