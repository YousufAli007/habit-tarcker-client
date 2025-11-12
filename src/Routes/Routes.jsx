import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import MyHabit from "../Pages/MyHabit";
import PublicHabit from "../Pages/PublicHabit";
import AddHabit from "../Pages/AddHabit";
import LoginForm from "../Pages/LoginForm";
import RegisterForm from "../Pages/RegisterForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "myhabit",
        element: <MyHabit />,
      },
      {
        path: "publicHabit",
        element: <PublicHabit />,
      },
      {
        path: "addHabit",
        element: <AddHabit />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
    ],
  },
]);
export default router;