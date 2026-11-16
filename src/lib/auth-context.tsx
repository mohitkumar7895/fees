"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { authApi } from "@/lib/api";

interface User {
  id: string;
  name: string;
  email: string;
  role: "super_admin" | "admin";
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isSuperAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const publicPaths = [
  "/",
  "/login",
  "/about",
  "/admission",
  "/blog",
  "/classes",
  "/contact",
  "/gallery",
  "/teachers",
];

const isPublicPath = (path: string | null) => {
  if (!path) return false;
  return publicPaths.some((p) => path === p || (p !== "/" && path.startsWith(p + "/")));
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);

    const handleUnauthorized = () => {
      setToken(null);
      setUser(null);
      router.push("/login");
    };
    window.addEventListener("auth:unauthorized", handleUnauthorized);
    return () => window.removeEventListener("auth:unauthorized", handleUnauthorized);
  }, [router]);

  useEffect(() => {
    if (!loading) {
      if (!token && pathname && !isPublicPath(pathname)) {
        router.push("/login");
      } else if (token && pathname === "/login") {
        router.push("/dashboard");
      }
    }
  }, [loading, token, pathname, router]);

  const login = async (email: string, password: string) => {
    const res = await authApi.login(email, password) as { data: { token: string; user: User } };
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    setToken(res.data.token);
    setUser(res.data.user);
    router.push("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        isSuperAdmin: user?.role === "super_admin",
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
