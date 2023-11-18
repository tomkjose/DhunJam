import { createContext, useContext, useState, useEffect } from "react";
import { login } from "../Api/index";
import { AuthContextProps, AuthProviderProps } from "../Utils/interface";

const AuthContext = createContext<AuthContextProps>({
  user: null,
  signIn: async () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData !== null) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const signIn = async (username: string, password: string) => {
    const userData = await login(username, password);
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = { signIn, user, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
