import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUgIo1Vnkw9caq1BQ8EiX89q1pKPvolvA",
  authDomain: "eccomerce-c450c.firebaseapp.com",
  projectId: "eccomerce-c450c",
  storageBucket: "eccomerce-c450c.appspot.com",
  messagingSenderId: "57966631220",
  appId: "1:57966631220:web:441f9aa90ea4379d706d61",
};
// Initialize Firebase

const firebaseDB = firebase.initializeApp(firebaseConfig);

export const db = firebaseDB.firestore();
