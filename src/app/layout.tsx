"use client";

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react'; // Import useState and useEffect from React

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

function RootLayout({ 
  children, 
}: Readonly<{ 
  children: React.ReactNode; 
}>) { 

  const [isZoomed, setIsZoomed] = useState(false);
  const [lastTouchEnd, setLastTouchEnd] = useState(0);

  const handleDoubleClick = (e: MouseEvent | TouchEvent) => { // Handle both MouseEvent and TouchEvent
    try {
      if (!isZoomed) {
        document.body.style.transform = 'scale(1.5)'; // Adjust zoom scale as necessary
        document.body.style.transformOrigin = 'center center';
      } else {
        document.body.style.transform = 'scale(1)';
      }
      setIsZoomed(!isZoomed);
    } catch (error) {
      console.error('Error during double-click zoom:', error);
    }
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) { // Detect double-tap with a time threshold
      handleDoubleClick(e);
    }
    setLastTouchEnd(now);
  };

  useEffect(() => {
    document.addEventListener('dblclick', handleDoubleClick); // Attach native MouseEvent
    document.addEventListener('touchend', handleTouchEnd); // Attach native TouchEvent

    return () => {
      document.removeEventListener('dblclick', handleDoubleClick);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isZoomed, lastTouchEnd]);

  return ( 
    <html lang='en'> 
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
        onDoubleClick={(e) => handleDoubleClick(e.nativeEvent as MouseEvent)} // Handle React event and convert to native
        onTouchEnd={(e) => handleTouchEnd(e.nativeEvent as TouchEvent)} // Handle React event and convert to native
      > 
        <Navbar /> 
        <main className='flex-grow pb-16'> 
          {children} 
        </main> 
        <Footer /> 
      </body> 
    </html> 
  ); 
}

export default RootLayout;
