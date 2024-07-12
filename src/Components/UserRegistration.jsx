import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { setUserRegister } from "../store/User";
import { toast } from "react-toastify";
import Loader from "./Common/Loader";

const UserRegistration = () => {
  const  {id}  = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.users.users);
  const data = allUsers.find((user) => user.id === parseInt(id));
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be numeric")
      .required("Required"),
  });

  if (!data) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Register for {data.user_name}
          </h2>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(
                setUserRegister({
                  ...values,
                  user_id: parseInt(id),
                  user_name: data.user_name,
                })
              );
              toast.success("Registration Successful");
              setTimeout(() => {
                navigate(`/confirmation`);
              }, 1000);
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4">
                <div>
                  <label className="block text-gray-700">User Name</label>
                  <Field
                    name="name"
                    className={`mt-1 p-2 border rounded w-full focus:outline-none ${
                      touched.name && errors.name
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {touched.name && errors.name && (
                    <div className="text-red-500 mt-1">{errors.name}</div>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className={`mt-1 p-2 border rounded w-full focus:outline-none ${
                      touched.email && errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-500 mt-1">{errors.email}</div>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">Phone</label>
                  <Field
                    type="number"
                    name="phone"
                    className={`mt-1 p-2 border rounded w-full focus:outline-none ${
                      touched.phone && errors.phone
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {touched.phone && errors.phone && (
                    <div className="text-red-500 mt-1">{errors.phone}</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
