// src/context/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";

interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
}

interface IAuthContext {
  user: IUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: {
    name: string;
    email: string;
    password: string;
  }) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Load current user on mount
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        try {
          const res = await api.get<{ data: IUser }>("/auth/me");
          setUser(res.data.data);
        } catch {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post<{
      data: {
        user: IUser;
        tokens: { accessToken: string; refreshToken: string };
      };
    }>("/auth/login", { email, password });

    const { accessToken, refreshToken } = res.data.data.tokens;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    setUser(res.data.data.user);
    navigate("/dashboard");
  };

  const register = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    const res = await api.post<{
      data: {
        user: IUser;
        tokens: { accessToken: string; refreshToken: string };
      };
    }>("/auth/register", {
      name,
      email,
      password,
      firstName: name.split(" ")[0] || "",
      lastName: name.split(" ")[1] || "",
    });

    const { accessToken, refreshToken } = res.data.data.tokens;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    setUser(res.data.data.user);
    navigate("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
