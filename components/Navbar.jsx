'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = ['Home', 'About','TeckStack', 'Projects', 'Timeline', 'Contact' ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const offsets = sections.map((id) => {
        const el = document.getElementById(id);
        return el ? { id, offset: el.offsetTop } : null;
      }).filter(Boolean);

      const current = offsets.reduce((acc, section) =>
        scrollPosition >= section.offset - 100 ? section.id : acc, '');

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <nav className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${isScrolled ? 'backdrop-blur-lg bg-white/70 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-lg text-blue-700">Gaurav.dev</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition-colors duration-200 ${activeSection === id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
