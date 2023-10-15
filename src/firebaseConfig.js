import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIREBASE_API_KEY}`,
  authDomain: `${import.meta.env.VITE_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}`,
  databaseURL: `${import.meta.env.VITE_FIREBASE_DATABASE_URL}`,
  storageBucket: `${import.meta.env.VITE_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${import.meta.env.VITE_FIREBASE_APP_ID}`,
  measurementId: `${import.meta.env.VITE_FIREBASE_MEASUREMENT_ID}`,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const database = firebase.database();
export const storage = firebase.storage();
