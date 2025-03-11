import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      {/* Contact Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-green-700">Contact Us</h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Have questions or want to collaborate? Feel free to reach out!
        </p>
      </div>

      {/* Contact Form */}
      <div className="mt-12 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input 
              type="text" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-green-600 text-white p-3 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-green-700">Follow Us</h2>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-green-700 hover:text-green-900 text-2xl">📷 Instagram</a>
          <a href="#" className="text-green-700 hover:text-green-900 text-2xl">🐦 Twitter</a>
          <a href="#" className="text-green-700 hover:text-green-900 text-2xl">📘 Facebook</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
