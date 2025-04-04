const ContactUs = () => {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-6">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
          {/* Header Section */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
            <p className="mt-2 text-gray-600">
              We're here to help! Reach out to us with any inquiries or feedback.
            </p>
          </div>
  
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Name */}
            <div className="flex items-center">
              <span className="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 13.121A4 4 0 106.343 14.93l1.415-1.415a4 4 0 10-2.637-1.394z"
                  />
                </svg>
              </span>
              <p className="ml-4 text-gray-700 text-lg">
                <span className="font-semibold">Name:</span> Kunal Aggarwal
              </p>
            </div>
  
            {/* Email */}
            <div className="flex items-center">
              <span className="text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 00-8 0m8 0a4 4 0 01-8 0m4 4v4m0-4H8m8 0h-4"
                  />
                </svg>
              </span>
              <p className="ml-4 text-gray-700 text-lg">
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:2003agarwalkunal@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  2003agarwalkunal@gmail.com
                </a>
              </p>
            </div>
  
            {/* Message Form */}
            <form className="bg-gray-100 rounded-lg p-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
              <div className="space-y-4">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-gray-600">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                  />
                </div>
  
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-gray-600">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                  />
                </div>
  
                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-gray-600">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Write your message here"
                    className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-green-200"
                  ></textarea>
                </div>
  
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  