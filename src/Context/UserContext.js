import React from "react";
import { createContext } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

const authContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {

    const [user, setUser] = useState({})

  const popUpSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const createUserViaEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUserViaEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
    });

    return unsubscribe()
  } , [])

  const authInfo = {user, popUpSignIn, createUserViaEmail, signInUserViaEmail, logOut};

  return (
    <authContext.Provider value={authInfo}>
        {children}
    </authContext.Provider>
  );
};

export default UserContext;
