import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/index.jsx";
import MainLayout from "../layouts/mainLayout/index.jsx";
import Overview from "../pages/Overview/index.jsx";
import LogIn from "../layouts/AuthLayout/Login/index.jsx";
import SignUp from "../layouts/AuthLayout/SignUp/index.jsx";

export const router =
  createBrowserRouter[
    ({
      element: <AuthLayout />,
      Children: [
        {
          path: "login",
          element: <LogIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      Children: [{ index: true, element: <Overview /> }],
    })
  ];
