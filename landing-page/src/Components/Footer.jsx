'use client';
import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-10 md:py-20">
      <div className="container mx-auto lg:px-8 px-4  flex flex-col md:flex-row space-x-0 md:space-x-28 md:py-4 content-center space-y-10 md:space-y-0">
        <div>
        <div className="text-2xl font-bold text-white">propelo</div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-28 space-x-0 space-y-10 md:space-y-0">
        <div>
            <h3 className="text-gray-500 uppercase mb-4 text-sm sm:text-base md:text-lg lg:text-xl">Sitemap</h3>
            <ul className="space-y-2">
            <li>
      <Link href="/publisher-terms" passHref className='text-gray-500 hover:text-white text-400 text-xs md:text-sm lg:text-base'>
        Publisher Terms 
      </Link>
    </li>
    <li>
      <Link href="/terms-of-service" passHref className='text-gray-500 hover:text-white text-400 text-xs md:text-sm lg:text-base'>
         Terms of Service 
      </Link>
    </li>
    <li>
      <Link href="/privacy-policy" passHref className='text-gray-500 hover:text-white text-400 text-xs md:text-sm lg:text-base'>
        Privacy Policy
      </Link>
    </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-500 uppercase mb-4">Contact</h3>
            <ul className="space-y-2">
            <li>
            <Link href="mailto:sales@propelo.ai" className="text-pink-600 mb-2 text-xs md:text-sm lg:text-base" passHref>sales@propelo.ai </Link>
            </li>
    <li>
      <Link href="https://www.google.com/maps/search/?api=1&query=700+S+Bernardo+Avenue,+Ste+103,+Sunnyvale,+CA+94087" className="text-white text-xs md:text-sm lg:text-base" passHref> 700 S Bernardo Avenue<br />Ste 103<br />
          Sunnyvale, CA 94087</Link>
      </li>
      </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <ul className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-10 mb-6">
        <li>
      <Link href="/publisher-terms" passHref className="text-gray-500 hover:text-white text-xs md:text-sm lg:text-base">
        Publisher Terms
      </Link>
    </li>
    <li>
      <Link href="/terms-of-service" passHref className="text-gray-500 hover:text-white text-xs md:text-sm lg:text-base">
        Terms of Service 
      </Link>
    </li>
    <li>
      <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-xs md:text-sm lg:text-base" passHref>
        Privacy Policy 
      </Link>
    </li>
        </ul>
        <div className="flex justify-center space-x-6 text-gray-500">
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaLinkedin /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
