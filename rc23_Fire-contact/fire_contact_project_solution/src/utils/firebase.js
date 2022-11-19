import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCnUuOzgVd4wvS7v9Iwr3hIvF7Sfvc_fWM",
  authDomain: "cooper-contact-app.firebaseapp.com",
  databaseURL: "https://cooper-contact-app-default-rtdb.firebaseio.com",
  projectId: "cooper-contact-app",
  storageBucket: "cooper-contact-app.appspot.com",
  messagingSenderId: "518195320560",
  appId: "1:518195320560:web:87be58d9e0ec40513f5435",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;