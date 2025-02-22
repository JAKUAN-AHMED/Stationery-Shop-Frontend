
import Container from "@/components/layouts/Contailner";
import { useGetMeQuery } from "@/redux/features/auth/authApi";
import {
  placeOrder,
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";
import { useCreateOrderMutation } from "@/redux/features/order/orderApi.ts";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Minus, Plus, Trash, ShieldCheck } from "lucide-react";
import moment from "moment";
import { useEffect } from "react";
import { toast } from "sonner";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { data: userInfo } = useGetMeQuery(undefined);
  const [createOrder, { isLoading, isSuccess, data, isError, error }] =
    useCreateOrderMutation();
  const cartData = useAppSelector((state) => state.cart);

  const cartProducts = cartData?.items || [];
  const userEmail = userInfo?.data?.email;

  const userBaseCartProducts = cartData?.items || [];
  const deliveryDate = moment().add(7, "days").format("ddd MMM D");

  const handlePlacedOrder = async () => {
    try {
      const res = await createOrder({ products: cartProducts });

      if (res.data.success) {
        dispatch(placeOrder());
      } else {
        toast.error("Order placement failed:", res.data.message);
      }
    } catch {
      toast.error("Error placing order:");
    }
  };

  const toastId = "cart";
  useEffect(() => {
    if (isLoading) toast.loading("Processing...", { id: toastId });

    if (isSuccess) {
      toast.success(data?.message, { id: toastId });
      if (data?.data) {
        setTimeout(() => {
          window.location.href = data.data;
        }, 500);
      }
    }

    if (isError) toast.error(JSON.stringify(error), { id: toastId });
  }, [data?.data, data?.message, error, isError, isLoading, isSuccess]);

  if (!cartProducts?.length) {
    return (
      <p className="text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-lg">
        Your cart is empty. Start adding products!
      </p>
    );
  }

  return (
    <div className="mt-[77px] md:mt-4 font-orbitron">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {userBaseCartProducts?.map((product) => (
              <div
                key={product.product}
                className="flex items-center justify-between p-4 border border-gray-200 shadow-md rounded-md"
              >
                <img
                  className="w-24 h-24 object-cover rounded-md"
                  src={product?.name}
                  alt={product.name}
                />
                <div className="flex-1 ml-4">
                  <h2 className="font-semibold text-lg text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 font-medium">
                    Tk {product.price}
                  </p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: product.product,
                            quantity: Math.max(product.quantity - 1, 1),
                          })
                        )
                      }
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <Minus size={15} />
                    </button>
                    <span className="px-4 py-1 border border-gray-300 rounded-md">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: product.product,
                            quantity: Math.min(
                              product.quantity + 1,
                              product.stock
                            ),
                          })
                        )
                      }
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(product.product))}
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  <Trash size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="p-6 border border-gray-200 shadow-md rounded-md sticky top-20">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="flex justify-between font-medium text-gray-700 mb-2">
              <span>Price ({cartProducts.length} items)</span>
              <span>Tk {cartData.totalPrice}</span>
            </div>
            <div className="flex justify-between font-medium text-gray-700 mb-2">
              <span>Delivery Charges</span>
              <span className="text-green-500">Free</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <span>Total Amount</span>
              <span>Tk {cartData.totalPrice}</span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-gray-600 text-sm">
              <ShieldCheck size={20} />
              <p>Safe payments, easy returns, 100% authentic products.</p>
            </div>
            <button
              onClick={handlePlacedOrder}
              className="mt-6 w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium uppercase"
            >
              Place Order
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
