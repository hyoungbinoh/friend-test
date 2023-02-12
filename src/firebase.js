// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC58aq1z04fj3nKhnY9eaHbMDZfJFKW8Qk",
  authDomain: "sparta-react-basic-re.firebaseapp.com",
  projectId: "sparta-react-basic-re",
  storageBucket: "sparta-react-basic-re.appspot.com",
  messagingSenderId: "245802630509",
  appId: "1:245802630509:web:f0434ab6dda6564f8cae64",
  measurementId: "G-W3B8MEH9RW"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export {db};