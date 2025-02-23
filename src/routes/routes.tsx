import App from "@/App";
import About from "@/components/About/About";
import Dashboard from "@/components/layouts/Dashboard";
import StationeryProducts from "@/pages/AllProducts/FilteredProducts";
import ProductDetails from "@/pages/AllProducts/ProductDetails";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import Cart from "@/pages/cart/cart";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

import ProtectedRoutes from "./PrivateRoutes";
import VerifyOrder from "@/pages/cart/VerifyOrder";

const router = createBrowserRouter([
  {
    path: "",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-product",
        element: <StationeryProducts></StationeryProducts>,
      },
      {
        path: "/product/:id",
        element: (
          <ProtectedRoutes role={["admin", "user"]}>
            <ProductDetails></ProductDetails>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoutes role={["admin", "user"]}>
            <Cart></Cart>
          </ProtectedRoutes>
        ),
      },
      {
        path:'/orders/verify',
        element:<VerifyOrder></VerifyOrder>
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes role={["user", "admin"]}>
        <Dashboard></Dashboard>
      </ProtectedRoutes>
    ),
  },
]);
export default router;
