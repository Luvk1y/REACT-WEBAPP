import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};


export function useAuth(){ 
  const[currentUser, setCurrentUser] = useState(true);

  useEffect(()=>{
   const unsub = onAuthStateChanged(auth,user=>{setCurrentUser(user)})
   return unsub;
  },[])
  return currentUser;
  }