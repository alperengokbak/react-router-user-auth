import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function TeamError() {
  const error = useRouteError();
  return (
    <div className="team-error gap-6 flex flex-col min-h-10">
      <h2 className="text-3xl">Error</h2>
      <p className="text-lg">{error.message}</p>
      <Link to="/team" className="underline underline-offset-4 decoration-red-600 text-2xl">
        Back to Team Page.
      </Link>
    </div>
  );
}
