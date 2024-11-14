import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string, name: string) => void;
}

interface User {
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // In a real app, you would validate credentials with an API
    setIsAuthenticated(true);
    setUser({ name: 'User Name', email });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const register = (email: string, password: string, name: string) => {
    // In a real app, you would send this data to an API
    setIsAuthenticated(true);
    setUser({ name, email });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}