// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCTPF3Ko-GyLl_L4KDuwF533QFSCXJ86ec",
  authDomain: "cofeesalesshop.firebaseapp.com",
  projectId: "cofeesalesshop",
  storageBucket: "cofeesalesshop.appspot.com",
  messagingSenderId: "253291428673",
  appId: "1:253291428673:web:02a6c1481aa04aedbbbfc0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
