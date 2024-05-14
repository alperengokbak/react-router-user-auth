import React from "react";
import { Form } from "react-router-dom";

// Import Instance of Axios
import instance from "../../api/axios";

// Icons
import { solidWarningIcon, outlinedWarningIcon } from "../../Components/icons";

const Tooltip = ({ message }) => {
  return (
    <div className="flex gap-2 text-md text-gray-500 font-medium hover:text-gray-800">
      <span>{message}</span>
    </div>
  );
};

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
  const [hoveringFullName, setHoveringFullName] = React.useState(false);
  const [hoveringEmail, setHoveringEmail] = React.useState(false);

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

  return (
    <div className="contact-page">
      <Form className="flex flex-col max-w-xl gap-2" onSubmit={handleContact}>
        {errorMessage ? <h2 className="flex justify-end text-md text-red-600 font-bold">{errorMessage}</h2> : <br />}
        <label htmlFor="name" className="flex flex-row gap-1 text-sm font-medium leading-6 text-gray-900 items-center">
          Full Name
          <span
            className="tooltip-icon"
            onMouseEnter={() => {
              setShowFullNameTooltip(true);
              setHoveringFullName(true);
            }}
            onMouseLeave={() => {
              setShowFullNameTooltip(false);
              setHoveringFullName(false);
            }}
          >
            {hoveringFullName ? solidWarningIcon : outlinedWarningIcon}
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
            onMouseEnter={() => {
              setShowEmailTooltip(true);
              setHoveringEmail(true);
            }}
            onMouseLeave={() => {
              setShowEmailTooltip(false);
              setHoveringEmail(false);
            }}
          >
            {hoveringEmail ? solidWarningIcon : outlinedWarningIcon}
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
        <div className="flex justify-end mt-3">
          <button className="bg-black text-white px-4 py-2 rounded-md">Send</button>
        </div>
        {successMessage && (
          <h2 className="flex justify-end text-md text-green-600 font-bold mt-3">{successMessage}fdfdfdf</h2>
        )}
      </Form>
    </div>
  );
}
