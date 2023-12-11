import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
 
const Hero = () => {
  return (
   <div 
      id='home'
      className="px-10 py-5 md:h-[640px] relative md:flex">

      <div className="mt-10 lg:ml-[260px]">
        <div className="text-center py-10 ">
          <h1 className='text-5xl py-2 font-medium font-sans'>Hello! I am</h1>
          <h2 className='text-5xl py-2 font-medium font-sans'>Rajarajan</h2>
          <span className='text-md py-5 leading-8'>
            <p className='font-md text-2xl text-rose-500'>I am a Web Developer</p> 
            I design and code digital wonders that turn ideas into interactive realities. 
          <br></br>
            Welcome to my world of web development excellence.</span>
        </div>

        <div className=" text-center">
          <a 
            className='text-white bg-rose-500 text-md   
            text-center p-3 rounded-lg'>

            Download Resume
          </a>
        </div>

        <div className="flex text-5xl justify-evenly gap-10 cursor-pointer mt-12">
          
          <a 
            href="https://github.com/Rajarajan431/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
              
            <AiFillGithub size={30} />
          </a>
          
          <a 
            href="https://linkedin.com/in/rajarajan-r-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className=''  
          >
            <AiFillLinkedin size={30}/>
          </a>
          
        </div>

        
      </div>

    <div className="bg-gradient-to-b mx-auto from-teal-400-400' 
        rounded-full w-80 h-80 mt-20">
        <img src="/images/profile2.png" alt="profile" className='w-[400px] '  />
      </div>

   </div>
  );
};

export default Hero;
