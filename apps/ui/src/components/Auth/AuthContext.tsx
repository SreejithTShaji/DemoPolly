
import { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
  user: any;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  
};

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
const [loading, setLoading] = useState(true);

  // Fetch user from backend on initial load (cookie auto-sent)
  useEffect(() => {
   fetchMe();
  }, []);

 const login = async (email: string, password: string) => {
  await fetch("http://localhost:4000/auth/login", {
    method: "POST",
    credentials: "include", // 🔑 send cookie
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  await fetchMe();
};

const fetchMe = async () => {
  const res = await fetch("http://localhost:4000/auth/me", {
    credentials: "include", // 🔑 send cookie
  });
  const data = await res.json();
  setUser(data.user);
  setLoading(false);
};

const logout = async () => {
  await fetch("http://localhost:4000/auth/logout", {
    method: "POST",
    credentials: "include",
  });
  setUser(null);
};

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
