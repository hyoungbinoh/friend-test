import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAijiL4ZyKt8ccxKrs6oMVuJdWv1E5XZMc",
  authDomain: "friendstest-f96d2.firebaseapp.com",
  projectId: "friendstest-f96d2",
  storageBucket: "friendstest-f96d2.appspot.com",
  messagingSenderId: "726571177272",
  appId: "1:726571177272:web:a8770ce9ab9cd57fcfddcd"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export { db };