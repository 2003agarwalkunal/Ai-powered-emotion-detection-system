import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
    style={{ background: "linear-gradient(to right, #E3FDFD, #CBF1F5, #A6E3E9)" }}
    className="shadow-lg"
  >
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="text-teal-700 font-extrabold text-2xl italic tracking-wide">
        HelpingMinds
      </div>
  
      {/* Navigation Links */}
      <nav>
        <ul className="hidden md:flex space-x-10 text-gray-800 font-bold text-xl">
          <li>
            <Link to="/" className="hover:text-teal-600 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="hover:text-teal-600 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/Services" className="hover:text-teal-600 transition duration-300">
              Services
            </Link>
          </li>
          <li>
            <Link to="/ContactUs" className="hover:text-teal-600 transition duration-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
  
      {/* Buttons */}
      <div className="hidden md:flex space-x-5">
        <button className="bg-teal-500 text-white py-2 px-6 rounded-full font-medium shadow-md hover:bg-teal-600 transition duration-300">
          Login
        </button>
        <button className="bg-white text-teal-600 border border-teal-500 py-2 px-6 rounded-full font-medium shadow-md hover:bg-teal-500 hover:text-white transition duration-300">
          Register
        </button>
      </div>
    </div>
  </header>
  

  );
};

export default Header;
