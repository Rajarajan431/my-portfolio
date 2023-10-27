import React from 'react'

const About = () => {
  return (
    <section>
        <div name="about" className="container py-20 px-6 
          mx-auto mt-2 max-w-full bg-slate-400 ">
          
          <div className='font-bold text-3xl flex flex-col lg:w-1/2 items-center 
           relative bottom-16 mx-auto'>
            <h2 className='text-rose-500'>About me</h2>
          </div>

          <div className="gap-2 md:max-w-md md:ml-[200px] border-4 
            p-2 rounded-lg border-white flex flex-col justify-end flex-grow">
            <p className=''> Hello there! I'm a passionate and driven junior web developer with
                a fresh perspective on the ever-evolving world of frontend development. 
                With 0-1 years of experience under my belt, I'm excited to embark
                on this exciting journey and make my mark in the web development sphere. 
            </p>

           <div className="mt-2">
            <h2 className='font-bold text-2lg text-rose-500'>My Appoach</h2>
            <p> I'm a firm believer in the power of continuous learning.
                The tech world moves at an astonishing pace, and
                I'm committed to staying up-to-date with the latest 
                technologies and best practices. I love the process of 
                learning, experimenting, and pushing the boundaries of 
                what I can achieve. Every project is an opportunity to 
                grow and refine my skills. 
            </p>
           </div>
          </div>

        </div>
    </section>
  )
}

export default About