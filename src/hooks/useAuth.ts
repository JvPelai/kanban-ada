import { useContext } from 'react';
import AuthContext, { type IAuthContext } from '../contexts/auth';

export const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);
  return context;
};
