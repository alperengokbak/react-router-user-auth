import React from "react";

// React Router
import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    // container
    <div className="root-layout">
      <header className="flex items-center bg-slate-300 min-h-20">
        <h1 className="container font-serif font-semibold underline underline-offset-8 text-4xl decoration-rose-400">
          My LiFe
        </h1>
        <nav className="flex justify-end gap-3 container">
          <NavLink className="hover:bg-slate-100 p-2 rounded-full font-bold focus:bg-slate-400" to="/">
            Home
          </NavLink>
          <NavLink className="hover:bg-slate-100 p-2 rounded-full font-bold focus:bg-slate-400" to="/register">
            Register
          </NavLink>
          <NavLink className="hover:bg-slate-100 p-2 rounded-full font-bold focus:bg-slate-400" to="/help">
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