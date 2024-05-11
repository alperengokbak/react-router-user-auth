import React from "react";
import { Outlet } from "react-router-dom";

export default function TeamLayout() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Our Team Members</h1>
      <Outlet />
    </div>
  );
}
