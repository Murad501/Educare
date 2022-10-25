import React from "react";
import { createContext } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

export const authContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const popUpSignIn = (provider) => {
    setLoading(true)
    return signInWithPopup(auth, provider);
  };

  const createUserViaEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUserViaEmail = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        setLoading(false)
    });

    return () => unsubscribe()
  } , [])

  const authInfo = {user, auth, loading, popUpSignIn, createUserViaEmail, signInUserViaEmail, logOut};

  return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  );
};

export default UserContext;
