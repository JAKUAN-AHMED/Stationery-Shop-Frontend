import App from "@/App";
import StationeryProducts from "@/pages/AllProducts/FilteredProducts";
import ProductDetails from "@/pages/AllProducts/ProductDetails";
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
    ],
  },
]);
export default router;
