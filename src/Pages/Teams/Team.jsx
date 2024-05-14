import React from "react";

// Axios API
import instance from "../../api/axios";

// React Router
import { Link, Navigate, useLoaderData } from "react-router-dom";

// Avatar
import { avatar } from "../../Components/avatar";

export default function Careers() {
  const careers = useLoaderData();
  const [user, setUser] = React.useState("Mario");
  if (!user) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div className="flex flex-col">
      {careers.users.map((career) => (
        <Link
          className="flex flex-row bg-slate-100 p-5 rounded-lg my-2.5 hover:bg-slate-200 font-serif text-lg"
          to={career._id}
          key={career._id}
        >
          {avatar}
          <div className="flex flex-col gap-2.5 ml-5 justify-center">
            <p>
              {career.full_name} is a {career.role} in {career.city}.
            </p>
            <p className="flex flex-row gap-1">
              He/She is known as{" "}
              <span className="font-bold underline underline-offset-4 decoration-red-500">{career.username}</span>
            </p>
          </div>
        </Link>
      ))}
      <button onClick={() => setUser(null)}>Change User</button>
    </div>
  );
}

const teamLoader = async () => {
  try {
    const response = await instance.get("/users");
    if (!response.data) {
      throw Error("Sorry, we couldn't find any team members.");
    }
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { teamLoader };
