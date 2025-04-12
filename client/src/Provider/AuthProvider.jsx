import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext();

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [loading,setLoading] = useState(true)
    

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const createUser = (email,password)=>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (name,image)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: image
        })


    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)  
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const info = {
      user,
      signInWithGoogle,
      createUser,
      login,
      logOut,
      updateUser,
      loading,
      setLoading,
    };
    return (
        <AuthContext.Provider value={info}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;