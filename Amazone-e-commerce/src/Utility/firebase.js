
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from"firebase/firestore"
import "firebase/auth"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJB2A31HqWwvuutNS1iiIfAFUC2bmg2qA",
  authDomain: "clone-59dc5.firebaseapp.com",
  projectId: "clone-59dc5",
  storageBucket: "clone-59dc5.appspot.com",
  messagingSenderId: "967849849764",
  appId: "1:967849849764:web:1ec26924b615cb531e4731"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db =  getFirestore(app)