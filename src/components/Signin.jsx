// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi0hTbqPdCGp6o_OZQOHJqkod2Ih8aIt0",
  authDomain: "tripplan-4a4d2.firebaseapp.com",
  projectId: "tripplan-4a4d2",
  storageBucket: "tripplan-4a4d2.appspot.com",
  messagingSenderId: "540762904279",
  appId: "1:540762904279:web:11398380d3389d0bc90292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auto = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

export default app;
