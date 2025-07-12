// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  signup: (data: {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
  }) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: async () => false,
  signup: async () => false,
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('access_token'));

  useEffect(() => {
    if (token) {
      axios
        .get('http://127.0.0.1:8000/api/users/profile/', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUser(res.data))
        .catch(() => logout());
    }
  }, [token]);

  const login = async (username: string, password: string) => {
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/users/login/', { username, password });
      const accessToken = res.data.access;
      localStorage.setItem('access_token', accessToken);
      setToken(accessToken);

      const profile = await axios.get('http://127.0.0.1:8000/api/users/profile/', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      setUser(profile.data);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const signup = async (data: {
    username: string;
    email: string;
    password: string;
    confirm_password: string;
  }) => {
    try {
      await axios.post('http://127.0.0.1:8000/api/users/register/', data);
      return true;
    } catch (error) {
      console.error('Signup failed:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
