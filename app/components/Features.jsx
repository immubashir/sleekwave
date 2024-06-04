import React, { useEffect, useRef } from 'react';

const Features = () => {
  const scrollRef = useRef();

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
            console.error(error);
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
    <div ref={scrollRef} className='h- flex flex-col lg:flex-row items-center justify-between p-6 sm:p-12 lg:p-20'>
      <div className='relative mb-12 lg:mb-0 w-full lg:w-1/2'>
        <img src="/assets/Mockup_img_3.png" className='w-full lg:w-3/4 object-cover rounded-3xl mx-auto lg:ml-16' alt="Mockup 3" />
        <img data-scroll data-scroll-speed="0.3" src="/assets/Mockup_img_4.png" className='w-1/2 sm:w-1/3 lg:w-1/5 object-cover absolute top-32 left-0 rounded-3xl shadow-lg shadow-black/40' alt="Mockup 4" />
        <img data-scroll data-scroll-speed="0.5" src="/assets/Mockup_img_5.png" className='w-3/4 sm:w-1/2 lg:w-1/4 object-cover absolute top-44 right-0 lg:right-64 rounded-3xl shadow-lg shadow-black/60' alt="Mockup 5" />
      </div>
      <div className='flex flex-col gap-5 w-full lg:w-1/2'>
        <h1 className='uppercase montserrat-medium text-[#FED7A5] text-lg lg:text-xl'>Features</h1>
        <div>
          <h1 className='montserrat-bold text-xl lg:text-2xl text-[#FED7A5]'>Intuitive Interface</h1>
          <p>Seamlessly navigate through our user-friendly interface.</p>
        </div>
        <div>
          <h1 className='montserrat-bold text-xl lg:text-2xl text-[#FED7A5]'>Customization Options</h1>
          <p>Tailor your designs with a range of customization tools.</p>
        </div>
        <div>
          <h1 className='montserrat-bold text-xl lg:text-2xl text-[#FED7A5]'>Responsive Design</h1>
          <p>Ensure your UI looks stunning across all devices and screen sizes.</p>
        </div>
        <div>
          <h1 className='montserrat-bold text-xl lg:text-2xl text-[#FED7A5]'>Collaboration Tools</h1>
          <p>Streamline teamwork with integrated collaboration features.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
