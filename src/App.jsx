import React from "react";

// React Router
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

// Pages
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Faq from "./Pages/Help/Faq";
import Contact from "./Pages/Help/Contact";
import NotFound from "./Pages/NotFound";
import Team, { teamLoader } from "./Pages/Teams/Team";
import TeamDetails, { teamDetailsLoader } from "./Pages/Teams/TeamDetail";

// Layouts
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";
import TeamLayout from "./Layouts/TeamLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="register" element={<Register />} />
      <Route path="help/" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="team" element={<TeamLayout />}>
        <Route index element={<Team />} loader={teamLoader}></Route>
        <Route path=":id" element={<TeamDetails />} loader={teamDetailsLoader} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
