import { useRef } from "react";
import NavBar from "./NavBar";
import iconCart from "/assets/shared/desktop/icon-cart.svg";
import HamburgerMenu from "./HamburgerMenu";
import Cart from "./Cart";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function TopBar() {
  const { totalQuantity } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";

  const toggleCart = () => {
    if (cartRef.current) {
      cartRef.current.classList.toggle("hidden");
    }
  };

  return (
    <div className="font-manrope">
      <div className="absolute top-0 left-0 w-full z-10 flex items-center justify-between px-10 h-[80px] bg-[#1f1f1f]">
        <div className="flex md:gap-4 sm:justify-around">
          <HamburgerMenu />
          <Link to="/">
            {" "}
            <h1 className="text-white text-xl font-bold tracking-widest">
              audiophile
            </h1>
          </Link>
        </div>

        <div className="hidden lg:block">
          <NavBar />
        </div>

        <button onClick={toggleCart} className="relative">
          {totalQuantity > 0 && (
            <div className="flex items-center justify-center absolute rounded-full bg-[orange] w-[15px] h-[15px] mt-[-8px]">
              <p className="flex text-[10px] font-bold">{totalQuantity}</p>
            </div>
          )}
          <img src={iconCart} alt="Icon Cart" className="w-[30px] h-[21px]" />
        </button>
      </div>

      {!isCheckoutPage && (
        <div ref={cartRef} className="hidden">
          <Cart onClose={toggleCart} />
        </div>
      )}

      <hr className="absolute top-[80px] w-full h-[1px] opacity-20 bg-[white]" />
    </div>
  );
}
