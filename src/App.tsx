// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { register } from './services/api';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import { ProtectedRoute } from './components/Layout/ProtectedRoutes';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

function App() {
  const loggedIn = useSelector((state: RootState) => state.user.loggedIn);

  const onSignUp = async (email: string, password: string) => {
    try {
      await register({ email, password });
      window.location.replace('/');
    } catch (error) {
      console.error('Error occurred during sign up:', error);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp onSignUp={onSignUp} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
