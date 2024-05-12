// Imports React Dependencies
import * as React from "react";

// Imports React Router Dependencies
import { Form, useNavigate } from "react-router-dom";

// Icons
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

// API
import instance from "../api/axios.js";

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

export default function Register() {
  const navigate = useNavigate();

  const [values, setValues] = React.useState({
    full_name: "",
    username: "",
    email: "",
    password: "",
    address: "",
    city: "",
    country: "",
    state: "",
    zip: "",
  });
  const [successful, setSuccessful] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!EMAIL_REGEX.test(values.email)) {
      console.error("Invalid email address");
      return;
    }
    if (!PWD_REGEX.test(values.password)) {
      console.error("Invalid password");
      return;
    }
    instance.post(REGISTER_URL, values).then((res) => {
      if (res.status === 201) {
        console.log("User Registered Successfully");
        setSuccessful(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        console.error("Failed to register user");
      }
    });
  };
  return (
    <Form method="post" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
            Fullname
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event) => setValues({ ...values, full_name: event.target.value })}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
            Username
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="username"
              id="username"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event) => setValues({ ...values, username: event.target.value })}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event) => setValues({ ...values, password: event.target.value })}
            />
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event) => setValues({ ...values, email: event.target.value })}
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
            Country
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={(event) => setValues({ ...values, country: event.target.value })}
            >
              <option value="">Select a country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
            Street address
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="street-address"
              id="street-address"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event) => setValues({ ...values, address: event.target.value })}
            />
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
            City
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event) => setValues({ ...values, city: event.target.value })}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
            State / Province
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="region"
              id="region"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event) => setValues({ ...values, state: event.target.value })}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
            ZIP / Postal code
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:rizng-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(event) => setValues({ ...values, zip: event.target.value })}
            />
          </div>
        </div>
        <div className="sm:col-end-7 col-span-2 flex justify-end">
          <button className="hover:bg-slate-600 hover:rounded-full p-1 bg-zinc-950 text-white rounded-full w-full">
            Register
          </button>
        </div>
        {successful && (
          <div className="sm:col-end-7 col-span-2 flex justify-end text-lime-800">User Registered Successfully</div>
        )}
      </div>
    </Form>
  );
}
