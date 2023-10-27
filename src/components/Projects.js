import React from 'react';

const Projects = () => {
  return (
    <section>
      <div name="projects" className='container relative py-10 max-w-full '>
          <h2 className='text-4xl text-center text-rose-500 font-bold flex justify-center mt-[-30px]'>
             My Projects
          </h2>

          <div className=" flex flex-col 
              lg:flex-row py-[70px] p-2 ">
            <div className="flex w-full relative bottom-20">

              <ul className='flex flex-col mx-auto mt-4 px-2 rounded-xl pt-2
                  lg:flex-row lg:w-[1500px] 
                  lg:py-[100px] gap-5 md:p-5 lg:justify-evenly lg:overflow-hidden'>
                
                { /* first card */ }
                  <li className='px-2 pt-2 border-4 rounded-lg relative w-[390px]'>
                      <img src="/images/bluepalm.png" alt="Promtopia" className='border-4' />
                  <h1 className='font-bold pt-2 text-2xl'>Promtopia</h1>
                  <p className='pt-5'>
                  Promptopia is a dynamic full-stack web application designed to empower users with CRUD 
                  functionality.Explore the world of creativity with this platform that allows you to 
                  Create, Read, Update, and Delete prompts and ideas effortlessly. The homepage provides a 
                  glimpse into the collective imagination with a collection of user-generated suggestions, 
                  making it a hub of inspiration. 
                  </p>
                  <div className='pt-5  m-2 flex justify-evenly '>
                      <a href='/' className='px-2 relative bottom-2 bg-rose-500
                      rounded-lg p-2 text-white'>
                          Live Demo
                      </a>
                      <a href='/' className='ml-20 px-6 relative bottom-2 bg-rose-500
                      rounded-lg p-2 text-white'>
                          code
                      </a>
                  </div>
                </li>
                { /* second card */ }
                <li className='px-2 pt-2 border-4 relative w-[390px] rounded-lg'>
                      <img src="/images/bluepalm.png" alt="restaurant" className='border-4' />
                  <h1 className='font-bold pt-2 text-2xl'>Blue Palm</h1>
                  <p className='pt-5'>
                    Experience culinary excellence at Gourmet Eats, a visually
                    stunning restaurant website that I designed. Explore our
                    mouthwatering menu, immerse yourself in the elegant ambiance, and
                    discover the perfect spot for your next fine dining experience. From
                    tantalizing food photography to seamless navigation, this website
                    showcases the fusion of art and technology.
                  </p>
                  <div className='pt-5 m-2 flex justify-evenly '>
                      <a href='/' className='px-2 relative bottom-2 bg-rose-500
                      rounded-lg p-2 text-white'>
                          Live Demo
                      </a>
                      <a href='/' className='ml-20 relative bottom-2 bg-rose-500
                      rounded-lg p-2 px-6 text-white'>
                          Code
                      </a>
                  </div>
                </li>
                { /* third card */ }
                <li className='px-2 pt-2 border-4 relative w-[390px] rounded-lg'>
                      <img src="/images/bluepalm.png" alt="dasboard" className='border-4' />
                  <h1 className='font-bold pt-2 text-2xl'>Project Management</h1>
                  <p className='pt-5'>
                  TeamHub, a powerful full-stack web application, simplifies collaboration. 
                  It enables users to perform CRUD operations effortlessly, 
                  manage and assign projects to team members, and provides a centralized 
                  platform for tracking personal projects. Team collaboration made easy. 
                  </p>
                  <div className='pt-4 relative md:top-[50px] m-2 flex justify-evenly '>
                      <a href='/' className='px-2 relative bottom-2 bg-rose-500
                      rounded-lg p-2 text-white'>
                          Live Demo
                      </a>
                      <a href='/' className='ml-20 relative bottom-2 bg-rose-500
                      rounded-lg p-2 px-6 text-white'>
                          Code
                      </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Projects;
