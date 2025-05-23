// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu1xlE-a1mmYXcnrdVMO0Cn43EQYkaV4A",
  authDomain: "temple-housing-connect.firebaseapp.com",
  projectId: "temple-housing-connect",
  storageBucket: "temple-housing-connect.firebasestorage.app",
  messagingSenderId: "75244099333",
  appId: "1:75244099333:web:5afe192ef2128e1c71496c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export
const db = getFirestore(app);

export { db };
