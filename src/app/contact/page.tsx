'use client';

import React from 'react';
import Header from '../header';
import Link from 'next/link';
import Footer from '../footer';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[url('/images/background.jpg')] bg-repeat bg-top bg-[length:100%]">
      {/* Header */}
      <Header />

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
              className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
