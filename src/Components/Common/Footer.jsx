import React from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <div className="mt-2 flex justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=+923081844802"
            className="text-white mr-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mefidah"
            className="text-white mr-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/fidahussainfd?igsh=ZzFiOGxzbjZpOXhn"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
