/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import Constants  from 'expo-constants';
import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize the web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLRzR4uqoeO7Uc6pOA-3uTNx1PhxL-bb0",
  authDomain: "careconnect-66481.firebaseapp.com",
  projectId: "careconnect-66481",
  storageBucket: "careconnect-66481.appspot.com",
  messagingSenderId: "9285222114",
  appId: "1:9285222114:web:631966364d7e7650d268bb"
};

// Initialize Firebase, Firestore and authentication module
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);