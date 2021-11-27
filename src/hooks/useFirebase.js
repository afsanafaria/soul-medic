import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthenthication from '../firebase/firebase.init';

initializeAuthenthication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    const googleSignIn = () => {
        // e.preventDefault();
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        // .then((result) => {
        //     setUser(result.user);
        //     setError('');
        //     // ...
        // }).catch((error) => {
        //     setError(error.message);
        //     // ...
        // });
    }

    const googleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false));
    }

    const createNewUser = () => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //     // Signed in 
        //     console.log(result.user);
        //     setError('');
        //     // ...
        // })
        // .catch((error) => {
        //     setError(error.message)
        // });
    }

    const loginWithEmail = () => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //     // Signed in 
        //     console.log(result.user);
        //     setError('');
        //     // ...
        // })
        // .catch((error) => {
        //     setError(error.message);
        // });
    }


    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
        // .then(result => {
        //     console.log("from verifyEmail", result)
        //     // Email verification sent!
        //     // ...
        // });

    }




    return {
        user,
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        isLoading,
        setIsLoading,
        createNewUser,
        loginWithEmail,
        verifyEmail,
        googleSignIn,
        googleSignOut
    }
};

export default useFirebase;