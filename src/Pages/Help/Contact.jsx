import React from "react";

export default function Contact() {
  return (
    <div className="contact-page">
      <form className="flex flex-col max-w-xl gap-2 mt-6">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
        <div className="flex justify-end mt-4">
          <button className="bg-slate-500 text-white px-4 py-2 rounded-md">Send</button>
        </div>
      </form>
    </div>
  );
}
