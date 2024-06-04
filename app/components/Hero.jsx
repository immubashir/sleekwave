"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Hero = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;
    const initLocomotiveScroll = async () => {
      const originalConsoleError = console.error;
      console.error = () => {};

      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        locomotiveScroll = new LocomotiveScroll({
          el: scrollRef.current,
          smooth: true,
        });

        if (typeof locomotiveScroll.on === 'function') {
          locomotiveScroll.on('scroll', (args) => {
            document.dispatchEvent(new CustomEvent('locomotive-scroll', { detail: args }));
          });
        }
      } catch (error) {
        // Handle error
      } finally {
        console.error = originalConsoleError; // Restore original console.error
      }
    };

    initLocomotiveScroll();

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className='h-screen flex flex-col sm:items-start sm:justify-center items-center justify-center gap-8 p-4 lg:p-0'>
      <h1 className='text-5xl text-center sm:text-left sm:text-5xl poetsen-one-regular'>
        Transforming Your <span className='text-[#FED7A5]'>Digital Experience</span>
      </h1>
      <p className='montserrat-medium text-md sm:text-lg text-center sm:text-left'>
        Elevate your digital presence and captivate your audience like never before.<br /><span className='hidden sm:flex'>Unlock the potential of intuitive design with SleekWave.</span>
      </p>
      {/* Images */}
      <Image
        data-scroll
        data-scroll-speed="0.2"
        src="/assets/Mockup_img.png"
        width={300} // Replace with actual width of the image
        height={400} // Replace with actual height of the image
        className='-z-10 absolute h-40 sm:h-80 max-sm:hidden object-cover rounded-3xl right-8 sm:right-32 shadow-md shadow-black/40'
        alt="Mockup image"
      />
      <Image
        data-scroll
        data-scroll-speed="0.4"
        src="/assets/Mockup_img2.png"
        width={300} // Replace with actual width of the image
        height={400} // Replace with actual height of the image
        className='-z-10 absolute h-40 sm:h-80 max-sm:hidden object-cover rounded-3xl right-4 sm:right-20 bottom-12 shadow-md shadow-black/40'
        alt="Mockup image 2"
      />
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-20'>
        <button className='relative border-2 border-gray-400 hover:border-[#C94A93] hover:scale-[1.18] transition-all duration-500 rounded-full group overflow-hidden'>
          <h1 className="sm:px-6 sm:py-3 px-4 py-3 transition-all duration-300 text-md">Get Started →</h1>
          <div className='absolute -z-10 bg-pink-300 h-48 w-48 sm:h-36 sm:w-36 rounded-full group-hover:scale-[2] transition-all group-hover:duration-[0.3s] duration-500' />
          <div className='-z-10 ml-4 absolute bg-[#C94A93] h-32 w-32 sm:h-28 sm:w-28 rounded-full group-hover:scale-[3] transition-all group-hover:duration-[0.6s] duration-200' />
        </button>
        <button className='relative border-2 rounded-full flex items-center justify-center group hover:scale-[1.18] hover:border-[#FED7A5] transition-all duration-500 overflow-hidden'>
          <h1 className="sm:px-6 py-3 px-4 flex items-center justify-center gap-2 group-hover:text-black transition-all duration-500">
            Watch Video <span>▶</span>
          </h1>
          <div className='-z-10 bg-[#FED7A5] absolute h-24 w-44 sm:h-40 sm:w-44 -translate-x-44 group-hover:translate-x-0 transition-all duration-500' />
        </button>
      </div>
    </div>
  );
};

export default Hero;
