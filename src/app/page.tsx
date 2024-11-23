'use client';
import React, { useEffect, useState}  from 'react';
import { useRouter } from 'next/navigation';
import Header from './header';
import Footer from './footer';


const Home: React.FC = () => {
  const [, setUser] = useState<{ name: string } | null>(null);
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
    <div className="min-h-screen flex flex-col justify-between bg-[url('/images/background.jpg')] bg-repeat bg-top bg-[length:100%]">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'url("/images/home.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold text-center px-4">
            Welcome to The Pioneers
          </h1>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="container mx-auto py-8 px-6">
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="bg-none rounded-lg p-6 mb-6 md:mb-0 flex-1">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Service & Benefits
            </h2>
            <p className="text-gray-600 bg-white p-6 shadow-md">
             Welcome to the heart of our project, where we provide tailored guidance for Advanced Level (A/L) students, whether you’re on the university track or exploring alternative pathways. We understand the importance of finding the right direction and developing essential skills to confidently navigate the future. Our team of mentors is dedicated to helping you unlock your potential, set goals, and take steps toward a meaningful career.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Areas of Guidance
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
      1. Career Exploration and Guidance
    </h3>
    <ul className="text-gray-600 bg-white p-6 shadow-md  pl-6">
      <li>Discover a wide range of career options, from traditional university paths to vocational and professional alternatives.</li>
      <li>Explore emerging industries and roles with the support of mentors who can offer real-world advice.</li>
    </ul>
  </div>
  <div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      2. Skills Development
    </h3>
    <ul className="text-gray-600 bg-white p-6 shadow-md  pl-6">
      <li>Gain practical skills that make you job-ready, including communication, leadership, and critical thinking.</li>
      <li>Our mentors will guide you through personalized exercises and provide resources to strengthen your abilities.</li>
    </ul>
  </div>
  <div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      3. Academic Counselling and University Pathways
    </h3>
    <ul className="text-gray-600 bg-white p-6 shadow-md  pl-6">
      <li>For students seeking university admissions, our mentors offer guidance on application processes, course selection, and preparation.</li>
      <li>We also assist with identifying scholarship opportunities and creating academic plans to meet admission requirements.</li>
    </ul>
  </div>
  <div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      4. Alternative Pathways and Vocational Options
    </h3>
    <ul className="text-gray-600 bg-white p-6 shadow-md  pl-6">
      <li>If university isn’t the right fit, we provide information on technical and vocational education, entrepreneurship, and industry certifications.</li>
      <li>Mentors will help you assess your options and understand the qualifications needed to pursue alternative careers.</li>
    </ul>
  </div>
  <div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      5. Personal Development and Goal Setting
    </h3>
    <ul className="text-gray-600 bg-white p-6 shadow-md  pl-6">
      <li>Build confidence and a sense of purpose through structured goal-setting activities.</li>
      <li>Learn effective time management, prioritization, and other personal skills that are essential for success.</li>
    </ul>
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
            <p className="text-gray-600 bg-white p-6 shadow-md">
              Receive individualized support with a mentor who understands your
              unique needs, challenges, and ambitions.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
