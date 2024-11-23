'use client';

import React, { useState } from "react";
import Image from 'next/image';
const profiles = {
  bio: [
    {
      name: "Dr. M.R.S.Rahmath",
      qualifications: "MBBS(Col)",
      position: "Base Hospital – Puttalam",
      image:"/images/unknown.jpg",
    },
    {
      name: "M. N. Amna",
      qualifications: "Bsc in Biological Sciences",
      position: "Southeastern University of Sri Lanka",
      image:"/images/unknown.jpg",
    },
  ],
  maths: [
    {
      name: "F Afras Ahamed",
      qualifications:
        "BSc(Hons) Engineering (University of Peradeniya)",
      position: "",
      image:"/images/Afras.jpg",
    },
    {
      name: "Mohamed Fowzer Ahamed Fath-hi",
      qualifications:
        "BSc(Hons) in Quantity Surverying (University of Moratuwa)",
      position: "Working at F2H Surveyors(Pvt) Ltd",
      image:"/images/Fowzer.jpeg",
    },
  ],
  commerce: [
    {
      name: "Saleem Muhammad Afkan",
      qualifications:
        "AAT, HNDA, BSc Applied Accounting SPC in Business Analytics, CA SL(R)",
      position: "",
      image:"/images/Afkan.JPG",
    },
    {
      name: "Azeem Ziyad",
      qualifications: "BBA Special In Accounting, CA(Complete)",
      position: "KPMG - Saudi Arabia (Riyadh)",
      image:"/images/Azeem.jpeg",
    },
  ],
  "e-tech": [
    {
      name: "M. C. M. Sajath",
      qualifications: "B.E.T. (Hons) in Material Science & Technology (RUSL)",
      position: "",
      image:"/images/Sajath.jpeg",
    },
    {
      name: "ENG. Shaifur Rahman Sadhaka",
      qualifications: "B.Eng.Tech(Hons), BSc Psy(R)",
      position: "",
      image:"/images/Shaifur.jpeg",
    },
  ],
  "b-tech": [
    {
      name: "Mohamed Nawshad Ayman Fathima",
      qualifications:
        "Undergraduate- University of Colombo, Bachelor of Information and Communication Technology (Hons)",
      position: "",
      image:"/images/unknown.jpg",
    },
    {
      name: "MR. Fathima Asmath Banu",
      qualifications: "BBST (Hons. in Agri Tech)",
      position: "South Eastern University of Sri Lanka",
      image:"/images/unknown.jpg",
    },
  ],
  arts: [
    {
      name: "Assihk Mufas",
      qualifications: "Bachelor of Arts (R) (EUSL)",
      position: "",
      image:"/images/Assihk.jpeg",
    },
    {
      name: "A. AMJATH HUSAIN",
      qualifications: "LLB(HONS) UOC, Dip in HRM UOC (R)",
      position: "",
      image:"/images/AMJATH.jpeg",
    },
  ],
};

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("bio");
  const [activeProfileIndex, setActiveProfileIndex] = useState<number | null>(null);
  type StreamKey = keyof typeof profiles;

  const renderProfiles = (stream: StreamKey) => {
    return profiles[stream].map((profile, index) => (
      <div key={index} className="bg-white shadow-lg rounded-lg p-4">
        
        <div key={index} className="bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 flex-col">
           {/* Image (Right Side) */}
  <div className="flex-shrink-0">
    <Image
      src={profile.image} 
      alt={profile.name}
      width={196} 
      height={196}
      className="object-cover"
    />
  </div>
  {/* Text Content (Left Side) */}
  <div className="flex-1">
    <h3 className="font-semibold text-xl text-gray-800">{profile.name}</h3>
    <p className="text-gray-600">{profile.qualifications}</p>
    <p className="text-sm italic text-gray-500">{profile.position}</p>
  </div>

 
</div>

        {/* Book Now Button */}
        <button
          onClick={() => setActiveProfileIndex(activeProfileIndex === index ? null : index)} // Toggle form for clicked profile
          className={`mt-4 px-4 py-2 rounded-md ${
            activeProfileIndex === index
              ? "bg-blue-600 text-white"
              : "bg-green-500 text-white hover:bg-blue-600"
          }`}
        >
          {activeProfileIndex === index ? "Close" : "Book now"}
        </button>
  
        {/* Show form only for the active profile */}
        {activeProfileIndex === index && (
          <div className="mt-6 bg-gray-100 p-6 rounded-lg shadow-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Pay for Career Consultation</h4>
            <p className="text-blue-700 font-bold text-xl">Rs. 500.00</p>
            {/* Registration Form */}
            <form className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-600" htmlFor={`first-name-${index}`}>
                    First Name:
                  </label>
                  <input
                    type="text"
                    id={`first-name-${index}`}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-600" htmlFor={`last-name-${index}`}>
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id={`last-name-${index}`}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <label className="block text-gray-600" htmlFor={`email-${index}`}>
                    Email:
                  </label>
                  <input
                    type="email"
                    id={`email-${index}`}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-gray-600" htmlFor={`phone-${index}`}>
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id={`phone-${index}`}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-gray-600" htmlFor={`address-${index}`}>
                    Address:
                  </label>
                  <input
                    type="text"
                    id={`address-${index}`}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Enter your address"
                  />
                </div>
                <div>
                  <label className="block text-gray-600" htmlFor={`city-${index}`}>
                    City:
                  </label>
                  <input
                    type="text"
                    id={`city-${index}`}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-6 bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
              >
                Next
              </button>
            </form>
          </div>
        )}
      </div>
    ));
  };
  
  

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
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
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore the wide range of services we offer to help students excel in
            their academic and professional journeys.
          </p>
        </section>

        <section className="tabs-container flex justify-center space-x-4 mb-6">
          {Object.keys(profiles).map((stream) => (
            <button
              key={stream}
              onClick={() => setActiveTab(stream)}
              className={`tab-button px-6 py-2 rounded-md text-sm font-semibold transition duration-300 ${
                activeTab === stream
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {stream.toUpperCase()}
            </button>
          ))}
        </section>

        <section className="profiles-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {renderProfiles(activeTab as StreamKey)}
        </section>
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
                  Facebook
                </a>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
                <a href="#" className="hover:underline">
                  Instagram
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

export default ServicesPage;
