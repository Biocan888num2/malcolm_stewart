"use client";

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect, useCallback } from 'react'; // Import useState, useEffect, useCallback from React

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ 
  children, 
}: Readonly<{ 
  children: React.ReactNode; 
}>) { 

  const [isZoomed, setIsZoomed] = useState(false);
  const [lastTouchEnd, setLastTouchEnd] = useState(0);

  const handleDoubleClick = useCallback((e: MouseEvent) => { // Handle both MouseEvent and TouchEvent
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
  }, [isZoomed]);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) { // Detect double-tap with a time threshold
      handleDoubleClick(e as unknown as MouseEvent);
    }
    setLastTouchEnd(now);
  }, [lastTouchEnd, handleDoubleClick]);

  useEffect(() => {
    document.addEventListener('dblclick', handleDoubleClick as EventListener);
    document.addEventListener('touchend', handleTouchEnd as EventListener); // Attach native TouchEvent

    return () => {
      document.removeEventListener('dblclick', handleDoubleClick as EventListener);
      document.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [handleDoubleClick, handleTouchEnd]);

  return ( 
    <html lang='en'> 
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
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
