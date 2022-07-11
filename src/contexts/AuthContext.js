import React, { useContext, useState, useEffect } from 'react';
import { auth } from "../components/Firebase";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, deleteUser, sendPasswordResetEmail, GoogleAuthProvider, signInWithRedirect,getRedirectResult, FacebookAuthProvider, GithubAuthProvider} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const [isUser, setIsUser]=useState(false);

    const authorization = getAuth();

    //function for create user account
    async function signup(email, password) {
        // const authorization=getAuth();
        const result = await createUserWithEmailAndPassword(authorization, email, password);
        sendEmailVerification(authorization.currentUser);
        return result;
    }

    //function for login
    function login(email, password) {
        // const authorization=getAuth();
        return signInWithEmailAndPassword(authorization, email, password);
    }

    //function for logout
    function logout() {
        // const authorization=getAuth();
        signOut(authorization)
    }

    //sign in with google.
    function logInWithGoogle(){
        try{
            const provider=new GoogleAuthProvider();
            signInWithRedirect(authorization, provider);
            getRedirectResult(authorization);
        } catch(err){
            console.log(err);
        }
    }
    //Login with facebook
    function logInWithFacebook(){
        try{
            const provider=new FacebookAuthProvider();
            signInWithRedirect(authorization, provider);
            getRedirectResult(authorization);
        } catch(error){
            console.log(error);
        }
    }

    //login with github
    function logInWithGithub(){
            console.log("World");
            const provider= new GithubAuthProvider();
            signInWithRedirect(authorization, provider);
            getRedirectResult(authorization)
    }
    //check the state of user means it is logout ot login. when user login or logout then it is
    //call
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("Log in");
            setIsUser(true);
        } else {
            console.log("Log out");
            setIsUser(false);
        }
    });

    //update user details
    function update(name){
        updateProfile(authorization.currentUser, {
            displayName:name
        })
    }
    //delete user account.
    function deleteAccount(){
        deleteUser(authorization.currentUser);
    }
    function forgetPasswordfun(email){
        sendPasswordResetEmail(authorization,email);
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe;
    }, [])
    const value = {
        currentUser,
        signup,
        login,
        logout,
        update,
        deleteAccount,
        forgetPasswordfun,
        logInWithGoogle,
        logInWithFacebook,
        logInWithGithub
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}