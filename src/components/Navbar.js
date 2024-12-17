"use client";

// import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavBar.css'; // Import the CSS file

const Navbar = () => {
  // const [activeIndex, setActiveIndex] = useState(null);
  const pathname = usePathname();

  // const handleClick = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <nav className="navbar relative w-full">
      <ul className="flex flex-col md:flex-row md:space-x-4 w-full">
        <div className="md:hidden grid grid-cols-2 gap-4 w-full">
          <div className="col-span-1 flex flex-col space-y-2">
            <li
              className={`navbar-item inter-extrabold ${pathname === '/about' ? 'active' : ''}`}
              // onClick={() => handleClick(0)}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`navbar-item font-neutraface-bold ${pathname === '/javascript' ? 'active' : ''}`}
              // onClick={() => handleClick(1)}
            >
              <Link href="/javascript">Javascript</Link>
            </li>
            <li
              className={`navbar-item font-droid-sans-pro ${pathname === '/android' ? 'active' : ''}`}
              // onClick={() => handleClick(2)}
            >
              <Link href="/android">Android</Link>
            </li>
            <li
              className={`navbar-item font-sun-semi-bold ${pathname === '/java' ? 'active' : ''}`}
              // onClick={() => handleClick(3)}
            >
              <Link href="/java">Java</Link>
            </li>
          </div>
          <div className="col-span-1 flex flex-col space-y-2 border-l-2 border-white pl-4">
            <li
              className={`navbar-item font-flux ${pathname === '/python' ? 'active' : ''}`}
              // onClick={() => handleClick(4)}
            >
              <Link href="/python">Python</Link>
            </li>
            <li
              className={`navbar-item font-segoe-ui-reg ${pathname === '/vbnet' ? 'active' : ''}`}
              // onClick={() => handleClick(5)}
            >
              <Link href="/vbnet">VB.Net</Link>
            </li>
            <li
              className={`navbar-item font-shary-med ${pathname === '/mysql' ? 'active' : ''}`}
              // onClick={() => handleClick(6)}
            >
              <Link href="/mysql">MySQL</Link>
            </li>
            <li
              className={`navbar-item font-trade-gothic-bold ${pathname === '/deluge_zoho' ? 'active' : ''}`}
              // onClick={() => handleClick(7)}
            >
              <Link href="/deluge_zoho">Deluge(ZOHO)</Link>
            </li>
          </div>
        </div>
        <div className="hidden md:flex w-full items-center space-x-4">
          <li
            className={`navbar-item inter-extrabold ${pathname === '/about' ? 'active' : ''}`}
            // onClick={() => handleClick(0)}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`navbar-item font-neutraface-bold ${pathname === '/javascript' ? 'active' : ''}`}
            // onClick={() => handleClick(1)}
          >
            <Link href="/javascript">Javascript</Link>
          </li>
          <li
            className={`navbar-item font-droid-sans-pro ${pathname === '/android' ? 'active' : ''}`}
            // onClick={() => handleClick(2)}
          >
            <Link href="/android">Android</Link>
          </li>
          <li
            className={`navbar-item font-sun-semi-bold ${pathname === '/java' ? 'active' : ''}`}
            // onClick={() => handleClick(3)}
          >
            <Link href="/java">Java</Link>
          </li>
          <li
            className={`navbar-item font-flux ${pathname === '/python' ? 'active' : ''}`}
            // onClick={() => handleClick(4)}
          >
            <Link href="/python">Python</Link>
          </li>
          <li
            className={`navbar-item font-segoe-ui-reg ${pathname === '/vbnet' ? 'active' : ''}`}
            // onClick={() => handleClick(5)}
          >
            <Link href="/vbnet">VB.Net</Link>
          </li>
          <li
            className={`navbar-item font-shary-med ${pathname === '/mysql' ? 'active' : ''}`}
            // onClick={() => handleClick(6)}
          >
            <Link href="/mysql">MySQL</Link>
          </li>
          <li
            className={`navbar-item font-trade-gothic-bold ${pathname === '/deluge_zoho' ? 'active' : ''}`}
            // onClick={() => handleClick(7)}
          >
            <Link href="/deluge_zoho">Deluge(ZOHO)</Link>
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

