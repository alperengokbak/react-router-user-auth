import React from "react";

// React Router
import { useLoaderData } from "react-router-dom";

// Axios API
import instance from "../../api/axios";

// Avatar
import { avatar2 } from "../../Components/avatar";

export default function TeamDetails() {
  const user = useLoaderData();
  const keys = Object.keys(user.user.roles);
  return (
    <div className="employer-details flex flex-row p-5 items-start">
      {avatar2}
      <div className="flex flex-col ml-8 text-xl font-serif gap-10 ">
        <p>
          <span className="font-bold text-2xl">Full Name: </span>
          {user.user.full_name}
        </p>
        {keys.map((key) => (
          <p key={key}>
            <span className="font-bold text-2xl">Role:</span> {key}
          </p>
        ))}
        <p>
          <span className="font-bold text-2xl">City:</span> {user.user.city}
        </p>
        <p>
          <span className="font-bold text-2xl">Country:</span> {user.user.country}
        </p>
      </div>
    </div>
  );
}

const teamDetailsLoader = async ({ params }) => {
  try {
    const response = await instance.get(`/users/${params.id}`);
    if (!response.data) {
      throw Error("Sorry, we couldn't find the team member you are looking for.");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { teamDetailsLoader };
