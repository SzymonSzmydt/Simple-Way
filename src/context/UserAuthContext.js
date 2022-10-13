import {createContext, useContext, useEffect, useState} from "react";
import {auth} from "./firebase";
import { useNavigate } from 'react-router-dom';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithRedirect
} from 'firebase/auth';

const userAuthContext = createContext({});

export function UserAuthContextProvider({ children }) {
    const [ user, setUser ] = useState({});
    const navigate = useNavigate();  

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithRedirect(auth, googleAuthProvider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            navigate("/application");
        });
        return () => unSubscribe();
    }, []);

    return (
        <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn }}>
            { children }
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}