// Imports React Dependencies
import * as React from "react";

// API
import instance from "../api/axios.js";

export default function Example() {
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
          navigate("/signin");
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
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex justify-center font-serif font-semibold text-4xl">
            <h1 className="border-t-2 border-r-2 border-l-2 max-w-fit rounded-full border-rose-400 p-3.5">My LiFe</h1>
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Welcome Back To My Life
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-slate-600 hover:text-slate-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md hover:bg-slate-600 bg-zinc-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a href="/register" className="font-semibold leading-6 text-slate-600  hover:text-slate-500">
              Let's join me!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
