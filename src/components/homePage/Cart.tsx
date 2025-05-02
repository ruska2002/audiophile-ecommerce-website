import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface CartProps {
  onClose: () => void;
}

export default function Cart({ onClose }: CartProps) {
  const { cartItems, clearCart, increaseQuantity, decreaseQuantity, total } =
    useCart();

  const number = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  //როცა ვარეფრეშებ არ მინდა რომ იშლებოდეს მონაცემი

  return (
    <AnimatePresence>
      <>
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-40"
          onClick={onClose}
        />

        <motion.div
          key="cart"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[15%] right-[2%] z-50 w-[327px] bg-white shadow-lg p-6 rounded-md "
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Cart ({number})</h2>
            <button
              className="text-sm text-gray-500 underline"
              onClick={clearCart}
            >
              Remove all
            </button>
          </div>

          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4">
              <img
                src={item.image.mobile}
                alt={item.name}
                className="w-12 h-12 rounded"
              />
              <div className="flex flex-col">
                <p className="text-sm font-bold">{item.name}</p>
                <p className="text-sm opacity-60">${item.price}</p>
              </div>

              <div className="ml-auto flex items-center gap-2 bg-[#F1F1F1] w-[6rem] h-[2rem] justify-center text-center">
                <button
                  className="px-2 text-xl text-[#000000] opacity-25"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 text-x text-[#000000] opacity-25"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <div className="flex justify-between">
              {" "}
              <p className="text-[#000000] uppercase opacity-50">Total</p>
              <p className="text-[#000000]">${total}</p>
            </div>
            <Link to="/checkout">
              <button
                className="mt-8 uppercase text-[#ffffff] bg-[#D87D4A] w-full h-[3rem]"
                disabled={cartItems.length === 0}
              >
                Check Out
              </button>
            </Link>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  );
}
