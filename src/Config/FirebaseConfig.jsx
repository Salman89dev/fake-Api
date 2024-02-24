import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPj6XOno8SdruYUGED-bkI4-I1Ph0ZUWk",
  authDomain: "fir-auth-11633.firebaseapp.com",
  projectId: "fir-auth-11633",
  storageBucket: "fir-auth-11633.appspot.com",
  messagingSenderId: "514340635162",
  appId: "1:514340635162:web:388864b3a5e466668e47a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getAuth(app)
export const googleAuth=new GoogleAuthProvider()