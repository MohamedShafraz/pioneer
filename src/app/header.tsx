'use client';
import { auth } from './firebaseConfig';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState}  from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Props = {}

export default function Header(props: Props) {
    const [user, setUser] = useState<{ name: string } | null>(null);
  const router = useRouter();
  console.log(localStorage.getItem('user'));
  useEffect(() => {
    // Retrieve user from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Clear user details from localStorage
    localStorage.removeItem('user');
    setUser(null);
    alert('Logged out successfully!');
  };
  return (
    <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <img
            src="https://i.ibb.co/9TmJHBZ/logo.png"
            alt="Logo"
            className="h-10"
          />
          <nav className="space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-500">
              Services
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-blue-500">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </Link>
          </nav>
          <div className="space-x-4">
            {user ? (
              <>
                <span className="text-gray-700">Hello, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="text-gray-700 hover:text-blue-500">
                  Login
                </a>
                <a
                  href="/register"
                  className="text-white bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Register
                </a>
              </>
            )}
          </div>
        </div>
      </header>
  )
}