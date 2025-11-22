import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import MyHabit from "../Pages/MyHabit";
import PublicHabit from "../Pages/PublicHabit";
import AddHabit from "../Pages/AddHabit";
import LoginForm from "../Pages/LoginForm";
import RegisterForm from "../Pages/RegisterForm";
import Private from "../Private/Private";
import HabitDetails from "../Components/HabitDetails";

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
        element: (
          <Private>
            <AddHabit />
          </Private>
        ),
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "habitDetails/:id",
        element: (
          <Private>
            <HabitDetails />
          </Private>
        ),
      },
    ],
  },
]);
export default router;