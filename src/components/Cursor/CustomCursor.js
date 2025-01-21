"use client"
import { useEffect } from 'react';


const CursorLayout = ({ children }) => {
  useEffect(() => {
    const cursorRounded = document.querySelector('.rounded-cursor');
    const cursorPointed = document.querySelector('.pointed');

    const moveCursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Calculate shadow offset based on cursor position
      const offsetX = ((mouseX - windowWidth / 2) / windowWidth) * 20; // Adjust 20 for stronger effect
      const offsetY = ((mouseY - windowHeight / 2) / windowHeight) * 20;

      if (cursorRounded && cursorPointed) {
        cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        // cursorRounded.style.boxShadow = `${-offsetX}px ${-offsetY}px 15px rgba(255, 255, 255, 0.3),
                                        //   ${offsetX}px ${offsetY}px 30px rgba(0, 0, 0, 0.6)`;
        cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div className="rounded-cursor"></div>
      <div className="pointed"></div>
      {children}
    </>
  );
};

export default CursorLayout;
