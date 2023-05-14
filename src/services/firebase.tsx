import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbiC-He4J_5C1amUkos46cZO3lIeMwGfQ",
  authDomain: "chatapp-425f4.firebaseapp.com",
  projectId: "chatapp-425f4",
  storageBucket: "chatapp-425f4.appspot.com",
  messagingSenderId: "202897841065",
  appId: "1:202897841065:web:34698c7314f5b62d5142b8",
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const db = getFirestore(firebase);
const provider = new GoogleAuthProvider();

export { auth, db, provider };
export default firebase;
