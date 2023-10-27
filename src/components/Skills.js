import React from 'react'

const Skills = () => {
  return (
    <section>
        <div name="skills" className="container relative py-20 max-w-full min-h-full">
            { /* title */}
            <h2 className='text-4xl flex justify-center mt-[-30px] 
                font-bold text-rose-500'>
                    Skills
            </h2>

            { /* frontend dev box*/ }
            <div className="flex flex-col lg:flex-row relative">

                <div className="flex flex-wrap px-4 mt-5 mx-auto">
                    
                    <h2 className='text-center font-medium text-2xl absolute
                        left-[200px]'>
                            Frontend Development</h2>
                    
                    <ul className='flex flex-wrap w-[577px] 
                        mt-12 border-4 rounded-[20px] gap-10 p-5 justify-evenly '>
                        
                        <li className='w-[77px] p-3 bg-zinc-300 
                            bg-opacity-20 rounded-full shadow '>
                            <img src="/images/html.png" alt="" className='relative left-1' />
                        </li>
                            
                        <li className='w-[77px] p-3 bg-zinc-300 
                            bg-opacity-20 rounded-full shadow'>
                            <img src="/images/css.png" alt="" className='relative left-1' />
                        </li>

                        <li className='w-[77px] p-3 bg-zinc-300 
                            bg-opacity-20 rounded-full shadow'>
                            <img src="/images/javascript.png" alt="" className='relative left-1 top-1' />
                        </li>

                        <li className='w-[77px] p-3 bg-zinc-300 
                            bg-opacity-20 rounded-full shadow'>
                            <img src="/images/react.png" alt="" className='relative left-0 top-1 r' />
                        </li>

                        <li className='w-[77px] p-3 bg-zinc-300 
                            bg-opacity-20 rounded-full shadow'>
                            <img src="/images/redux.png" alt="" className='relative' />
                        </li>

                        <li className='w-[77px] p-4 bg-zinc-300 border-2 
                            bg-opacity-20 rounded-full shadow '>
                            <img src="/images/tailwind.png" alt="" className='relative top-1' />
                        </li>

                    </ul>
                    
                </div>

                <div className=" md:flex-col px-4 mt-5 mx-auto">
                   
                    <h2 className='text-center font-medium text-2xl 
                        py-auto relative'>
                            Backend Development</h2>
                    
                    <ul className='flex flex-wrap w-[577px] 
                        mt-12 border-4 rounded-[20px] gap-10 p-5 justify-evenly '>
                        
                        <li className='w-[77px] p-3 bg-zinc-300 
                            bg-opacity-20 rounded-full shadow '>
                            <img src="/images/node.png" alt="" className='relative left-1 ' />
                        </li>

                        <li className='w-[77px] p-3 bg-zinc-300 
                            bg-opacity-20 rounded-full shadow '>
                            <img src="/images/mongodb.png" alt="" className='relative left- top-4' />
                        </li>

                        <li className='w-[77px] p-3 bg-zinc-300 
                            bg-opacity-20 rounded-full shadow '>
                            <img src="/images/git.png" alt="" className='relative left-1' />
                        </li>
                
                    </ul>
                    
                </div>
            </div>

            
            

        </div>

    </section>
  )
}

export default Skills