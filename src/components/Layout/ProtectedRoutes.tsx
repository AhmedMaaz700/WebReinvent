import { ReactNode } from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';
import SignIn from '../../pages/SignIn';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const loggedIn = useSelector((state: RootState) => 
    state?.user?.loggedIn
  );
console.log('loggedinxxxxx', loggedIn);

  if (!loggedIn) {
    return <SignIn />;
  }

  return <>{children}</>;
};
