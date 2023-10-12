
import firebase from "firebase/compat/app";
import  "firebase/compat/firestore";



const firebaseConfig = {
  apiKey:"{process.env.REACT_APP_FIREBASE_API_KEY}",
  authDomain:"{process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}",
  projectId:"{process.env.REACT_APP_FIREBASE_PROJECT_ID}",
  storageBucket:"{process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}",
  messagingSenderId:"{process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}",
  appId: "1:913481427578:web:87166746defa20235029c3"
};

// Initialize Firebase

    firebase.initializeApp(firebaseConfig)
export const firestore=firebase.firestore()
