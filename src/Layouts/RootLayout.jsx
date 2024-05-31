import React from "react";
import { useNavigate } from "react-router-dom";

// React Router
import { NavLink, Outlet } from "react-router-dom";
import BreadCrumbs from "../Components/BreadCrumbs";

export default function RootLayout() {
  const navigate = useNavigate();
  return (
    <div className="root-layout min-h-min min-w-min">
      <header className="flex items-center bg-slate-300 min-h-28 min-w-min sticky top-0 opacity-90 overflow-hidden">
        <h1
          className="container font-serif font-semibold underline underline-offset-8 text-4xl decoration-rose-400 cursor-pointer"
          onClick={() => navigate("/")}
        >
          My LiFe
        </h1>
        <nav className="flex justify-end gap-3 container font-bold">
          <NavLink className="hover:bg-slate-100 p-2 rounded-full focus:bg-slate-400" to="/">
            Home
          </NavLink>
          <NavLink className="hover:bg-slate-100 p-2 rounded-full focus:bg-slate-400" to={"/signin"}>
            Sign In
          </NavLink>
          <NavLink className="hover:bg-slate-100 p-2 rounded-full focus:bg-slate-400" to="/register">
            Register
          </NavLink>
          <NavLink className="hover:bg-slate-100 p-2 rounded-full focus:bg-slate-400" to="/team">
            Team
          </NavLink>
          <NavLink className="hover:bg-slate-100 p-2 rounded-full focus:bg-slate-400" to="/help">
            Help
          </NavLink>
        </nav>
      </header>
      <main className="container mt-10 flex flex-col gap-4">
        <BreadCrumbs />
        <Outlet />
      </main>
    </div>
  );
}
