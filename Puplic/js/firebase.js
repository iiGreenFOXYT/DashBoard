// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyBW1I4FFqlPkb3RBY760qPSB5bPb8wEvxs",
  authDomain: "blogingwebsitedashboard.firebaseapp.com",
  projectId: "blogingwebsitedashboard",
  storageBucket: "blogingwebsitedashboard.appspot.com",
  messagingSenderId: "653097906203",
  appId: "1:653097906203:web:4a5dba7ec584ab8b4708be",
  measurementId: "G-33TQBKF3YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let db = firebase.firestore();