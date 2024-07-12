import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "./Common/Loader";

const MyRegistrationDetails = () => {
  const { id } = useParams();
  const registrations = useSelector((state) => state.users.registrations);
  const data = registrations.find((reg) => reg.id === parseInt(id));

  if (!registrations.length) {
    return <Loader />;
  }

  if (!data) {
    return <div className="text-center mt-8">Registration not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          My Registration Details
        </h2>
        <p>
          <strong>Registration ID:</strong> {data.id}
        </p>
        <p>
          <strong>Name:</strong> {data.name}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>Phone:</strong> {data.phone}
        </p>
        <p>
          <strong>User create by:</strong> {data.user_name}
        </p>
        <p>
          <strong>User create by ID:</strong> {data.user_id}
        </p>
      </div>
    </div>
  );
};

export default MyRegistrationDetails;
