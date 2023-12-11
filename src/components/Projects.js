import React from 'react';

const Projects = () => {
  return (
   <div className="min-h-screen">
      
      <div className="">
        <h1 className='text-4xl font-medium text-rose-500 
           text-center mt-10'>
          My Coding Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 
        gap-2 m-5 pt-5 ">
       
        <div className="border-2 mt-10 mx-auto w-[370px] 
          sm:w-[520px] shadow-md rounded-lg">
          <img src="/images/estate.png" alt="Mern Estate" />
          <p className='text-xl p-2'>This website is built to connect people who are looking for
              a beautiful place to start their new journey. Users can use CRUD
              functionalities also they can contact the owner of the House for futher 
              details.
          </p>
          <span>
            <p className='font-bold p-2'>Technologies used:</p> 
            <p className='p-2'>React, Redux, MongoDB, Express, Git, Firebase, TailwindCSS , Nodejs </p>
          </span>
          
          <div className="p-2 flex justify-evenly">
            <a href="https://mern-estate-t4s6.onrender.com" className='p-2 w-50 text-center 
              rounded-lg text-xl text-white bg-rose-500'>
                Live Demo</a>
           
           <a href="https://github.com/Rajarajan431/Mern-Estate" 
              className='border-2 p-2 w-50 text-center 
              rounded-lg text-xl'>
                Github Code</a>
          </div>

       </div>

       <div className="border-2 mt-10 mx-auto w-[370px] 
          sm:w-[520px] shadow-md rounded-lg">
          <img src="/images/promtopia.png" alt="Mern Estate" />
          <p className='text-xl p-2'>This website is built to connect individuals who possess
            the skill to engage with AI models, and enabling them to share and
            discover AI prompts in areas such as programing, food, music and etc.
            Users can explore these prompts to spark ideas, enhance their
            understanding of AI interactions, and encourage creativity.
          </p>
          <span>
            <p className='font-bold p-2'>Technologies used:</p> 
            <p className='p-2'>Nextjs, MongoDB, Express, Git, TailwindCSS, Nodejs </p>
          </span>
          
          <div className="p-2 flex justify-evenly">
            <a href="https://project-promtp.vercel.app" className='p-2 w-50 text-center 
              rounded-lg text-xl text-white bg-rose-500'>
                Live Demo</a>
            
            <a href="https://github.com/Rajarajan431/Project_promtp" className='border-2 p-2 w-50 text-center 
              rounded-lg text-xl'>
                Github Code</a>
          </div>

       </div>

       <div className="border-2 mt-10 mx-auto w-[370px] 
          sm:w-[520px] shadow-md rounded-lg">
          <img src="/images/tastyfoods.png" alt="Mern Estate" />
          <p className='text-xl p-2'>Welcome to Fresh Pizza - where flavor meets freshness! 
          Indulge in our mouthwatering pizzas made with the finest ingredients. From classic 
          Margherita to innovative specialties, each slice is a taste of perfection. Join us for a delicious 
          journey that promises quality, variety, and the unmistakable zest of Fresh Pizza!
          </p>
          <span>
            <p className='font-bold p-2'>Technologies used:</p> 
            <p className='p-2'>React, Redux, MongoDB, Express, Git, Firebase, TailwindCSS , Nodejs </p>
          </span>
          
          <div className="p-2 flex justify-evenly">
            <a href="/" className='p-2 w-50 text-center 
              rounded-lg text-xl text-white bg-rose-500'>
                Live Demo</a>
            <a href="https://github.com/Rajarajan431/TastyFoods" className='border-2 p-2 w-50 text-center 
              rounded-lg text-xl'>
                Github Code</a>
          </div>

       </div>
      
      </div>

   </div>
  );
}

export default Projects;
