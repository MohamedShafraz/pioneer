'use client';

import React from 'react';
import Header from '../header';
import Footer from '../footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[url('/images/background.jpg')] bg-repeat bg-top bg-[length:100%]">
      {/* Header */}
      <Header />

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
      <Footer />
    </div>
  );
};

export default About;
