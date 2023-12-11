// Contact.js
import React from 'react';
import { MdSend } from 'react-icons/md'

const Contact = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

   const mailtoLink = `mailto:johnyblaze431@gmail.com?subject=Message%20from%20${name}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div 
        id='contact'
        className="container mx-auto mt-14 ">
      <h1 className="text-3xl font-bold mb-4 text-center">Get in Touch</h1>
      <p className="text-gray-600 mb-8 text-center">
        I'd love to hear from you! Drop me a message, and I'll get back to you as soon as possible.
      </p>

      <form className="max-w-md mx-auto" onSubmit={handleSendMessage}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 font-semibold mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Type your message here..."
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 flex items-center gap-2
            rounded hover:bg-blue-600 transition duration-300"
        >
          Send Message<MdSend size={20}/>
        </button>
      </form>
    </div>
  );
};

export default Contact;
