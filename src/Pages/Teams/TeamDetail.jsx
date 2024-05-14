import React from "react";

// React Router
import { useLoaderData } from "react-router-dom";

// Axios API
import instance from "../../api/axios";

export default function TeamDetails() {
  const user = useLoaderData();
  const keys = Object.keys(user.user.roles);
  return (
    <div className="employer-details">
      <p>Full Name: {user.user.full_name}</p>
      {keys.map((key) => (
        <p key={key}>Role: {key}</p>
      ))}
      <p>City: {user.user.city}</p>
      <p>Country: {user.user.country}</p>
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
