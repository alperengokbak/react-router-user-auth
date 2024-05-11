import React from "react";

// React Router
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

// Pages
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Faq from "./Pages/Help/Faq";
import Contact from "./Pages/Help/Contact";
import NotFound from "./Pages/NotFound";

// Layouts
import RootLayout from "./Layouts/RootLayout";
import HelpLayout from "./Layouts/HelpLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="register" element={<Register />} />
      <Route path="help/" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
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
