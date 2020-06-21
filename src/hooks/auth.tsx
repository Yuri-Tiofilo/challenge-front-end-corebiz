import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  avatar_url: string;
  name: string;
  email: string;
}
interface RegisterCredentials {
  email: string;
  name: string;
}

interface AuthContextData {
  registerUser(data: RegisterCredentials): void;
  sucessSignIn: boolean;
}
interface AuthState {
  token: string;
  user: User;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [sucessSignIn, setSucessSignIn] = useState<boolean>(false);

  const registerUser = useCallback(async ({ email, name }) => {
    try {
      await api.post('/api/v1/newsletter', {
        email,
        name,
      });

      setSucessSignIn(true);
    } catch (err) {
      setSucessSignIn(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ registerUser, sucessSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
export { AuthProvider, useAuth };
