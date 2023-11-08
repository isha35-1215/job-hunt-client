import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    

    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        })
          .then(() => {
            setUser(auth.currentUser);
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      };

    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect (()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);

            // if(currentUser){
            //     const loggedUser = { email: currentUser.email};

            //     axios.post('http://localhost:5000/jwt',loggedUser, {withCredentials: true})
            //     .then(res => {
            //         console.log('token response', res.data);
            //     })
            // }

        });

        return()=>{
            unSubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;