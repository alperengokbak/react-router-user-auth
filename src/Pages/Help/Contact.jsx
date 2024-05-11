import React from "react";
import { Form } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contact-page">
      <Form className="flex flex-col max-w-xl gap-2">
        <label htmlFor="name">Name</label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="message">Message</label>
        <textarea
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          id="message"
          name="message"
        ></textarea>
        <div className="flex justify-end mt-4">
          <button className="bg-black text-white px-4 py-2 rounded-md">Send</button>
        </div>
      </Form>
    </div>
  );
}
