import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)
console.log(auth)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(user)
    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // google signing
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // logout
    const logout = () => {
        setLoading(true)
        localStorage.removeItem('aircnc-token')
        return signOut(auth)
    }

    //login with password
    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        //this part will execute once the component is mounted.
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            //this part will execute once the component is unmounted.
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        createUser,

        signInWithGoogle,
        logout,
        signin,

        loading,
        setLoading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;