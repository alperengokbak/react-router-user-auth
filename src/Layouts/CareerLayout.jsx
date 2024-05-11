import React from "react";
import { Outlet } from "react-router-dom";

export default function CareerLayout() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Job Application</h1>
      <Outlet />
    </div>
  );
}
