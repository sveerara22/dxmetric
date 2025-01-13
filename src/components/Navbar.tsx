import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, BarChart2, Info } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-violet-400" />
            <span className="text-white font-bold text-xl">DX Hub</span>
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/radar"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <BarChart2 className="h-4 w-4 mr-1" />
              DX Radar
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <Info className="h-4 w-4 mr-1" />
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;