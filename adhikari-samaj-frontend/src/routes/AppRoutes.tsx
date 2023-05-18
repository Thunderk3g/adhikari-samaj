import { useRoutes } from "react-router-dom";
import { NAVIGATION_ROUTES } from "./routes.constant";
import Dashboard from "src/pages/Dashboard";
import Login from "src/pages/Auth/Login";
import LayoutWrapper from "../components/layoutWrapper";
import About from "src/pages/About";

const routes = [
  {
    path: NAVIGATION_ROUTES.DASHBOARD,
    element: (
      <LayoutWrapper>
        <Dashboard />
      </LayoutWrapper>
    ),
  },
  {
    path: NAVIGATION_ROUTES.ABOUT,
    element: (
      <LayoutWrapper>
        <About />
      </LayoutWrapper>
    ),
  },
  {
    path: NAVIGATION_ROUTES.LOGIN,
    element: <Login />,
  },
];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;
