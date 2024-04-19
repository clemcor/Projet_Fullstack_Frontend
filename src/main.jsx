import React from 'react'
import ReactDOM from 'react-dom/client'
import Projects from "./routes/Projects";
import OneProject from "./routes/OneProject";
import NewProject from "./routes/NewProject";
import UpdateProject from "./routes/UpdateProject";
import Email from "./routes/Email";
import Presentation from "./routes/PresentationPage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'


const router = createBrowserRouter([
  {
    path: "/",

    element: <Projects />,
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
  {
    path: "/projects/update/:id",

    element: <UpdateProject />,
  },
  {
    path: "/email",
    element: <Email />,
  },
  {
    path: "/presentation",
    element: <Presentation />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
