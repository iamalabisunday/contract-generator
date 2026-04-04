import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/index.jsx";
import MainLayout from "../layouts/MainLayout/index.jsx";
import Overview from "../pages/Overview/index.jsx";
import LogIn from "../layouts/AuthLayout/pages/login.jsx";
import SignUp from "../layouts/AuthLayout/pages/signup.jsx";
import Verify from "../layouts/AuthLayout/pages/verify.jsx";
import Home from "../pages/Home/index.jsx";
import Signature from "../pages/Signature/index.jsx";
import Contracts from "../pages/Contracts/index.jsx";
import Templates from "../pages/Templates/index.jsx";
import History from "../pages/History/index.jsx";
import Billing from "../pages/Billing/index.jsx";
import Account from "../pages/Account/index.jsx";
import Settings from "../pages/Settings/index.jsx";
import Support from "../pages/Support/index.jsx";


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
      {
        path: "verify",
        Component: Verify,
      },
    ],
  },

  // 3. Dashboard Section
  {
    Component: MainLayout,
    children: [
      { path: "overview", Component: Overview },
      { path: "contracts", Component: Contracts },
      { path: "templates", Component: Templates },
      { path: "signature", Component: Signature },
      { path: "history", Component: History },
      { path: "billing", Component: Billing },
      { path: "account", Component: Account },
      { path: "settings", Component: Settings },
      { path: "support", Component: Support }
    ],
  },
]);