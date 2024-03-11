// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "jonard-blog.firebaseapp.com",
  projectId: "jonard-blog",
  storageBucket: "jonard-blog.appspot.com",
  messagingSenderId: "55154221510",
  appId: "1:55154221510:web:d67abe0cf47502406a92c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);