import React from 'react';
import { createContext } from 'react';
import app from '../Firebase/firebase.config';
import {getAuth} from 'firebase/auth'

const authContext = createContext();

const auth = getAuth(app)

const UserContext = ({children}) => {


    const authInfo = {}

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;