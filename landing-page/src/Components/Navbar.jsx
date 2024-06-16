"use client";
import Link from 'next/link'
import { useState } from 'react'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
  return (
     <>
     <nav className="bg-black text-white">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="text-2xl font-bold">propelo</div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <div className="relative group">
            <button className="hover:text-gray-400">Use Cases</button>
            <div className="absolute hidden group-hover:block bg-black text-white mt-2 rounded shadow-lg">
              <Link href="/use-case-1" className="block px-4 py-2 hover:bg-gray-700">Use Case 1</Link>
              <Link href="/use-case-2" className="block px-4 py-2 hover:bg-gray-700">Use Case 2</Link>
            </div>
          </div>
          <Link href="/xponent" className="hover:text-gray-400">Xponent</Link>
          <Link href="/resources" className="hover:text-gray-400">Resources</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
        </div>
        <div className="hidden md:block">
          <Link href="/free-trial" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Free Trial</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
          <Link href="/use-case-1" className="block px-4 py-2 hover:bg-gray-700">Use Case 1</Link>
          <Link href="/use-case-2" className="block px-4 py-2 hover:bg-gray-700">Use Case 2</Link>
          <Link href="/xponent" className="block px-4 py-2 hover:bg-gray-700">Xponent</Link>
          <Link href="/resources" className="block px-4 py-2 hover:bg-gray-700">Resources</Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-700">About</Link>
          <Link href="/free-trial" className="block bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 mt-2 mx-4">Free Trial</Link>
        </div>
      )}
    </nav>
     </>
  )
}

export default Navbar