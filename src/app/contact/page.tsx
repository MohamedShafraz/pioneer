'use client';

import React from 'react';

const Contact: React.FC = () => {
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
            <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-500">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-500">Services</a>
            <a href="/faq" className="text-gray-700 hover:text-blue-500">FAQ</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-500">Contact</a>
          </nav>
          <div className="space-x-4">
            <a href="/login" className="text-gray-700 hover:text-blue-500">Login</a>
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
      <section className=" text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="text-lg mt-4">
            Have questions or need help? We’re here to assist you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <main className="container mx-auto py-12 px-6">
        <section className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Get in Touch
          </h2>
          <form action="/api/contact" method="POST" className="space-y-6">
            <div className="relative">
              <label
                htmlFor="name"
                className="absolute top-2 left-3 text-gray-500 text-sm transition-all pointer-events-none"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                required
                className="block w-full border border-gray-300 rounded-lg px-3 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="absolute top-2 left-3 text-gray-500 text-sm transition-all pointer-events-none"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" "
                required
                className="block w-full border border-gray-300 rounded-lg px-3 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className="absolute top-2 left-3 text-gray-500 text-sm transition-all pointer-events-none"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder=" "
                required
                className="block w-full border border-gray-300 rounded-lg px-3 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>


      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 px-6">
          <div className="flex flex-wrap justify-between">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/services" className="hover:underline">Services</a></li>
                <li><a href="/faq" className="hover:underline">FAQ</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Resources</h3>
              <ul className="space-y-1">
                <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/feedback" className="hover:underline">Feedback</a></li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="space-x-4">
                <a href="#" className="hover:underline">Facebook</a>
                <a href="#" className="hover:underline">Twitter</a>
                <a href="#" className="hover:underline">LinkedIn</a>
                <a href="#" className="hover:underline">Instagram</a>
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

export default Contact;
