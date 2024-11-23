'use client';
import React from 'react';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-8 px-6">
          <div className="flex flex-wrap justify-between">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/terms" className="hover:underline">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="hover:underline">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="space-x-4">
                <Link href="#" className="hover:underline">
                  facebook
                </Link>
                <Link href="#" className="hover:underline">
                  twitter
                </Link>
                <Link href="#" className="hover:underline">
                  linkedin
                </Link>
                <Link href="#" className="hover:underline">
                  instagram
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-400">
            © 2024 Your Company. All rights reserved.
          </div>
        </div>
      </footer>
  )
}

