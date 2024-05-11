import React from "react";

// React Router
import { useLoaderData } from "react-router-dom";

// Axios API
import instance from "../../api/axios";

export default function CareerDetails() {
  const user = useLoaderData();
  const keys = Object.keys(user.user.roles);
  return (
    <div className="career-details">
      <h1 className="mb-4">Career Details</h1>
      <p>Details for career with id: {user.id}</p>
      <p>Full Name: {user.user.full_name}</p>
      {keys.map((key) => (
        <p key={key}>Role: {key}</p>
      ))}
      <p>City: {user.user.city}</p>
      <p>Country: {user.user.country}</p>
    </div>
  );
}

const careerDetailsLoader = async ({ params }) => {
  const response = await instance.get(`/users/${params.id}`);
  console.log(response.data);
  return response.data;
};

export { careerDetailsLoader };
