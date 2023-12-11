import React from 'react'

const About = () => {
  return (
    <div 
      id='about'
      className="md:h-[700px] relative md:flex md:flex-row p-2 
        md:justify-center mt-2 md:items-center">

      <div className="border-2 shadow-md mt-10
        p-6 w-[350px] h-[500px] mx-auto md:w-[570px] rounded-lg">
        <h2 className='font-medium text-4xl text-rose-500 text-center'>
          About me
          <p className='border-b-4 border-rose-500 mt-2 
          mx-auto w-[120px]'></p>
        </h2>
        <p className='text-2xl mt-2 pt-4'>
          "Greetings! I'm Rajarajan, a web enthusiast with a dash of creativity and a whole lot of code. From pixel perfection to problem-solving, I thrive on crafting digital experiences with a touch of personality. Join me on this coding journey, where we turn concepts into captivating realities!"
        </p>
      </div>

      <div className="w-[300px] mx-auto mt-10 md:w-[300px]
         md:object-contain">
        <img src="/images/about.jpg" alt="about" 
          className='w-full h-full object-cover rounded-lg' />
      </div>
    </div>


  )
}

export default About