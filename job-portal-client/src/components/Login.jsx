import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from '../Firebase/firebase.config';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('User:', user); // Handle the user info or use it for further actions
      navigate('/'); // Redirect to the homepage after successful login
    } catch (error) {
      console.error('Error:', error);
      setError('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-teal-400 to-blue-500">
      <div className="max-w-md w-full p-10 bg-yellow-300 rounded-xl shadow-lg">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">Welcome Back!</h1>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        <button
          className={`w-full px-6 py-3 text-gray-800 font-semibold rounded-lg border-2 border-black ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'} transition duration-300 ease-in-out`}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </button>
        <p className="text-center text-gray-700 mt-6">
          Don't have an account? <a href="/signup" className="text-teal-500 font-semibold border-b-2 border-black">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
