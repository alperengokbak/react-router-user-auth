import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl font-serif font-semibold underline underline-offset-8 decoration-rose-400">
        Welcome To My Life
      </h1>
      <p className="leading-9 font-bold">
        This website is a personal project that I created to learn more about web development. It was created using
        React, Tailwind CSS, and Axios. The API is a simple RESTful API that I created to learn more about backend
        development. The database is Mongodb database that I created to learn how to use mongoose library. The
        authentication is a simple authentication system that I created to learn how to use JWT.
      </p>

      <div className="mt-5">
        <h4 className="text-lg font-serif font-semibold">What is the purpose of this website?</h4>
        <p className="leading-5">
          This website is a personal project that I created to learn more about web development.
        </p>

        <h4 className="text-lg font-serif font-semibold mt-5">What technologies were used to create this website?</h4>
        <p className="leading-5">This website was created using React, Tailwind CSS, and Axios.</p>

        <h4 className="text-lg font-serif font-semibold mt-5">What is the purpose of the API?</h4>
        <p className="leading-5">
          The API is a simple RESTful API that I created to learn more about backend development.
        </p>

        <h4 className="text-lg font-serif font-semibold mt-5">What is the purpose of the database?</h4>
        <p className="leading-5">
          The database is Mongodb database that I created to learn how to use mongoose library.
        </p>

        <h4 className="text-lg font-serif font-semibold mt-5">What is the purpose of the authentication?</h4>
        <p className="leading-5">
          The authentication is a simple authentication system that I created to learn how to use JWT.
        </p>

        <h4 className="text-lg font-serif font-semibold mt-5">What is the purpose of the API?</h4>
        <p className="leading-5">
          The API is a simple RESTful API that I created to learn more about backend development.
        </p>

        <h4 className="text-lg font-serif font-semibold mt-5">What is the purpose of the database?</h4>
        <p className="leading-5">
          The database is Mongodb database that I created to learn how to use mongoose library.
        </p>
      </div>
    </div>
  );
}
