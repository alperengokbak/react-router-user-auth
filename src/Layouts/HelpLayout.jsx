import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <nav className="flex justify-around max-w-screen-sm mt-10">
        <NavLink className="hover:bg-slate-300 rounded-xl p-2 border-2" to="faq">
          View the FAQ
        </NavLink>
        <NavLink className="hover:bg-slate-300 rounded-xl p-2 border-2" to="contact">
          Contact Us !
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
