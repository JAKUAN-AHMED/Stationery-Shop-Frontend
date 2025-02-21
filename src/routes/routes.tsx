import App from "@/App";
import About from "@/components/About/About";
import StationeryProducts from "@/pages/AllProducts/FilteredProducts";
import ProductDetails from "@/pages/AllProducts/ProductDetails";
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
      }
    ],
  },
]);
export default router;
