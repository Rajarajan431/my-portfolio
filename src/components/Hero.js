import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
 
const Hero = () => {
  return (
    <section>
      { /* flex container */ }
      <div name="home" className="container flex flex-col-reverse items-center
        px-6 mx-auto mt-20 space-y-0 md:space-y-0 md:flex-row">

          { /* left item */ }
          <div className="flex flex-col mb-32 space-y-12 lg:w-1/2">
            <h1 className='max-w-md text-5xl font-Roboto font-bold md:text-5xl 
              md: text-left'>
              Hello! I'm Rajarajan
            </h1>
            <p className='max-w-sm text-black md:text-left relative bottom-10'>
              <span className='font-bold text-2xl'>I am an Web Developer</span> <br />
              <span className='text-1xl'>Transforming pixels into powerful user journeys, 
                weaving innovation and design into every website I create</span>
            </p>
            <div className="left-0  md:flex justify-center md:justify-start relative bottom-[60px] ">
              <a href="/" className='p-3 px-6 pt-3 border-2 rounded-lg 
                hover:bg-rose-500 hover:border-pink-500 hover:text-white'>
                Hire me
              </a>
            </div>
            { /* icons */ }
                <div className="flex relative top-[-80px] space-x-4">
                 <a href="/"><AiFillGithub size={30}/></a> 
                 <a href="/"><AiFillLinkedin size={30}/></a> 
                 <a href="/"><AiFillInstagram size={30}/></a> 
                </div>
          </div>

            { /* Profile Pic */ }
           

         

      </div>

      
    </section>
  );
};

export default Hero;
