import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <section id='navbar'>
      <div className={`flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ${click ? 'bg-gray-800' : ''}`}>
        <div></div>
        <h1 className={`text-2xl font-mono w-full text-${click ? 'white' : 'black'}`}>RJ.Code</h1>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={handleClick} className={`text-${click ? 'white' : 'black'} focus:outline-none`}>
            {click ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 ${
            click ? 'flex absolute inset-x-0 top-24 bg-black justify-center' : 'hidden'
          }`}
        >
          <li className={`p-4 text-${click ? 'white' : 'black'}`}>
            <Link to='home' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={`p-4 text-${click ? 'white' : 'black'}`}>
            <Link to='about' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className={`p-4 text-${click ? 'white' : 'black'}`}>
            <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li className={`p-4 text-${click ? 'white' : 'black'}`}>
            <Link to='projects' smooth={true} offset={-100} duration={500} onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li className={`p-4 text-${click ? 'white' : 'black'}`}>
            <Link to='contact' spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
