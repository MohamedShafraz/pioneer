'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
// import { useRouter } from 'next/router';


const Register: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });
  const router = useRouter();

  const validateForm = () => {
    const newErrors = {
      fullName: '',
      email: '',
      phone: '',
      password: '',
    };
    let isValid = true;

    // Validate Full Name
    if (!/^[A-Za-z\s]+$/.test(fullName.trim())) {
      newErrors.fullName = 'Please enter a valid name.';
      isValid = false;
    }

    // Validate Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate Phone Number
    if (!/^\d{10}$/.test(phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
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

  const handleRegister = async () => {
    if (!validateForm()) return;

    const userData = { fullName, email, phone, password };

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (data.message) {
        alert(data.message);
        router.push('/login'); // Redirect to login page
      }
    } catch (error) {
      alert('Error during registration. Please try again.');
    }
  };

  return (
    <>
    {/* Header */}
    <header className="bg-white shadow-md">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <img
        src="https://i.ibb.co/9TmJHBZ/logo.png"
        alt="Logo"
        className="h-10"
      />
      <nav className="space-x-6">
        <a href="/" className="text-black ">
          Home
        </a>
        <a href="/about" className="text-black ">
                About Us
              </a>
        <a href="/services" className="text-black ">
          Services
        </a>
        <a href="/faq" className="text-black ">
          FAQ
        </a>
              
        <a href="/contact" className="text-black ">
          Contact
        </a>
      </nav>
      <div className="space-x-4">
        <a href="/login" className="text-black ">
          Login
        </a>
        <a
          href="/register"
          className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
        >
          Register
        </a>
      </div>
    </div>
  </header>
    <div className="flex justify-center items-center h-screen  p-6 bg-[url('/images/background.jpg')] bg-repeat bg-top bg-[length:100%]">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md text-center p-8">
        <img
          src="https://i.ibb.co/9TmJHBZ/logo.png"
          alt="The Pioneers Logo"
          className="h-16 mx-auto mb-4"
        />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Register</h1>
        <p className="text-sm text-gray-500 mb-6">
          Join us to unlock your potential with the best mentoring and guidance for your future!
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {/* Full Name */}
          <div className="relative">
            <label htmlFor="fullName" className="block text-left text-sm text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-10 py-2 text-sm focus:ring focus:ring-green-300 outline-none"
            />
         
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>

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
              className="w-full border border-gray-300 rounded-md px-10 py-2 text-sm text-black focus:ring focus:ring-green-300 outline-none"
            />
           
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label htmlFor="phone" className="block text-left text-sm text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-10 py-2 text-sm focus:ring focus:ring-green-300 outline-none"
            />
            
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
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
              className="w-full border border-gray-300 rounded-md px-10 py-2 text-sm focus:ring focus:ring-green-300 outline-none"
            />
          
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleRegister}
            className="w-full bg-green-500 text-white font-semibold text-sm py-2 rounded-md hover:bg-green-600 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Redirect to Login */}
        <button
          onClick={() => router.push('/login')}
          className="w-full bg-blue-500 text-white font-semibold text-sm py-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
        >
          Already have an account? Login
        </button>
      </div>
    </div>
    </>
  );
};

export default Register;
