import ProductCard from "@/components/card/ProductCard";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";

import { TProducts } from "@/types/productTypes";
import { useParams } from "react-router-dom";

/*eslint@typescript-eslint/no-explicit-any*/

const ProductDetails = () => {
    const {data:productData}=useGetAllProductsQuery(undefined);
    const {id}=useParams();

    const product = productData?.data?.filter((product: TProducts) => product._id === id);
  
   

    return (
        <div className="container mx-auto mt-7 overflow-hidden mb-8">
           {
            product?.map((details)=>{
                return <ProductCard  product={details} key={details._id}/>
            })
           }
        </div>
    );
};

export default ProductDetails;