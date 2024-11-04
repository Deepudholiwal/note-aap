import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn = true; // Replace with actual login check

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold text-white">NotesHub</Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/notes" className="text-white hover:text-gray-200">Notes</Link>
          {isLoggedIn && (
            <Link to="/dashboard" className="text-white hover:text-gray-200">Dashboard</Link>
          )}
          <Link to="/login" className="text-white hover:text-gray-200">Login / Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
