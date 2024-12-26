import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase config";
export const AuthContext = createContext(null)
const ContextAPI = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (updateData) => {
        updateProfile(auth.currentUser,updateData)
      }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [setUser])

    const apiInfo = {
        user,
        setUser,
        loading,
        googleLogin,
        createUser,
        profileUpdate,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={apiInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextAPI;