// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-14">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-lg mb-4">Connect with Me</p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/Rajarajan431/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rajarajan-r-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          {/* Add more social media links as needed */}
        </div>

        <p className="mt-4">© 2023 RJ.Code All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
