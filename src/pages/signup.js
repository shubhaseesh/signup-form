import React, { useState } from "react";
import Input from "../components/input";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password1: "",
    password2: "",
    date: "",
    checkbox: false,
  });

  // const { firstName, lastName, email, password1, password2, date, checkbox } = formData;
  let inputClass =
    "w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md";
  let message = "";

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onCheckboxChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: !formData.checkbox,
    }));
  };

  function onSubmit(e) {
    e.preventDefault();
    if (formData.password1 !== formData.password2) {
      message = "Password did not matched";
    } else {
      message = "Password matched";
      // window.localStorage.setItem('user',`${firstName} ${lastName}`)
      // window.localStorage.setItem('password',`${password1}`)
    }
    console.log(formData);
    console.log(message);
  }

  return (
    <div className="flex justify-center items-center text-left p-12">
      <form
        className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="firstName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                First Name
              </label>
              <Input
                type="text"
                name="firstName"
                onChange={onChange}
                required
                placeholder="First Name"
                inputClass={inputClass}
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <label
                htmlFor="lastName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Last Name
              </label>
              <Input
                type="text"
                name="lastName"
                onChange={onChange}
                required
                placeholder="Last Name"
                inputClass={inputClass}
              />
            </div>
          </div>
        </div>

        {/*  Email input  */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email
          </label>
          <Input
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            type="email"
            name="email"
            onChange={onChange}
            inputClass={inputClass}
            placeholder="Email address"
          />
        </div>
        {/* Password input */}
        <div className="mb-6">
          <label
            htmlFor="password1"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Password
          </label>
          <Input
            type="password"
            onChange={onChange}
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            inputClass={inputClass}
            name="password1"
            placeholder="Password"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password2"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Confirm Password
          </label>
          <Input
            type="password"
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            onChange={onChange}
            inputClass={inputClass}
            name="password2"
            placeholder="Confirm Password"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="date"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Date
          </label>
          <input
            type="date"
            required
            name="date"
            onChange={onChange}
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              onChange={onCheckboxChange}
              name="checkbox"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="ckeckbox"
            >
              Agree Terms and conditions
            </label>
          </div>
        </div>
        <div>
          <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
