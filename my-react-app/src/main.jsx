import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC3IB4VBG6eKUMbABuJWmNkhmY7P_CVcHc",
//   authDomain: "cookmantra-2a936.firebaseapp.com",
//   projectId: "cookmantra-2a936",
//   storageBucket: "cookmantra-2a936.firebasestorage.app",
//   messagingSenderId: "26816330482",
//   appId: "1:26816330482:web:6a82701c7c609704c2ee6b"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);