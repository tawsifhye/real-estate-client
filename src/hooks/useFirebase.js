import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const auth = getAuth();

  //google sign in
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    isLogin ? processLogin(email, password) : registerNewUser(email, password);
  };

  const processLogin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        window.location.reload();
      });
  };

  const registerNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        verifyEmail();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        window.location.reload();
      });
  };
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      setError("Email Sent Please verify");
    });
  };
  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        setError("Password reset link sent to email.");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  //observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  return {
    user,
    email,
    error,
    handleGoogleSignIn,
    handleEmailChange,
    handlePasswordChange,
    handleRegistration,
    processLogin,
    handleResetPassword,
    toggleLogin,
    registerNewUser,
    isLogin,
    logOut,
    isLoading,
  };
};

export default useFirebase;
