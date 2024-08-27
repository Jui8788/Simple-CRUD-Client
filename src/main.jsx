import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./components/User.jsx";
import Update from "./components/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/users",
    element: <User />,
    loader: () => fetch("http://localhost:5000/users"),
  },

  {
    path: "/update/:id",
    element: <Update />,
    loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
