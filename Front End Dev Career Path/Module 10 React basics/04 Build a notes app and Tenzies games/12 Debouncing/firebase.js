import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBbSEa6T-nF0uxo5quFccBmIG3yTIXIBFk",
  authDomain: "react-notes-app-8a4d7.firebaseapp.com",
  projectId: "react-notes-app-8a4d7",
  storageBucket: "react-notes-app-8a4d7.appspot.com",
  messagingSenderId: "689147384042",
  appId: "1:689147384042:web:e4b83274b80abaffa94793"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")