import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAf8D1lCXxcs_o2sNZNUgmnF8WUEKUctdk",
  authDomain: "wctp-bc4b5.firebaseapp.com",
  projectId: "wctp-bc4b5",
  storageBucket: "wctp-bc4b5.appspot.com",
  messagingSenderId: "86436199000",
  appId: "1:86436199000:web:5c1ff374c35b7d7b4b682d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
