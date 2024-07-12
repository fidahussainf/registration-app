import React from "react";
import { useSelector } from "react-redux";
import GeneralTable from "./Common/GeneralTable";
import Loader from "./Common/Loader";
import { useNavigate } from "react-router-dom";

const MyRegistrations = () => {
  const registrations = useSelector((state) => state.users.registrations);
  const navigate = useNavigate();

  if (!registrations) {
    return <Loader />;
  }

  const handleRegisterDetails = (event) => {
    navigate(`/myregister/details/${event.id}`);
  };

  const actions = [{ label: "Details", onClick: handleRegisterDetails }];

  return (
    <div className="container mx-auto p-4">
      <GeneralTable data={registrations} loading={false} actions={actions} />
    </div>
  );
};

export default MyRegistrations;
