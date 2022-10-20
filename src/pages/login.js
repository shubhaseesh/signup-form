import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/input";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginData;
  let inputClass =
    "form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";
  let message = "";

  const onChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (email === "" || password === "") {
    message = "Please fill out these fields";
  } else {
    message = "Success";
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("message :" + message);
    console.log(loginData);
  };

  return (
    <div className="flex justify-center items-center text-left p-24">
      <form
        className="bg-white min-w-[45%]  shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email
        </label>
        <div className="mb-6">
          <Input
            inputClass={inputClass}
            type="text"
            name="email"
            onChange={onChange}
            placeholder="Email address"
          />
        </div>
        <label
          htmlFor="password"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Password
        </label>
        <div className="mb-6">
          <Input
            inputClass={inputClass}
            type="password"
            name="password"
            onChange={onChange}
            placeholder="Password"
          />
        </div>
        <div className="text-center lg:text-left">
          <button
            type="submit"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Login
          </button>
          <p className="text-sm font-semibold mt-2 mb-2 pt-1">
            Don't have an account?
            <Link
              className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
              to="/signup"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
