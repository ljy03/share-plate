// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore";
import {getDatabase} from "firebase/database";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtT_k-i7wtcq8EbvrJVeZeUufjf8ge2d8",
  authDomain: "shareplate-1597d.firebaseapp.com",
  projectId: "shareplate-1597d", //project-192509056891
  storageBucket: "shareplate-1597d.appspot.com",
  messagingSenderId: "192509056891",
  appId: "1:192509056891:web:bfe2f89d7be798b3e00fde",
  measurementId: "G-4JMEKCGZCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage();
export {auth, provider, db, storage};