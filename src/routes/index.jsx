import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/index.jsx";
import MainLayout from "../layouts/mainLayout/index.jsx";
import Overview from "../pages/Overview/index.jsx";
import LogIn from "../layouts/AuthLayout/Login/index.jsx";
import SignUp from "../layouts/AuthLayout/SignUp/index.jsx";

export const router = createBrowserRouter([
  {
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LogIn,
      },
      {
        path: "signup",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Overview,
      },
    ],
  },
]);
