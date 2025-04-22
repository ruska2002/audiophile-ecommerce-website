import NavBar from "./NavBar";
import iconCart from "../../assets/shared/desktop/icon-cart.svg";
import HamburgerMenu from "./HamburgerMenu";

export default function TopBar() {
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-10 flex items-center justify-between px-10 h-[80px]">
        <div className="flex md:gap-4 sm:justify-around">
          <HamburgerMenu />
          <h1 className="text-white text-xl font-bold tracking-widest">
            audiophile
          </h1>
        </div>

        <div className="hidden lg:block">
          <NavBar />
        </div>

        <button>
          <img src={iconCart} alt="Icon Cart" className="w-[23px] h-[15px]" />
        </button>
      </div>
      <hr className="absolute top-[80px] w-full h-[1px] opacity-20 bg-[white]" />
    </>
  );
}
