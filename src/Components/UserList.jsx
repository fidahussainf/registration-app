import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setUserList } from "../store/User";
import GeneralTable from "./Common/GeneralTable";
import { useNavigate } from "react-router-dom";
import userAPI from "../api/user/user";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const AllUsers = useSelector((state) => state.users.users);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    userAPI
      .getAllUsers()
      .then((response) => {
        dispatch(setUserList(response.data));
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Error fetching events. Please try again later.");
      });
  };

  const handleRegister = (event) => {
    navigate(`/register/${event.id}`);
  };

  const actions = [{ label: "Register", onClick: handleRegister }];

  return (
    <div className="container mx-auto p-4">
      <div className="text-2xl p-4">All Users</div>
      <GeneralTable data={AllUsers} loading={loading} actions={actions} />
    </div>
  );
};

export default UserList;
