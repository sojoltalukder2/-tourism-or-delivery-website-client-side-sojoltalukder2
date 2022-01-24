import initializingFirebase from "../Firebase/firebase.initialize";

import { getAuth, signInWithPopup,GoogleAuthProvider, onAuthStateChanged ,signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
initializingFirebase();
const useFirebase=()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const [loading,setLoading]=useState(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleSignin=()=>{
      setLoading(true)
       return signInWithPopup(auth, provider)
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } else {
              setUser('')
            }
            setLoading(false)
          });
    },[]);
    const googleSignOut =()=>{
      setLoading(true)
      signOut(auth)
      .then(() =>{  })
      .finally( ()=>setLoading(false))
    
  }
    return{
        googleSignin,
        user,error,
        googleSignOut,
        loading,setLoading,
        setUser,
        setError
    }

}
export default useFirebase;