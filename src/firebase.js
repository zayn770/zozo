
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8bDdbdW9-IP1MKQTOctmc9QGnlo6CPv4",
  authDomain: "zozo-b47d3.firebaseapp.com",
  projectId: "zozo-b47d3",
  storageBucket: "zozo-b47d3.firebasestorage.app",
  messagingSenderId: "494806756624",
  appId: "1:494806756624:web:3f8fa66cbf95c13b9ec995",
  measurementId: "G-9CS692T9J4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);