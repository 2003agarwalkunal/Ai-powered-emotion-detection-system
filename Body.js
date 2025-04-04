const Body = () => {
    return (
      <div
      className="body min-h-screen flex flex-col md:flex-row justify-between items-center text-center px-8 w-full"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #E3FDFD)", // White to Light Blue
        color: "#003366", // Deep Blue for Text
        fontFamily: "Protest Riot",
      }}
    >
      {/* Main Heading */}
      <div className="text-left md:w-1/2 max-w-2xl">
        <h1 className="text-6xl font-extrabold leading-tight drop-shadow-md">
          YOUR JOURNEY TO WELLNESS BEGINS
          <div className="text-teal-600">HERE</div>
        </h1>
    
        {/* Subheading */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-10 tracking-wider">
          SUPPORT • CARE • STRENGTH
        </h3>
      </div>
    
      {/* Image Section */}
      <div className="relative md:w-1/2 flex justify-center">
        <img
          src="https://img.freepik.com/free-photo/covid-recovery-center-female-doctor-checking-health-results-with-older-patient_23-2148847854.jpg?ga=GA1.1.144467471.1731477564&semt=ais_hybrid"
          alt="Wellness"
          className="max-w-full w-[700px] h-[450px] rounded-lg border-4 border-white shadow-xl object-cover"
        />
      </div>
    </div>
    
    
    
    );
  };
  
  export default Body;
  