import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"

export const MyContext = createContext(null);

const MyContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const signUp = (email, password) => {
        setAuthLoading(true);
        const signUpInstance = createUserWithEmailAndPassword(auth, email, password);
        setAuthLoading(false);
        return signUpInstance;
    }
    const signIn = (email, password) => {
        setAuthLoading(true);
        const signInInstance = signInWithEmailAndPassword(auth, email, password);
        setAuthLoading(false);
        return signInInstance;
    }
    const googleLogin = () => {
        setAuthLoading(true);
        const googleLoginInstance = signInWithPopup(auth, googleProvider);
        setAuthLoading(false);
        return googleLoginInstance;
    }
    useEffect(() => {
        setAuthLoading(true)
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setAuthLoading(false)
        })
        return unSubscribe;
    }, [auth])
    const contextInfo = {
        signUp,
        signIn,
        googleLogin,
        user,
        authLoading,
    }
    return (
        <MyContext.Provider value={contextInfo}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContextProvider;