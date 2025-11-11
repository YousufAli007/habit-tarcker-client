import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
const googeProvider =new GoogleAuthProvider()
const Authporvider = ({children}) => {
 const [user, setUser] = useState(null);
  const [loading, setLoading]=useState(true)
  // sign in Google 
  const signInGoogle =()=>{
    return signInWithPopup(auth,googeProvider)
  }
  // create Auth
  const crateAuth =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  // signIn With Email and Password
  const singInEmailPassword =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }

  // currently user 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    })
    return()=>unsubscribe()
    
  },[])
  const contextInfo = {
    user,
    loading,
    crateAuth,
    signInGoogle,
    singInEmailPassword,
  };
  return <AuthContext value={contextInfo}>
    {children}
    </AuthContext>;
};

export default Authporvider;