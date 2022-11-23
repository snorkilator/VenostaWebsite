import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import our custom CSS
import "./scss/styles.scss";

// Page components
import Home from "./pages/Home";
import About from "./pages/About";
import Coordinates from "./pages/Coordinates";
import Media from "./pages/Media";
import Programs from "./pages/Programs";
import Calendar from "./pages/Calendar";
import Root from "./Root";

import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: "",
      //   element: <Home />,
      // },
      // {
      //   path: "/media",
      //   element: <Media />,
      // },
      // {
      //   path: "/programs",
      //   element: <Programs />,
      // },
      // {
      //   path: "/coordinates",
      //   element: <Coordinates />,
      // },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/calendar",
      //   element: <Calendar />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
