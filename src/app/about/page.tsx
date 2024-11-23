'use client';

import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[url('/images/background.jpg')] bg-repeat bg-top bg-[length:100%]">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <img
            src="https://i.ibb.co/9TmJHBZ/logo.png"
            alt="Logo"
            className="h-10"
          />
          <nav className="space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-500">
              About
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
            <a href="/login" className="text-gray-700 hover:text-blue-500">
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

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-12 px-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 mb-8">
            Empowering Advanced Level students to achieve their dreams with
            expert mentorship and guidance.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-7 bg-white p-6 shadow-md">
            To bridge the gap between academic learning and practical application
            through customized mentoring services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 leading-7 bg-white p-6 shadow-md">
            We are a dedicated group of mentors and educators helping students
            navigate their academic and career journeys.
          </p>
        </section>
        <section className="pt-10 self-center items-center"><center><img src="/images/group.jpg" /></center></section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 px-6">
          <div className="flex flex-wrap justify-between">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/feedback" className="hover:underline">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="space-x-4">
                <a href="#" className="hover:underline">
                  facebook
                </a>
                <a href="#" className="hover:underline">
                  twitter
                </a>
                <a href="#" className="hover:underline">
                  linkedin
                </a>
                <a href="#" className="hover:underline">
                  instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            © 2024 Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;