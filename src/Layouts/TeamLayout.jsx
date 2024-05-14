import React from "react";
import { Outlet } from "react-router-dom";

export default function TeamLayout() {
  return (
    <div>
      <h1 className="text-4xl font-serif font-semibold underline underline-offset-8 decoration-rose-400 mb-4">
        Our Team
      </h1>
      <Outlet />
    </div>
  );
}
