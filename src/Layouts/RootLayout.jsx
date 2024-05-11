import React from "react";

// React Router
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    // container
    <div className="root-layout">
      <header className="flex justify-start gap-5 bg-slate-300 min-h-20 items-center">
        <nav className="flex gap-5 container">
          <NavLink className="hover:bg-slate-100 p-2 rounded-full" to="/">
            Home
          </NavLink>
          <NavLink className="hover:bg-slate-100 p-2 rounded-full" to="/register">
            Register
          </NavLink>
          <NavLink className="hover:bg-slate-100 p-2 rounded-full" to="/help">
            Help
          </NavLink>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}
