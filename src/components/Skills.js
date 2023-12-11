import React from 'react'

const Skills = () => {
  return (
    <div 
      id='skills'
      className="mt-10 bg-white pt-10">
    <h2 className="text-4xl font-bold mb-4 text-center text-rose-500">My Skills</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 
      m-3 pt-14">
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-white">Frontend Development</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>HTML5</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Redux ToolKit</li>
          <li>TailwindCSS</li>
        </ul>
      </div>
  
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-white">Backend Development</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>RESTful APIs</li>
          <li>Database Design (MongoDB)</li>
        </ul>
      </div>
  
      <div className="bg-gray-800 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2 text-white">Tools & Technologies</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>Git & Version Control</li>
          <li>npm</li>
          <li>Responsive Design</li>
        </ul>
      </div>
    </div>
  </div>
  
  )
}

export default Skills