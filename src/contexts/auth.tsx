/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from 'axios';
import React, { createContext, useState, type PropsWithChildren } from 'react';

export interface User {
  login: string;
  iat?: number;
  exp?: number;
}
export interface IAuthContext {
  loggedIn: boolean;
  authToken: string | null;
  loginUser: (data: any) => Promise<string | null>;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState('');
  const loginUser = async (data: any): Promise<string | null> => {
    const instance = axios.create({
      baseURL: 'http://localhost:8080',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const userAuthToken = await instance.post('/login', data);
    const authData = userAuthToken.data;
    setAuthToken(authData);
    setLoggedIn(true);
    localStorage.setItem('token', authData as string);
    return authData;
  };

  return (
    <AuthContext.Provider value={{ loggedIn, authToken, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
