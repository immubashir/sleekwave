"use client"
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Blob = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const blobRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const blob = blobRef.current;

    // Update blob position
    gsap.to(blob, {
      x: position.x - 200, // Center the blob
      y: position.y - 200,
      duration: 0.1, // Reduce duration for a more immediate response
      ease: 'none',
    });
  }, [position]);

  useEffect(() => {
    const blob = blobRef.current;

    // Infinite rotation animation
    gsap.to(blob, {
      rotation: '+=360', // Incremental rotation
      duration: 6,
      repeat: -1, // -1 indicates infinite repetition
      ease: 'linear', // Linear easing for smooth continuous rotation
    });
  }, []);

  return (
    <div
      ref={blobRef}
      className="fixed top-0 left-0 w-80 h-80 pointer-events-none flex items-center justify-center"
    >
      <div className="morphing-blob w-full h-full bg-gradient-to-b from-[#1e53ff] to-[#FED7A5] opacity-50 rounded-full"></div>
    </div>
  );
};

const Ball = () => {
  return (
    <div className="fixed -z-20 top-0 left-0 w-full h-full pointer-events-none">
      <div className="z-10 blur-2xl">
        <Blob />
      </div>
    </div>
  );
};

export default Ball;
