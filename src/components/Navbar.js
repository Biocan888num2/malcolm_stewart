"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavBar.css'; // Import the CSS file

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar relative w-full hidden md:block">
      <ul className="flex flex-col lg:flex-row lg:space-x-4 w-full">
        <div className="lg:hidden grid grid-cols-2 gap-4 w-full">
          <div className="col-span-1 flex flex-col space-y-2">
            <li className={`navbar-item inter-extrabold ${pathname === '/about' ? 'active' : ''}`}>
              <Link href="/about">About</Link>
            </li>
            <li className={`navbar-item font-neutraface-bold ${pathname === '/javascript' ? 'active' : ''}`}>
              <Link href="/javascript">Javascript</Link>
            </li>
            <li className={`navbar-item font-droid-sans-pro ${pathname === '/android' ? 'active' : ''}`}>
              <Link href="/android">Android</Link>
            </li>
            <li className={`navbar-item font-sun-semi-bold ${pathname === '/java' ? 'active' : ''}`}>
              <Link href="/java">Java</Link>
            </li>
          </div>
          <div className="col-span-1 flex flex-col space-y-2 border-l-2 border-white pl-4">
            <li className={`navbar-item font-flux ${pathname === '/python' ? 'active' : ''}`}>
              <Link href="/python">Python</Link>
            </li>
            <li className={`navbar-item font-segoe-ui-reg ${pathname === '/vbnet' ? 'active' : ''}`}>
              <Link href="/vbnet">VB.Net</Link>
            </li>
            <li className={`navbar-item font-shary-med ${pathname === '/mysql' ? 'active' : ''}`}>
              <Link href="/mysql">MySQL</Link>
            </li>
            <li className={`navbar-item font-trade-gothic-bold ${pathname === '/deluge_zoho' ? 'active' : ''}`}>
              <Link href="/deluge_zoho">Deluge</Link>
            </li>
          </div>
        </div>
        <div className="hidden lg:flex w-full items-center space-x-4">
          <li className={`navbar-item inter-extrabold ${pathname === '/about' ? 'active' : ''}`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`navbar-item font-neutraface-bold ${pathname === '/javascript' ? 'active' : ''}`}>
            <Link href="/javascript">Javascript</Link>
          </li>
          <li className={`navbar-item font-droid-sans-pro ${pathname === '/android' ? 'active' : ''}`}>
            <Link href="/android">Android</Link>
          </li>
          <li className={`navbar-item font-sun-semi-bold ${pathname === '/java' ? 'active' : ''}`}>
            <Link href="/java">Java</Link>
          </li>
          <li className={`navbar-item font-flux ${pathname === '/python' ? 'active' : ''}`}>
            <Link href="/python">Python</Link>
          </li>
          <li className={`navbar-item font-segoe-ui-reg ${pathname === '/vbnet' ? 'active' : ''}`}>
            <Link href="/vbnet">VB.Net</Link>
          </li>
          <li className={`navbar-item font-shary-med ${pathname === '/mysql' ? 'active' : ''}`}>
            <Link href="/mysql">MySQL</Link>
          </li>
          <li className={`navbar-item font-trade-gothic-bold ${pathname === '/deluge_zoho' ? 'active' : ''}`}>
            <Link href="/deluge_zoho">Deluge</Link>
          </li>
          <div className="ml-auto flex justify-end w-full">
            <div className="navbar-label inter-extrabold">
              Andrew Warnke<br /> Junior Developer
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

