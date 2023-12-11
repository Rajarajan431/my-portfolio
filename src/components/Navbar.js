import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {
 
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <section id='navbar' className=''>
        <div className="flex justify-between items-center 
            h-24 max-w-[1240px] mx-auto px-4">
        <h1 className='text-2xl font-mono w-full text-black'>RJ.Code</h1>
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
                <li className='p-4 '>
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

      

    </div>
    </section>
  );
};

export default Navbar;
