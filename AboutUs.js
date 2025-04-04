const AboutUs = () => {
    return (
      <div className="min-h-screen py-16 px-6 flex flex-col justify-center items-center"
      style={{ background: "linear-gradient(to bottom, #FFFFFF, #E3FDFD)" }} // White to Light Blue
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-8 drop-shadow-md text-center">
        ABOUT HELPINGMINDS
      </h1>
    
      {/* Content Container */}
      <div className="bg-white shadow-lg rounded-2xl p-8 md:p-12 max-w-3xl w-full text-gray-800">
        <p className="text-lg mb-6 leading-relaxed">
          Welcome to <span className="font-bold text-blue-700">HelpingMinds</span>, a platform dedicated to supporting mental health and well-being through innovative tools and compassionate care. We understand that mental wellness is a journey, and our mission is to provide resources and support to make that journey easier and more meaningful.
        </p>
    
        {/* Our Offerings */}
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Our Offerings</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <span className="font-bold text-blue-800">ConversationalBot:</span> Need someone to talk to? Our AI-powered VoiceBot listens and provides thoughtful responses in a safe space.
          </li>
          <li>
            <span className="font-bold text-blue-800">Diary Analysis:</span> Express yourself in a secure, personalized digital diary to track emotions and experiences.
          </li>
          <li>
            <span className="font-bold text-blue-800">To-Do List:</span> Stay organized and reduce stress with our intuitive task management tool.
          </li>
        </ul>
    
        {/* Our Vision */}
        <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">Our Vision</h2>
        <p className="text-lg leading-relaxed">
          We aim to create a world where mental health is openly discussed, supported, and nurtured. Through innovative tools and empathetic care, we strive to make mental wellness accessible to everyone.
        </p>
    
        {/* Why HelpingMinds? */}
        <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-4">Why HelpingMinds?</h2>
        <p className="text-lg leading-relaxed">
          HelpingMinds is not just a platform; it’s a <span className="font-bold text-blue-800">community</span> where you'll find understanding, encouragement, and practical solutions for mental well-being. Together, let’s take a step toward a healthier, happier you.
        </p>
      </div>
    </div>
    
    );
  };
  
  export default AboutUs;
  