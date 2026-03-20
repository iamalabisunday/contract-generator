import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/index.jsx";
import MainLayout from "../layouts/MainLayout/index.jsx";
import Overview from "../pages/Overview/index.jsx";
import LogIn from "../layouts/AuthLayout/Login.jsx";
import SignUp from "../layouts/AuthLayout/SignUp.jsx";
import Home from "../pages/Home/index.jsx";

export const router = createBrowserRouter([
  // 1. Landing Page Section
  {
    path: "/",
    index: true,
    Component: Home,
  },

  // 2. Auth Section
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

  // 3. Dashboard/App Section
  {
    Component: MainLayout,
    children: [
      {
        path: "dashboard",
        Component: Overview,
      },
    ],
  },
]);
