import { useState } from "react";
import NavBar from "./NavBar";
import iconCart from "../../../public/assets/shared/desktop/icon-cart.svg";
import HamburgerMenu from "./HamburgerMenu";
import Cart from "./Cart";
import { useLocation } from "react-router-dom";
export default function TopBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const isCheckoutPage = location.pathname === "/checkout";
  return (
    <div>
      <div className="absolute top-0 left-0 w-full z-10 flex items-center justify-between px-10 h-[80px] bg-[#1f1f1f]">
        <div className="flex md:gap-4 sm:justify-around">
          <HamburgerMenu />
          <h1 className="text-white text-xl font-bold tracking-widest">
            audiophile
          </h1>
        </div>

        <div className="hidden lg:block">
          <NavBar />
        </div>

        <button onClick={() => setIsCartOpen(!isCartOpen)}>
          <img src={iconCart} alt="Icon Cart" className="w-[23px] h-[15px]" />
        </button>
      </div>
      {!isCheckoutPage && isCartOpen && (
        <Cart onClose={() => setIsCartOpen(false)} />
      )}

      <hr className="absolute top-[80px] w-full h-[1px] opacity-20 bg-[white]" />
    </div>
  );
}
