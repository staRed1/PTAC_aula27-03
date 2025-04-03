import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZthteRjlfFXiTxBD4mSnnJCcbJoUC9Bg",
  authDomain: "ptac-projeto-bfa92.firebaseapp.com",
  projectId: "ptac-projeto-bfa92",
  storageBucket: "ptac-projeto-bfa92.firebasestorage.app",
  messagingSenderId: "199301040698",
  appId: "1:199301040698:web:96a9a2c98e12c664e1c303",
  measurementId: "G-N75MXMPEFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };