import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"



const firebaseConfig = {
    apiKey: "AIzaSyDdw-72Vv4eINLyXR6HKlP-i-2ZvFaZhy8",
    authDomain: "react-pos-ca3e4.firebaseapp.com",
    projectId: "react-pos-ca3e4",
    storageBucket: "react-pos-ca3e4.appspot.com",
    messagingSenderId: "582039854121",
    appId: "1:582039854121:web:1f0a48da48a52dc704d038",
    measurementId: "G-NKR1XGSZJL"
  };

  const app = initializeApp(firebaseConfig)

  export const storage = getStorage(app)

