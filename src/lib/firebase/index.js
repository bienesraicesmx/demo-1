// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , setPersistence , inMemoryPersistence} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCGqgHykMTDVO6mX0ZMKVOcPtpj84VMEmk",
  authDomain: "bienes-demo.firebaseapp.com",
  projectId: "bienes-demo",
  storageBucket: "bienes-demo.appspot.com",
  messagingSenderId: "791764827421",
  appId: "1:791764827421:web:70993b13c5ab71e46e75f4"
};

// Initialize Firebase
const app = initializeApp(config);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const currentUser = auth.currentUser;

setPersistence(auth,inMemoryPersistence);

