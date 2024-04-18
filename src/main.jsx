import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./routes/home";
import Projects from "./routes/Projects";
import OneProject from "./routes/OneProject";
import NewProject from "./routes/NewProject";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",

    element: <Home />,
  },
  {
    path: "/projects",


    element: <Projects />,
  },
  {
    path: "/projects/:id",


    element: <OneProject />,
  },
  {
    path: "/projects/newProject",
    element: <NewProject />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
