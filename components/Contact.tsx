import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#1e293b] p-6 rounded-lg font-inter">
      <div className="pb-2 text-center font-inter">
        <h2 className="text-4xl font-bold">Contact Me</h2>
      </div>
      <div className="w-[800px]">
        <div>
          <span className="text-xl font-bold text-gray-600 uppercase">
            Full Name
          </span>
          <input
            className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          />
        </div>
        <div className="mt-8">
          <span className="text-xl font-bold text-gray-600 uppercase">
            Email
          </span>
          <input
            className="w-full p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div className="mt-8">
          <span className="text-xl font-bold text-gray-600 uppercase">
            Message
          </span>
          <textarea className="w-full h-32 p-3 mt-2 text-gray-900 bg-gray-300 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="mt-8">
          <button className="w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase bg-indigo-500 rounded-lg focus:outline-none focus:shadow-outline">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
