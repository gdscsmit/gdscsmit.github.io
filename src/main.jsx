import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MobileApp from "./Components/MobileApp";
import Contact from "./Components/Contact.jsx";
import Team from "./Components/Team.jsx";
import BlogPage from "./Components/BlogPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Blog from "./Components/Blog.jsx";

const MyApp = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/app",
    element: <MobileApp />,
  },
  {
    path: "/team",
    element: <Team/>,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/blogs",
    element: <BlogPage />,
  },
  {
    path: "/blogs/:id",
    element: <Blog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={MyApp} />
  </React.StrictMode>
);
