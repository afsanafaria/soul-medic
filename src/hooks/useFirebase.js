import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import initializeAuthenthication from '../firebase/firebase.init';

initializeAuthenthication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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
        });
        return () => unsubscribe;
    }, [])

    const googleSignIn = () => {
        // e.preventDefault();
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
        });
    }

    const createNewUser = () => {

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



    return {
        user,
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        createNewUser,
        loginWithEmail,
        googleSignIn,
        googleSignOut
    }
};

export default useFirebase;