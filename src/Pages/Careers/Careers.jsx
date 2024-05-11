import React from "react";

// Axios API
import instance from "../../api/axios";

// React Router
import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();
  return (
    <div>
      {careers.users.map((career) => (
        <Link className="block bg-slate-400 p-5 rounded-md my-2.5" to={career._id} key={career._id}>
          <p>
            Contributor {career.full_name} is a {career.role} in {career.city}.
          </p>
          <p>
            Based in {career.city}, {career.country}, we are looking for a Software Engineer to join our team.
          </p>
        </Link>
      ))}
    </div>
  );
}

const careersLoader = async () => {
  try {
    const response = await instance.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { careersLoader };
