import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import UserRegistration from "./UserRegistration";
import RegistrationConfirmation from "./RegistrationConfirmation";
import MyRegistrations from "./MyRegistrations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import MyResgistrattionDetails from "./MyResgistrattionDetails";

const AppRouter = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/register/:id" element={<UserRegistration />} />
        <Route
          path="/myregister/details/:id"
          element={<MyResgistrattionDetails />}
        />
        <Route path="/confirmation" element={<RegistrationConfirmation />} />
        <Route path="/myregistrations" element={<MyRegistrations />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AppRouter;
