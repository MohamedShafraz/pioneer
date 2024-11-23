'use client';
import { auth } from '../firebaseConfig';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState}  from 'react';
import { useRouter } from 'next/navigation';


const Home: React.FC = () => {
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
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <img src="https://i.ibb.co/9TmJHBZ/logo.png" alt="Logo" className="h-10" />
          <nav className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="/services" className="text-gray-700 hover:text-blue-500">
              Services
            </a>
            <a href="/faq" className="text-gray-700 hover:text-blue-500">
              FAQ
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
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

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("https://via.placeholder.com/1920x600")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold text-center px-4">
            Welcome to The Pioneers
          </h1>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="container mx-auto py-8 px-6">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="bg-white shadow-md rounded-lg p-6 mb-6 md:mb-0 flex-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Service & Benefits
            </h2>
            <p className="text-gray-600">
              Discover how our mentoring platform can help you achieve your
              academic and career goals. Explore the benefits of our tailored
              guidance programs.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Mentoring Options and Areas of Guidance
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Welcome to the heart of our project, where we provide tailored
            guidance for Advanced Level (A/L) students, whether you’re on the
            university track or exploring alternative pathways.
          </p>

          {/* Mentoring Areas */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Career Exploration and Guidance
              </h3>
              <p className="text-gray-600">
                Discover a wide range of career options, from traditional
                university paths to vocational and professional alternatives.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Skills Development
              </h3>
              <p className="text-gray-600">
                Gain practical skills that make you job-ready, including
                communication, leadership, and critical thinking.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Academic Counselling and University Pathways
              </h3>
              <p className="text-gray-600">
                Get guidance on application processes, course selection, and
                preparation for university admissions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Alternative Pathways and Vocational Options
              </h3>
              <p className="text-gray-600">
                Explore technical and vocational education, entrepreneurship,
                and industry certifications.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Personal Development and Goal Setting
              </h3>
              <p className="text-gray-600">
                Build confidence and learn effective time management through
                structured activities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mentoring Options */}
      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Mentoring Options
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              One-on-One Mentoring
            </h3>
            <p className="text-gray-600">
              Receive individualized support with a mentor who understands your
              unique needs, challenges, and ambitions.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 px-6">
          <div className="text-center text-sm text-gray-400">
            © 2024 Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
