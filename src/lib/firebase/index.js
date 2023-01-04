// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth , setPersistence , inMemoryPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNC10qp9ZnUw7lcI6RP1duX_muGIoVrU0",
  authDomain: "fir-c669e.firebaseapp.com",
  projectId: "fir-c669e",
  storageBucket: "fir-c669e.appspot.com",
  messagingSenderId: "903761497592",
  appId: "1:903761497592:web:bea2f36f9522372d379a0d",
  measurementId: "G-Q4P7FPRG0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const currentUser = auth.currentUser;

setPersistence(auth,inMemoryPersistence);

