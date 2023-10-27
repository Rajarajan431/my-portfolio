import React from 'react'
const Footer = () => {
  return (
    <section>
      <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form action="" className='flex flex-col max-w-[600px] w-full border-4 border-white p-2 rounded-lg'>
          <div className="pb-8">  
            <p className='text-3xl font-bold inline border-b-4 border-rose-600
             text-gray-300'>Contact</p>
             <p className='text-gray-300 py-4'>
                // Submit the form below or send me an email - chesterking836@gmail.com</p>
            </div>
              <input type="text" name="name" placeholder='Name' 
                className='bg-[#ccd6f6] p-2 rounded-md' />

              <input type="text" name="email" placeholder='Email' 
                className='bg-[#ccd6f6] my-4 p-2 rounded-md' />

              <textarea name="message" rows="10" placeholder='Message' 
                className='bg-[#ccd6f6] p-2 rounded-md'></textarea>

              <button className='text-white border-2 rounded-lg hover:bg-rose-500 hover:border-pink-500
                px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Footer