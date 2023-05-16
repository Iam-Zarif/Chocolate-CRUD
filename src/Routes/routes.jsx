/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home/Home";
import Form from "../Pages/Form/Form";
import SelectChocolate from "../Pages/Home/SelectChocolate/SelectChocolate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    children: [
      {
        path: "/",
        element: <SelectChocolate></SelectChocolate>,
        loader: () => fetch("http://localhost:5000/chocolate"),
      },
      { path: "/select", element: <Form></Form> },
    ],
  },
]);

export default router;