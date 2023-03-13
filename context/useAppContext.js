import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useContext, createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { auth } from "../firebase/client";
export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(false);
  const router = useRouter();


  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      setUser(data);
      setInitializing(false);
    });

    return () => {};
  }, []);

  

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if(!user) {
      router.replace("/dashboard/iniciar-sesion")
    }else{
      router.replace("/dashboard");
    }
  }, [user]);

  const values = {
    user,
    initializing,
    setInitializing,
    setUser,
    logout,
    
    
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("Context doesn't exist");
  return context;
}

export default useAppContext;
