import React from "react";
import { Form } from "react-router-dom";

// Import Instance of Axios
import instance from "../../api/axios";

const Tooltip = ({ message }) => {
  return (
    <div className="flex gap-2 text-md text-gray-500 font-medium hover:text-gray-800">
      <span>{message}</span>
    </div>
  );
};

const warningIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
    />
  </svg>
);

export default function Contact() {
  const [values, setValues] = React.useState({
    full_name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [showFullNameTooltip, setShowFullNameTooltip] = React.useState(false);
  const [showEmailTooltip, setShowEmailTooltip] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleContact = async () => {
    try {
      const response = await instance.post("/help/contact", {
        full_name: values.full_name,
        email: values.email,
        message: values.message,
      });
      if (!response.data) {
        throw Error("Something went wrong. Please try again.");
      }
      setSuccessMessage(response.data.message);
      setValues({
        full_name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);

      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      } else {
        setErrorMessage("An error occurred. Please try again later.");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
      console.error(error);
    }
  };
  //! Register'da aynı işlemi yap unutma.

  return (
    <div className="contact-page">
      <Form className="flex flex-col max-w-xl gap-2" onSubmit={handleContact}>
        {errorMessage ? <h2 className="flex justify-end text-md text-red-600 font-bold">{errorMessage}</h2> : <br />}
        <label htmlFor="name" className="flex flex-row gap-1 text-sm font-medium leading-6 text-gray-900 items-center">
          Full Name
          <span
            className="tooltip-icon"
            onMouseEnter={() => setShowFullNameTooltip(true)}
            onMouseLeave={() => setShowFullNameTooltip(false)}
          >
            {warningIcon}
          </span>
          {showFullNameTooltip && (
            <Tooltip message="Please make sure to enter your full name registered in the system." />
          )}
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          id="full_name"
          name="full_name"
          value={values.full_name}
          onChange={handleChange}
        />
        <label htmlFor="email" className="flex flex-row gap-1 text-sm font-medium leading-6 text-gray-900 items-center">
          Email
          <span
            className="tooltip-icon"
            onMouseEnter={() => setShowEmailTooltip(true)}
            onMouseLeave={() => setShowEmailTooltip(false)}
          >
            {warningIcon}
          </span>
          {showEmailTooltip && <Tooltip message="Please make sure to enter your email registered in the system." />}
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
          Message
        </label>
        <textarea
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
        ></textarea>
        {successMessage ? (
          <h2 className="flex justify-end text-md text-green-600 font-bold">{successMessage}</h2>
        ) : (
          <br />
        )}
        <div className="flex justify-end mt-3">
          <button className="bg-black text-white px-4 py-2 rounded-md">Send</button>
        </div>
      </Form>
    </div>
  );
}
