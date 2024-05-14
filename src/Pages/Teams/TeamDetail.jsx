import React from "react";

// React Router
import { useLoaderData } from "react-router-dom";

// Axios API
import instance from "../../api/axios";

// Avatar
import { avatar } from "../../Components/avatar";

export default function TeamDetails() {
  const user = useLoaderData();
  const keys = Object.keys(user.user.roles);
  return (
    <div className="employer-details flex flex-row font-serif text-lg p-5 items-center">
      {avatar}
      <div className="flex flex-col ml-5">
        <p>Full Name: {user.user.full_name}</p>
        {keys.map((key) => (
          <p key={key}>Role: {key}</p>
        ))}
        <p>City: {user.user.city}</p>
        <p>Country: {user.user.country}</p>
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
