import { ShoppingCart, Zap } from "lucide-react";
import { toast } from "sonner";
import moment from "moment";
import { Button } from "../ui/button";

const ProductCard = ({ product }:{product:Record<string,any>}) => {
    // console.log(product,'productCard');
  const {
    name,
    price,
    productImg,
    description,
    stockQuantity,
    discount,
    category,
    brand,
  } = product;

  const handleAddToCart = () => {
    toast.success("Product added to your cart!");
  };

  const handleBuyNow = () => {
    toast.success("Proceeding to checkout!");
  };

  return (
    <div className="w-[50rem] p-4 font-orbitron bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
      <img src={productImg} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-gray-600 font-serif text-sm">{description}</p>
        <p className="text-lg font-semibold text-primary">Tk {price}</p>
        <p className="text-sm text-red-500">{stockQuantity} left in stock</p>
        {discount && (
          <p className="text-sm font-serif text-green-600">
            {discount.percentage}% off - valid until{" "}
            {moment(discount.validUntil).format("MMMM Do YYYY")}
          </p>
        )}
        <p className="text-sm font-bold text-gray-500">Category: {category}</p>
        <p className="text-sm font-mono text-blue-500">Brand: {brand || "N/A"}</p>
        <div className="flex gap-2 mt-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white py-2 rounded-md shadow hover:scale-105 transition-transform"
          >
            <ShoppingCart size={18} />{" "}
            <Button variant={"outline"} className="text-black">Add to Cart</Button>
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 flex items-center justify-center gap-2 bg-[#FA641C] text-white py-2 rounded-md shadow hover:scale-105 transition-transform"
          >
            <Zap size={18} /> Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
