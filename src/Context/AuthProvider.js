import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';


export const MyContext = createContext();
const AuthProvider = ({ children }) => {
    
    const data = useFirebase();
    return (
            <MyContext.Provider value={data}>
                    {children}
            </MyContext.Provider>
        
    );
};

export default AuthProvider;