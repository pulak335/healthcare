
import initialize from '../Firebase/Firebase.init';

import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';


initialize();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // login with google account hanlde
    const signInWithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
    .then((result) => {
        const user = result.user;
        setUser(user)
        })
            .catch((error) => {
                setError(error.message);
    
            });
    }


    // create a new  account account handle
    const createWithEmail = (email,password) => {
            createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
                
            .catch((error) => {
                setError(error.message);
            });
        }
    


    // login email and password account hanlde
    const signinWithEmail = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    
    
      // logout hanlde

        const logout = () => {
            signOut(auth)
                .then(() => {
                    setUser({})

                })
                .catch((error) => {
                    setError(error.message);
            });
    }
    

    useEffect(() => {
            onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
               setUser({})
            }
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    


    return {
        signInWithGoogle,
        user,
        error,
        logout,
        createWithEmail,
        signinWithEmail,
    }

};

export default useFirebase;