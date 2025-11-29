// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3IB4VBG6eKUMbABuJWmNkhmY7P_CVcHc",
  authDomain: "cookmantra-2a936.firebaseapp.com",
  projectId: "cookmantra-2a936",
  storageBucket: "cookmantra-2a936.firebasestorage.app",
  messagingSenderId: "26816330482",
  appId: "1:26816330482:web:6a82701c7c609704c2ee6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const db = getFirestore(app);
export const auth = getAuth(app);
