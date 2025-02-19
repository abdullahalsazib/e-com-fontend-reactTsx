import { CommonHeader } from "./Shop";
import { Footer } from "./Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <CommonHeader title="Contact Us" />
      <div className="px-6 md:px-[10%] py-16">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Get In Touch With Us
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Have questions or need help? Feel free to reach out to us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-center">
                Our Location
              </h2>
              <div className="w-full h-64 mt-6 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Google Map"
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d34981.404154838325!2d88.58828799999998!3d24.366284800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1739973466157!5m2!1sen!2sbd"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-xl text-blue-500" />
              <p className="text-gray-600">+123 456 789</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-xl text-blue-500" />
              <p className="text-gray-600">support@example.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-xl text-blue-500" />
              <p className="text-gray-600">123 Street, City, Country</p>
            </div>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg w-full">
            <form className="space-y-5">
              <div>
                <label className="block text-gray-600">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">Your Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-600">Message</label>
                <textarea
                  placeholder="Write your message..."
                  className="w-full mt-1 px-4 py-3 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12"></div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
