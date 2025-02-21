"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Img } from "react-image";
import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "@/redux/features/products/productsApi";
import { useState } from "react";
import FiltersProducts from "./FiltersProducts";
import { TQueryParam } from "@/types/globalTypes";

const StationeryProducts = () => {
  const [filterQuery, setFilterQuery] = useState<TQueryParam[]>([]);

  const {
    data: productsData,
    isFetching,
    isLoading,
  } = useGetAllProductsQuery(filterQuery);

  return (
    <div className="container mx-auto p-4 overflow-hidden">
      {/* Filters Section */}
      <FiltersProducts setFilterQuery={setFilterQuery} />

      {/* Product Grid */}
      <div className="grid font-orbitron grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-6">
        {isLoading || isFetching ? (
          <p>Loading products...</p>
        ) : (
          productsData?.data.map((product, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] md:w-[20rem] h-[430px] rounded-xl p-4 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold justify-self-center text-neutral-600 dark:text-white"
                >
                  {product.name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 font-serif text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {product.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Img
                    src={product?.productImg}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-10">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    to={`/product/${product?._id}`}
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Buy now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Price: {product.price}
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))
        )}
      </div>
    </div>
  );
};

export default StationeryProducts;
