import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./Common/Loader";

const RegistrationConfirmation = () => {
  const registration = useSelector((state) => state.users.registrations);
  const data =
    registration.length > 0 ? (
      registration[registration.length - 1]
    ) : (
      <Loader />
    );

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Registration Confirmation
      </h2>
      <div className="mb-4">
        <p className="text-lg">
          <strong>ID:</strong> {data.id}
        </p>
        <p className="text-lg">
          <strong>Name:</strong> {data.name}
        </p>
        <p className="text-lg">
          <strong>Email:</strong> {data.email}
        </p>
        <p className="text-lg">
          <strong>Phone:</strong> {data.phone}
        </p>
        <p className="text-lg">
          <strong>User create by:</strong> {data.user_name}
        </p>
        <p className="text-lg">
          <strong>User Id create by:</strong> {data.user_id}
        </p>
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 transition duration-300">
            Back to Events
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;
