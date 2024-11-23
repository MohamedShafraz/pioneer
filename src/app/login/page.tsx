'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Header from '../header';
import { FirebaseError } from 'firebase/app';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const router = useRouter();

  // Form validation
  const validateForm = (): boolean => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    // Validate Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate Password
    if (password.trim().length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle Login
  const handleLogin = async (): Promise<void> => {
    if (!validateForm()) return;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user details to localStorage
      // localStorage.setItem('user', JSON.stringify({ name: user.displayName || email }));
      localStorage.setItem(
        'user',
        JSON.stringify({
          uid: user.uid,
          name: user.displayName || email,
          email: user.email,
        })
      );
      // console.log('Stored user:', localStorage.getItem('user'));

      alert('Login successful!');
      router.push('/'); // Redirect after successful login
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorCode: string = error.code;
        switch (errorCode) {
          case 'auth/user-not-found':
            alert('User not found. Please check your email.');
            break;
          case 'auth/wrong-password':
            alert('Invalid password. Please try again.');
            break;
          default:
            alert('An unknown error occurred. Please try again.');
        }
      } else {
        alert('An unexpected error occurred.');
      }
    } 
  };

  return (
    <>
  <Header />
    <div className="flex justify-center items-center h-screen p-6 bg-[url('/images/background.jpg')] bg-repeat bg-top bg-[length:100%]">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md text-center p-8">
        <img
          src="https://i.ibb.co/9TmJHBZ/logo.png"
          alt="The Pioneers Logo"
          className="h-16 mx-auto mb-4"
        />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Login</h1>
        <p className="text-sm text-gray-500 mb-6">
          Welcome back! Log in to continue your journey with us.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="block text-left text-sm text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-blue-300 outline-none"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-left text-sm text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-blue-300 outline-none"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white font-semibold text-sm py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Redirect to Register */}
        <button
          onClick={() => router.push('/register')}
          className="w-full bg-green-500 text-white font-semibold text-sm py-2 rounded-md mt-4 hover:bg-green-600 transition duration-300"
        >
           Don&#39;t have an account? Register
        </button>
      </div>
    </div>
    </>
  );
};

export default Login;
