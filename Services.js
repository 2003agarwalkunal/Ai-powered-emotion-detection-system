import React from "react";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="min-h-screen py-16 px-6 flex flex-col justify-center items-center"
  style={{ background: "linear-gradient(to bottom, #FFFFFF, #E3FDFD)" }} // Soft white-to-light-blue gradient
>
  {/* Heading */}
  <h1 className="text-5xl font-extrabold text-blue-900 mb-12 drop-shadow-md text-center uppercase">
    SERVICES WE PROVIDE
  </h1>

  {/* Services Section */}
  <div className="grid md:grid-cols-3 gap-12 w-full max-w-6xl">
    {/* Service 1 - Voice Chatbot */}
    <Link
  to="/voicebot"
  className="bg-white rounded-2xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 cursor-pointer block"
>
  <div
    className="h-28 w-28 rounded-full bg-cover bg-center mx-auto mb-6"
    style={{
      backgroundImage: "url('https://localo.com/assets/img/definitions/what-is-bot.webp')",
    }}
  ></div>
  <h2 className="text-2xl font-bold text-blue-800 mb-3">Voice Chatbot</h2>
  <p className="text-gray-600">
    An AI-powered bot that listens, responds, and provides a comforting conversation whenever you need it.
  </p>
</Link>


    {/* Service 2 - To-Do List */}
    <Link to="/todo">
  <div className="bg-white rounded-2xl shadow-xl p-8 text-center transition-transform transform hover:scale-105 cursor-pointer">
    <div className="h-28 w-28 rounded-full bg-cover bg-center mx-auto mb-6" 
      style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319_640.png')" }}></div>
    <h2 className="text-2xl font-bold text-blue-800 mb-3">To-Do List</h2>
    <p className="text-gray-600">Organize tasks, set priorities, and track your progress towards a stress-free and balanced life.</p>
  </div>
</Link>


    {/* Service 3 - Diary Analysis */}
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center transition-transform transform hover:scale-105">
      <div className="h-28 w-28 rounded-full bg-cover bg-center mx-auto mb-6" 
        style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTALQgZIzAX2HGkzIuAY6zNjSyDy58Ea0ibXw&s')" }}></div>
      <h2 className="text-2xl font-bold text-blue-800 mb-3">Dear Diary</h2>
      <p className="text-gray-600">Securely jot down your thoughts, reflect on your emotions, and track personal growth.</p>
    </div>
  </div>

  {/* Additional Section - Why Choose Us? */}
  <div className="mt-16 text-center max-w-4xl">
    <h2 className="text-3xl font-extrabold text-blue-900 mb-4">Why Choose HelpingMinds?</h2>
    <p className="text-lg text-gray-700 leading-relaxed">
      Our platform provides a **holistic** approach to mental well-being. Whether you need someone to talk to, a place to express yourself, or a way to stay organized, we are here for you.
    </p>
    <div className="mt-6 flex justify-center gap-6">
      <button className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition">
        Learn More
      </button>
      <button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition">
        Get Started
      </button>
    </div>
  </div>
</div>

  );
};

export default Service;
