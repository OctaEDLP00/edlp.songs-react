import { useEffect, useState, createContext } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
  sendPasswordResetEmail
} from 'firebase/auth'
import { auth } from '../lib/firebase'

const authContext = createContext()
export default authContext

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // register
  const singUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password) 
  }

  // login
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password) 
  }

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider(auth)
    return signInWithPopup(auth, googleProvider)
  }
  
  /*
    const signInWithTwitter = () => {
      const twitterProvider = new TwitterAuthProvider(auth)
      return signInWithPopup(auth, twitterProvider)
    }
  */

  // logout
  const logOut = () => signOut(auth) 

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      //console.log({ currentUser })
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  },[])
  
  return <authContext.Provider value={
    {
      singUp,
      signIn,
      logOut,
      signInWithGoogle,
      resetPassword,
      loading,
      user
    }
  }>
    {children}
  </authContext.Provider>
}