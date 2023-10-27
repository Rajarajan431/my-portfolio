import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {
 
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <section id='navbar'>
        <div  className="flex justify-between items-center h-24 max-w-[1240px]
             mx-auto px-4 bg-sky ">
        <h1 className='text-2xl font-mono w-full '>PORTFOLIO</h1>
         <ul className='hidden md:flex '>
                <li className='p-4'>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='p-4'>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='p-4'>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='p-4'>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='p-4'>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

        <div onClick={handleNav} className='block md:hidden'>
            { !nav ?  <AiOutlineClose size={20} /> : <AiOutlineMenu  size={20} /> }
        </div>

        <div className={!nav ? 'md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-500 text-white ease-out duration-500' : 'fixed left-[-100%]'}>

            <h1 className='text-2xl font-mono w-full m-4'>PORTFOLIO</h1>

            <ul className='uppercase '>
                <li className='p-4 border-b'>Home</li>
                <li className='p-4 border-b'>About</li>
                <li className='p-4 border-b'>Skills</li>
                <li className='p-4 border-b'>Projects</li>
                <li className='p-4 border-b'>Contact</li>
            </ul>
        </div>

    </div>
    </section>
  );
};

export default Navbar;
