// Import the functions you need from the SDKs you need
import   {useState,useEffect} from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, set,ref } from 'firebase/database';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPAnQz2-Cjw4AXsQfzi2DxOP0w34G9PM0",
  authDomain: "football-matches-db.firebaseapp.com",
  databaseURL: "https://football-matches-db-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "football-matches-db",
  storageBucket: "football-matches-db.appspot.com",
  messagingSenderId: "197067425485",
  appId: "1:197067425485:web:e7ba0f721c5fb9a41c8b84",
  measurementId: "G-6JQXZ3R3N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


ref(db, '/');
ref(db,'/game')

  export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
  
    useEffect(() => {
      const dbRef = ref(db, path);
      const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
      if (devMode) { console.log(`loading ${path}`); }
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        if (devMode) { console.log(val); }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      }, (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      });
    }, [path, transform]);
  
    return [data, loading, error];
  };

  export const setData = (path, value) => (
    set(ref(db, path), value)
  );

  export const signInWithGoogle = () => {
    signInWithPopup(getAuth(db), new GoogleAuthProvider());
  };