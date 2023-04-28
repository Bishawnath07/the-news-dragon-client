// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKX3Y9B6I0ZIbXt5AGR6oD2JeAXG3h7C4",
  authDomain: "the-news-dragon-d103f.firebaseapp.com",
  projectId: "the-news-dragon-d103f",
  storageBucket: "the-news-dragon-d103f.appspot.com",
  messagingSenderId: "1088158311835",
  appId: "1:1088158311835:web:1ad1f06496833f65b16d3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;