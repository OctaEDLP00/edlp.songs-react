import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB212uT8Vs4e6OnOH13V_6wLLj1IaMiugM",
  authDomain: "bot-edlp-song.firebaseapp.com",
  projectId: "bot-edlp-song",
  storageBucket: "bot-edlp-song.appspot.com",
  messagingSenderId: "225340455976",
  appId: "1:225340455976:web:dad5d24740f0ba9c20891d",
  measurementId: "G-2LE88H5X0Z"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)