// src/components/Header.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#1F3B2C] py-2 sm:py-3 px-3 sm:px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo with eyebrow text style */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 text-white">
          {/* Circular badge with "A" */}
          <span className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-[#EFA83C] text-[#1F3B2C] flex items-center justify-center text-[10px] sm:text-xs md:text-sm font-extrabold flex-shrink-0">
            A
          </span>

          {/* Brand name with eyebrow text - using serif italic for "Abbey" */}
          <div className="flex flex-col leading-none">
            {/* Eyebrow text - small uppercase label */}
            <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#EFA83C] font-semibold">
              Ssenkubuge
            </span>
            {/* Main brand name with italic serif style */}
            <span className="font-bold text-base sm:text-lg md:text-xl tracking-wide flex items-baseline gap-0.5">
              <span style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }} className="italic text-white">
                Abbey
              </span>
              <span className="text-[#EFA83C]">.</span>
            </span>
          </div>
        </Link>

        <button 
          className="md:hidden p-1 sm:p-1.5 text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <i className="fa-solid fa-xmark text-xl sm:text-2xl"></i> : <i className="fa-solid fa-bars text-xl sm:text-2xl"></i>}
        </button>

        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-0 right-0 bg-[#1F3B2C] md:bg-transparent p-4 sm:p-5 md:p-0 shadow-lg md:shadow-none`}>
          <ul className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-8 text-[0.75rem] sm:text-[0.8rem] md:text-sm font-medium">
            {navLinks.map((link) => {
              if (link.path === '/about') {
                return (
                  <li key={link.path}>
                    <a
                      href="#about"
                      onClick={(e) => handleScrollToSection(e, 'about')}
                      className="text-[#D9DFD7] hover:text-[#EFA83C] transition cursor-pointer block md:inline py-1 md:py-0"
                    >
                      {link.name}
                    </a>
                  </li>
                );
              }
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`${location.pathname === link.path ? 'text-[#EFA83C]' : 'text-[#D9DFD7]'} hover:text-[#EFA83C] transition block md:inline py-1 md:py-0`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <a 
          href="#contact" 
          className="hidden md:block bg-white text-[#1F3B2C] px-3 sm:px-4 lg:px-6 py-1 sm:py-1.5 rounded-full font-semibold text-[0.65rem] sm:text-[0.7rem] md:text-sm hover:bg-[#EFA83C] hover:text-white transition"
          onClick={handleContactClick}
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}