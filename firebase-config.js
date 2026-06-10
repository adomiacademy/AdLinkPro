import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmtwe_lMDqTcHLRPLR2fmLm6Lpj1CcabA",
  authDomain: "adlinkpro-23c35.firebaseapp.com",
  projectId: "adlinkpro-23c35",
  storageBucket: "adlinkpro-23c35.firebasestorage.app",
  messagingSenderId: "588716513642",
  appId: "1:588716513642:web:03039efdaee5b3b0c12d13",
  measurementId: "G-8FPDXX4YE5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider, signInWithPopup, doc, setDoc, getDoc };
