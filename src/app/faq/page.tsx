'use client';

import React from 'react';
import Header from '../header';
import Link from 'next/link';
import Footer from '../footer';

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[url('/images/background.jpg')] bg-repeat bg-top bg-[length:100%]">

      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-12 px-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Answers to common questions about The Pioneers and our services.
          </p>
        </section>

        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              What is The Pioneers?
            </h2>
            <p className="text-gray-600 bg-white p-6 shadow-md  pl-6">
              The Pioneers is a mentoring platform designed to help Advanced
              Level students in Sri Lanka achieve their academic and career
              goals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              How do I register for a mentorship program?
            </h2>
            <p className="text-gray-600 bg-white p-6 shadow-md  pl-6">
              Visit our registration page and fill out the form to get started.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Are your services free?
            </h2>
            <p className="text-gray-600 bg-white p-6 shadow-md  pl-6">
              Some services are free, while others require a fee. Check the
              respective service pages for details.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FAQ;
