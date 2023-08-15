import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import CartPage from "../pages/CartPage";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import OrderPage from "../pages/OrderPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },
      {
        element: <DetailPage />,
        path: "product/:id",
      },
      {
        element: <CartPage />,
        path: "cart",
      },
      {
        element: <LoginPage />,
        path: "login",
      },
      {
        element: <RegisterPage />,
        path: "register",
      },
      {
        element: <OrderPage />,
        path: "order",
      },
      {
        element: <NotFoundPage />,
        path: "*",
      },
    ],
  },
]);

export default router;
