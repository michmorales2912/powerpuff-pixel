import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDaq5RfQl5n_t2bB53XL9CAv1kalU1OAfE",
  authDomain: "powerpuff-pixel.firebaseapp.com",
  projectId: "powerpuff-pixel",
  storageBucket: "powerpuff-pixel.firebasestorage.app",
  messagingSenderId: "428594578478",
  appId: "1:428594578478:web:32e807e0d77cfbd7ca8bbf",
  measurementId: "G-99H0E235KD"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios que sí usas
export const auth = getAuth(app);
export const db = getFirestore(app);
