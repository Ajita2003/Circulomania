import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

//const firebaseConfig = {
 //   apiKey: "AIzaSyCggZCcBun0cwNfOWGC2K8pZcgIRWMfqwY",
 //   authDomain:",
  //  projectId: ,
  //  storageBucket: "olx-sijeesh.appspot.com",
  //messagingSenderId: "767411886432",
  //  appId: "1:767411886432:web:2ef6862afc88f2c423a605",
   // measurementId: "G-4ELNR9DJHL"
  //};

//export const Firebase= firebase.initializeApp(firebaseConfig)//named export
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
//import { Firebase } from "firebaseconfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsPp90ot3Hkj6zAXf-JDDkeAgx61z20BQ",
  authDomain: "renewtreasures.firebaseapp.com",
  projectId: "renewtreasures",
  storageBucket: "renewtreasures.appspot.com",
  messagingSenderId: "499810265272",
  appId: "1:499810265272:web:fa0d208c0fa7e0216f6c4d",
  measurementId: "G-151PC6REB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage= getStorage(app);
export const Firebase= firebase.initializeApp(firebaseConfig);