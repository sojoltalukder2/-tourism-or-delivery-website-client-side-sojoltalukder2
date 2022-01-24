import React from 'react';
import { createContext } from 'react';

import useFirebase from './../../Authentification/Authenticate';

export const AuthContextt=React.createContext();
const AuthProvider = ({children}) => {
    // const {children}=props;
    const alldata=useFirebase();
   
    return (
        <AuthContextt.Provider value={alldata}>
        { children}
      </AuthContextt.Provider>
    );
};

export default AuthProvider;