
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD-irrXcdAistsIZ8ADFsfIdf8l2yLXgjg",
  authDomain: "brilliant-tide-409212.firebaseapp.com",
  projectId: "brilliant-tide-409212",
  storageBucket: "brilliant-tide-409212.appspot.com",
  messagingSenderId: "340591383886",
  appId: "1:340591383886:web:f0c0a49758e019986f7a1f",
  measurementId: "G-V7MMWX0WZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database =getAuth(app)
