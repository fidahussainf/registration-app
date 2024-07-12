import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-100 text-gray-800 p-4">
      <nav className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-800">
          User Registrations
        </Link>
        <div className="md:flex md:items-center md:space-x-4 md:mt-0 mt-4">
          <Link to="/" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link
            to="/myregistrations"
            className="text-gray-800 hover:text-gray-600 ml-4"
          >
            My Registrations
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
