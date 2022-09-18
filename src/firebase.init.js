// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM6n1azN1LVSlF6hYvEQ8JgzUEyM3dikA",
  authDomain: "tech-geeks-8b01e.firebaseapp.com",
  projectId: "tech-geeks-8b01e",
  storageBucket: "tech-geeks-8b01e.appspot.com",
  messagingSenderId: "500274430103",
  appId: "1:500274430103:web:1c8bf99b01b9673c23e9d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

// export default app;