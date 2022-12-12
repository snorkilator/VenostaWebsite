import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Import our custom CSS
import "./scss/styles.scss";

// Page components
import Home from "./pages/Home";
import About from "./pages/About";
import Coordinates from "./pages/ContactUs";
import Media from "./pages/Media";
import Programs from "./pages/Programs";
import Calendar from "./pages/Calendar";
import Donate from "./pages/Donate";
import Root from "./Root";
import Locations from "./pages/Locations";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  // for local development
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "media",
        element: <Media />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "coordinates",
        element: <Coordinates />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
    ],
  },
  // for GH pages
  {
    path: "venostawebsite",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "media",
        element: <Media />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "coordinates",
        element: <Coordinates />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "donate",
        element: <Donate />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
