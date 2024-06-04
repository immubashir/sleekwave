import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="z-[999] fixed top-3 flex items-center justify-between w-full p-4 lg:w-[calc(100vw-160px)] lg:p-0">
        <h1 className="poetsen-one-regular text-xl">Sleekwave</h1>
        <div className="lg:hidden">
          <button 
          className=' mr-8 sm:mr-32'
          onClick={toggleMenu}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <ul className={`flex-col lg:flex-row lg:flex items-center justify-center gap-10 lg:ml-0 bg-black lg:bg-transparent rounded-xl absolute lg:sticky right-10 md:right-36 top-10 p-4 md:p-10 ${isOpen ? 'flex' : 'hidden'}`}>
          <li className="hover:text-[#FED7A5] montserrat-medium transition-all duration-300">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-[#FED7A5] montserrat-medium transition-all duration-300">
            <a href="#">About</a>
          </li>
          <li className="hover:text-[#FED7A5] montserrat-medium transition-all duration-300">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-[#FED7A5] montserrat-medium transition-all duration-300">
            <a href="#">Features</a>
          </li>
        </ul>
        <button className="hidden lg:block rounded-full font-bold border-[1.5px] border-gray-300 group relative overflow-hidden hover:border-[#fff] transition-all duration-300">
          <h1 className="px-8 py-3 z-10 group-hover:text-black transition-all duration-300 montserrat-bold">Download</h1>
          <div className="-z-10 h-36 w-36 bg-[#fff] rounded-full absolute group-hover:scale-[2] transition-all duration-300 ease-out" />
        </button>
      </div>
    </>
  );
};

export default Navbar;
