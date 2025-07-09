// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzZtEDS10zFj_Iu-5Ycn5D7e379S77Hhw",
  authDomain: "prepwise-794f5.firebaseapp.com",
  projectId: "prepwise-794f5",
  storageBucket: "prepwise-794f5.firebasestorage.app",
  messagingSenderId: "1012972420818",
  appId: "1:1012972420818:web:76f17f03cc05b3f497b70b",
  measurementId: "G-VGWVQ8CX8Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
