import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <nav className="flex justify-around max-w-screen-sm mt-10">
        <NavLink
          className="hover:bg-slate-300 rounded-xl p-2 border-2 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-300 focus:bg-slate-200"
          to="faq"
        >
          View the FAQ
        </NavLink>
        <NavLink
          className="hover:bg-slate-300 rounded-xl p-2 border-2 active:bg-slate-600 focus:outline-none focus:ring focus:ring-slate-300 focus:bg-slate-200"
          to="contact"
        >
          Contact Us !
        </NavLink>
      </nav>

      <div className="mt-7">
        <Outlet />
      </div>
    </div>
  );
}
