
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyA8bDdbdW9-IP1MKQTOctmc9QGnlo6CPv4",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "zozo-b47d3.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "zozo-b47d3",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "zozo-b47d3.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "494806756624",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:494806756624:web:3f8fa66cbf95c13b9ec995",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "G-9CS692T9J4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;