import React from "react";

// Axios API
import instance from "../../api/axios";

// React Router
import { Link, Navigate, useLoaderData } from "react-router-dom";

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
          className="flex flex-row bg-slate-200 p-5 rounded-md my-2.5 hover:bg-slate-300"
          to={career._id}
          key={career._id}
        >
          <img
            class="inline-block h-24 w-24 rounded-full ring-2 ring-black"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <div className="flex flex-col gap-2.5 ml-5 justify-center">
            <p>
              {career.full_name} is a {career.role} in {career.city}.
            </p>
            <p>He/She is known as {career.username}.</p>
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
