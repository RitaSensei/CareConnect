/* eslint-disable prettier/prettier */
import Constants  from 'expo-constants';
import { initializeApp } from "firebase/app";
import { getAuth,initializeAuth, getReactNativePersistence } from  "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBLRzR4uqoeO7Uc6pOA-3uTNx1PhxL-bb0",
  authDomain: "careconnect-66481.firebaseapp.com",
  projectId: "careconnect-66481",
  storageBucket: "careconnect-66481.appspot.com",
  messagingSenderId: "9285222114",
  appId: "1:9285222114:web:631966364d7e7650d268bb"
};

// Initialize Firebase, Firestore and authentication module
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, { persistence: getReactNativePersistence(ReactNativeAsyncStorage) });
const FIRESTORE_DB = getFirestore(FIREBASE_APP);
const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
const FIREBASE_GET_AUTH = getAuth(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIRESTORE_DB, FIREBASE_GET_AUTH, FIREBASE_STORAGE };