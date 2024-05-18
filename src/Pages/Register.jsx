// Imports React Dependencies
import * as React from "react";

// Imports React Router Dependencies
import { Form, useNavigate } from "react-router-dom";

// API
import instance from "../api/axios.js";

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;
const REGISTER_URL = "/register";

//TODO: Add file upload structure.
//TODO: Configure user authentication in the frontend.

export default function Register() {
  const navigate = useNavigate();
  const [cvFileName, setCvFileName] = React.useState("");
  const [clFileName, setClFileName] = React.useState("");

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
  const [errorMessage, setErrorMessage] = React.useState("");
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [processing, setProcessing] = React.useState(true);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (!EMAIL_REGEX.test(values.email)) {
        setEmailErrorMessage("Invalid email address");
        return;
      }
      if (!PWD_REGEX.test(values.password)) {
        setPasswordErrorMessage("At least 8 characters, one uppercase, one lowercase, one number.");
        return;
      }
      const response = await instance.post(REGISTER_URL, values);
      if (response.status === 201) {
        setProcessing(false);
        setTimeout(() => {
          navigate("/");
        }, 3500);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 4000);
      } else {
        setErrorMessage("An error occurred. Please try again later.");
        setTimeout(() => {
          setErrorMessage("");
        }, 4000);
      }
      console.error(error);
    }
  };

  const handleCVChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCvFileName(file.name);
    }
  };

  const handleCoverLetterChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setClFileName(file.name);
    }
  };
  return (
    <Form method="post" onSubmit={handleSubmit}>
      {errorMessage ? <h2 className="flex justify-start text-md text-red-600 font-bold">{errorMessage}</h2> : <br />}
      <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3 ">
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
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
            {emailErrorMessage && <span className="text-red-600 text-xs font-semibold ml-2">{emailErrorMessage}</span>}
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
          <label htmlFor="password" className="flex text-sm font-medium leading-6 text-gray-900 items-center">
            Password
            {passwordErrorMessage && (
              <span className="text-red-600 text-xs font-semibold ml-3">{passwordErrorMessage}</span>
            )}
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

        <div className="sm:col-span-6">
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

        <div className="sm:col-span-3">
          <label
            htmlFor="file-upload"
            className="flex flex-col p-3 items-center justify-center w-full h-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-500"
          >
            <div className="flex flex-col items-center justify-center pt-4 pb-4">
              <p className="mb-2 text-sm text-gray-500 font-bold">Upload Your CV</p>
              <p className="mb-1 text-xs text-gray-500">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500">Only accept .pdf, .doc, .docx</p>
              {cvFileName && <p className="mt-2 text-sm text-gray-600 font-bold">{cvFileName}</p>}
            </div>
            <input id="file-upload" type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleCVChange} />
          </label>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="file-upload2"
            className="flex flex-col p-3 items-center justify-center w-full h-full border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-500"
          >
            <div className="flex flex-col items-center justify-center pt-4 pb-4">
              <p className="mb-2 text-sm text-gray-500 font-bold">Upload Your Cover letter</p>
              <p className="mb-1 text-xs text-gray-500">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500">Only accept .pdf, .doc, .docx</p>
              {clFileName && <p className="mt-2 text-sm text-gray-600 font-bold">{clFileName}</p>}
            </div>
            <input
              id="file-upload2"
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleCoverLetterChange}
            />
          </label>
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
          {processing ? (
            <button className="hover:bg-slate-600 hover:rounded-full p-1 bg-zinc-950 text-white rounded-full w-full">
              Register
            </button>
          ) : (
            <button
              type="button"
              className="hover:bg-slate-600 hover:rounded-full p-1 bg-zinc-950 text-white rounded-full w-full"
              disabled
            >
              Processing...
            </button>
          )}
        </div>
      </div>
    </Form>
  );
}
