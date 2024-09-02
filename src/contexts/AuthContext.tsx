import { User } from "@models/user";
import { createContext, useContext, useEffect, useState } from "react";

export interface IAuthContext {
  user: User | null;
  isLoading: boolean;
  isAuthentificated: boolean;
}

const INITIAL_STATE: IAuthContext = {
  user: null,
  isLoading: false,
  isAuthentificated: false,
}

const AuthContext = createContext<IAuthContext>(INITIAL_STATE);

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const checkIsAuthentificated = () => {
    setIsLoading(true);

    try {
      setIsAuthentificated(true);
      setUser(null);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    if(
        localStorage.getItem("cookieFallback") === "[]" 
        || localStorage.getItem("cookieFallback") === ""
        || localStorage.getItem("cookieFallback") === "null"
        || localStorage.getItem("cookieFallback") === null
      ) {
        return;
      } else {
        checkIsAuthentificated();
      }
  },[])

  const values: IAuthContext = {
    isAuthentificated: isAuthentificated,
    isLoading: isLoading,
    user: user,
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);