import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BreadCrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div key={crumb}>
          <Link to={currentLink} className="text-blue-500 font-bold hover:underline ml-2">
            {crumb}
          </Link>
          <span className="mx-2">/</span>
        </div>
      );
    });

  return (
    <div className="breadcrumbs flex flex-row text-lg ">
      {currentLink ? "BreadCrumbs: " : ""} {crumbs}
    </div>
  );
}
