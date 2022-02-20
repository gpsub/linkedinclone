import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Required for side-effects
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyD7-QDTn0YLjYWe5NRBG9EFxb4UGdwdg0o",
  authDomain: "linkedin-clone-c1af9.firebaseapp.com",
  projectId: "linkedin-clone-c1af9",
  storageBucket: "linkedin-clone-c1af9.appspot.com",
  messagingSenderId: "446527418394",
  appId: "1:446527418394:web:467d9babf087720ec7e1a3"
};

// Initialize Firebase

  const app = initializeApp(firebaseConfig)
  const db = getFirestore();

  export {db};