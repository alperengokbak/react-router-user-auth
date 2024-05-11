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
        <Link className="block bg-slate-200 p-5 rounded-md my-2.5 hover:bg-slate-300" to={career._id} key={career._id}>
          <p>
            {career.full_name} is a {career.role} in {career.city}.
          </p>
          <p>He/She is known as {career.username}.</p>
        </Link>
      ))}
    </div>
  );
}

const teamLoader = async () => {
  try {
    const response = await instance.get("/users");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { teamLoader };
