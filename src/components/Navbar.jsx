import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Memories', path: '/gallery' },
    { name: 'Diary', path: '/quotes' },
    { name: 'Moments', path: '/videos' },
    { name: 'Birthday', path: '/birthday' },
  ];

  return (
    <nav className="bg-gradient-to-r from-pink-200 to-purple-200 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1
          className="text-3xl font-bold sm:text-3xl md:text-4xl drop-shadow-sm animate-pulse whitespace-nowrap"
          style={{ fontFamily: "'Satisfy', Elegant handwriting" }}
        >
          😎 3 Idiots Forever😎
        </h1>


        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-purple-700 text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-medium px-2 py-1 text-purple-800
                  transition-all duration-300 ease-in-out
                  ${isActive ? 'font-bold text-pink-700' : ''}

                  before:content-[''] before:absolute before:-bottom-1 before:left-0
                  before:w-0 before:h-[2px] before:bg-pink-500
                  before:transition-all before:duration-300 hover:before:w-full
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-center bg-gradient-to-r from-pink-100 to-purple-100 shadow-inner">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`relative font-medium py-1 text-purple-800
                  transition-all duration-300 ease-in-out
                  ${isActive ? 'font-bold text-pink-700' : ''}

                  before:content-[''] before:absolute before:-bottom-1 before:left-0
                  before:w-0 before:h-[2px] before:bg-pink-500
                  before:transition-all before:duration-300 hover:before:w-full
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
