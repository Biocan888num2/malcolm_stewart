"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavBar.css'; // Import the CSS file

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = () => {
    setIsOpen(false); // Close the menu after an item is clicked
  };

  return (
    <div className="relative md:hidden"> {/* Show only on mobile view */}
      <button
        className="hamburger-button text-3xl"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        ☰
      </button>
      {isOpen && (
        <div className="hamburger-menu absolute bottom-full left-0 z-50">
          <ul className="flex flex-col space-y-2 justify-content-start text-left"> {/* Left align text */}
            <li className={`navbar-item inter-extrabold ${pathname === '/about' ? 'active' : ''}`} onClick={handleItemClick}>
              <Link href="/about">About</Link>
            </li>
            <li className={`navbar-item font-neutraface-bold ${pathname === '/javascript' ? 'active' : ''}`} onClick={handleItemClick}>
              <Link href="/javascript">Javascript</Link>
            </li>
            <li className={`navbar-item font-droid-sans-pro ${pathname === '/android' ? 'active' : ''}`} onClick={handleItemClick}>
              <Link href="/android">Android</Link>
            </li>
            <li className={`navbar-item font-sun-semi-bold ${pathname === '/java' ? 'active' : ''}`} onClick={handleItemClick}>
              <Link href="/java">Java</Link>
            </li>
            <li className={`navbar-item font-flux ${pathname === '/python' ? 'active' : ''}`} onClick={handleItemClick}>
              <Link href="/python">Python</Link>
            </li>
            <li className={`navbar-item font-segoe-ui-reg ${pathname === '/vbnet' ? 'active' : ''}`} onClick={handleItemClick}>
              <Link href="/vbnet">VB.Net</Link>
            </li>
            <li className={`navbar-item font-shary-med ${pathname === '/mysql' ? 'active' : ''}`} onClick={handleItemClick}>
              <Link href="/mysql">MySQL</Link>
            </li>
            <li className={`navbar-item font-trade-gothic-bold ${pathname === '/deluge_zoho' ? 'active' : ''}`} onClick={handleItemClick}>
              <Link href="/deluge_zoho">Deluge</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
