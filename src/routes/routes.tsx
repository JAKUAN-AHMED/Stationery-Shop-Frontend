import App from "@/App";
import About from "@/components/About/About";
import Dashboard from "@/components/layouts/Dashboard";
import StationeryProducts from "@/pages/AllProducts/FilteredProducts";
import ProductDetails from "@/pages/AllProducts/ProductDetails";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

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
        element: <ProductDetails></ProductDetails>,
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:'/register',
        element:<RegisterPage></RegisterPage>
      },
      {
        path:'/login',
        element:<LoginPage></LoginPage>
      }
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard></Dashboard>
  }
]);
export default router;
