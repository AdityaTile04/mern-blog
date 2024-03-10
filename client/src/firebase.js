import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b6b33.firebaseapp.com",
  projectId: "mern-blog-b6b33",
  storageBucket: "mern-blog-b6b33.appspot.com",
  messagingSenderId: "310781345040",
  appId: "1:310781345040:web:8b034febf0b2555bc97995",
};

export const app = initializeApp(firebaseConfig);
