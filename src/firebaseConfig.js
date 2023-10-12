
import firebase from "firebase/compat/app";
import  "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAif4F5mi3fMBQ870S-GkgGf_B5VoPleZI",
  authDomain: "contact-page-1881c.firebaseapp.com",
  projectId: "contact-page-1881c",
  storageBucket: "contact-page-1881c.appspot.com",
  messagingSenderId: "913481427578",
  appId: "1:913481427578:web:87166746defa20235029c3"
};

// Initialize Firebase

    firebase.initializeApp(firebaseConfig)
export const firestore=firebase.firestore()
