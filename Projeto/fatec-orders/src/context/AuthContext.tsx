"use client";
import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext({
  bearerToken: "",
  login: (username: string, password: string) => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [bearerToken, setBearerToken] = useState<string>("teste");

  const token = Cookies.get("token");

  useEffect(() => {
    setBearerToken(Cookies.get("token") || "ABC");
  }, [token]);

  const login = (username: string, password: string) => {
    // ...

    setBearerToken(`Gerar Token`);
    Cookies.set("token", "Gerar Token");
  };

  const logout = () => {
    Cookies.remove("token");
    setBearerToken("");
  };

  return (
    <AuthContext.Provider value={{ bearerToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
