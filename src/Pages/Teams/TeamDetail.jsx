import React from "react";

// React Router
import { useLoaderData } from "react-router-dom";

// Axios API
import instance from "../../api/axios";

export default function TeamDetails() {
  const user = useLoaderData();
  const keys = Object.keys(user.user.roles);
  return (
    <div className="career-details">
      <h1 className="mb-4">Career Details</h1>
      <p>Details for our team with id: {user.user._id}</p>
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
      return { status: 404 };
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { teamDetailsLoader };
