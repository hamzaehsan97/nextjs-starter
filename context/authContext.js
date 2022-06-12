import { createContext, useContext } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { useEffect, useState } from "react";
import { auth } from "../config/firebase";

const authContext = createContext({});

export const useAuth = () => useContext(authContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const changeProfilePhoto = async (file) => {
    setLoading(true);
    const storage = getStorage();
    const storageRef = ref(storage, "images/" + user.uid);
    uploadBytes(storageRef, file).then((snapshot) => {
      getDownloadURL(ref(storage, "images/" + user.uid)).then((url) => {
        return updateProfile(auth.currentUser, {
          photoURL: url,
        })
          .then(() => {
            setLoading(false);
            return "Profile photo updated";
          })
          .catch((error) => {
            setLoading(false);
            return "Error updating profile photo";
          });
      });
    });
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  return (
    <authContext.Provider
      value={{ user, signup, login, logout, changeProfilePhoto }}
    >
      {loading ? null : children}
    </authContext.Provider>
  );
};
