import { createBrowserRouter } from "react-router-dom";
import AppLayout from "@views/AppLayout";
import Home from "@views/Home";
import Error from "@views/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/search",
        element: <div>Search</div>,
      },
    ],
  },
]);