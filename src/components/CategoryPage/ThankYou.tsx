import OrderConfirm from "/public/assets/checkout/icon-order-confirmation.svg";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

type ThankYouProps = {
  onClose: () => void;
};

export default function ThankYou({ onClose }: ThankYouProps) {
  const { cartItems, total } = useCart();

  return (
    <div className="bg-white w-[327px] flex flex-col items-center p-6 rounded-lg font-manrope">
      <img src={OrderConfirm} className="mb-4" />
      <p className="uppercase text-lg font-semibold mb-2 text-center">
        Thank You FOR YOUR ORDER
      </p>
      <p className="text-[#000000] opacity-50 text-center mb-6">
        You will receive an email confirmation shortly.
      </p>

      <div className="w-full">
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
            <div className="ml-auto">x{item.quantity}</div>
          </div>
        ))}
        <div className="flex justify-between mt-2 lg:mt-8">
          <p className="text-[#000000] uppercase opacity-50">Total</p>
          <p className="text-[#000000]">${total}</p>
        </div>
        <div className="flex justify-between mt-2 lg:mt-8">
          <p className="text-[#000000] uppercase opacity-50">Shipping</p>
          <p className="text-[#000000]">$50</p>
        </div>
        <div className="flex justify-between mt-2 lg:mt-8">
          <p className="text-[#000000] uppercase opacity-50">Grand Total</p>
          <p className="text-[#000000]">${total + 50}</p>
        </div>
        <Link to="/" className="mt-4 block">
          <button
            onClick={onClose}
            className="uppercase text-white bg-[#D87D4A] w-full h-[3rem] rounded-md"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
