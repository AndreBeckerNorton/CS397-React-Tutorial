import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from 'firebase/database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { getAuth, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDOwgp-fYmag_TLm-ICDAwXYgGnXzBTzu8",
    authDomain: "cs397-react-tutorial-5f61e.firebaseapp.com",
    databaseURL: "https://cs397-react-tutorial-5f61e-default-rtdb.firebaseio.com",
    projectId: "cs397-react-tutorial-5f61e",
    storageBucket: "cs397-react-tutorial-5f61e.appspot.com",
    messagingSenderId: "1051003250986",
    appId: "1:1051003250986:web:85e515e0eda7d2f6925653",
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebase);
const database = getDatabase(firebase);

if (process.env.REACT_APP_EMULATE) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(db, "127.0.0.1", 9000);

  signInWithCredential(auth, GoogleAuthProvider.credential(
    '{"sub": "qEvli4msW0eDz5mSVO6j3W7i8w1k", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
  ));
}

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};
const firebaseSignOut = () => signOut(getAuth(firebase));
export { firebaseSignOut as signOut };
export const useAuthState = () => {
  const [user, setUser] = useState();
  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ));
  
  return [user];
};