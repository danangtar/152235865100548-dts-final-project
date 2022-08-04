// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIVyvBrvGJaCTQMGmrej6Wh02J10OMdFg",
  authDomain: "dts-react-fin-proj.firebaseapp.com",
  projectId: "dts-react-fin-proj",
  storageBucket: "dts-react-fin-proj.appspot.com",
  messagingSenderId: "94080619421",
  appId: "1:94080619421:web:f2d0862affd53db76f9574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };