// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0SPvAyDYGPAcQIeL7NpPohsXf6GFo9F8",
  authDomain: "metalinst-forms.firebaseapp.com",
  projectId: "metalinst-forms",
  storageBucket: "metalinst-forms.appspot.com",
  messagingSenderId: "939290040860",
  appId: "1:939290040860:web:a06159b8585857478fddd9"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);