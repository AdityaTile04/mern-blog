// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b6b33.firebaseapp.com",
  projectId: "mern-blog-b6b33",
  storageBucket: "mern-blog-b6b33.appspot.com",
  messagingSenderId: "310781345040",
  appId: "1:310781345040:web:8b034febf0b2555bc97995",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
