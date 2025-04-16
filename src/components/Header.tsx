import NavBar from "./NavBar";
import Desktop from "../assets/home/desktop/image-hero.jpg";
import Tablet from "../assets/home/tablet/image-header.jpg";
import Mobile from "../assets/home/mobile/image-header.jpg";
import { useMediaQuery } from "usehooks-ts";

export default function Header() {
  const Medium = useMediaQuery("(min-width: 600px)");
  const Big = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="relative w-screen overflow-hidden">
      {Big ? (
        <img src={Desktop} alt="headphone" className="w-full" />
      ) : Medium ? (
        <img src={Tablet} alt="headphone" className="w-full" />
      ) : (
        <img src={Mobile} alt="headphone" className="w-full " />
      )}
      <NavBar />
      <div className="absolute top-1/3 lg:left-[165px] text-[#ffffff] lg:w-[24.8rem] lg:text-left lg:items-start w-full flex flex-col justify-center text-center items-center">
        <p className="text-[14px] uppercase mb-4 tracking-[15px] opacity-80">
          NEW PRODUCT
        </p>
        <h1 className="text-[32px] sm:text-[46px] font-bold leading-tight tracking-[2px] mb-6 w-[380px] ">
          XX99 Mark II Headphones
        </h1>
        <p className="text-sm opacity-80 mb-6 lg:w-[20.8rem] w-[15rem] md:w-[20rem]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="bg-[#D87D4A] text-white px-6 py-3 hover:bg-[#FBAF85] transition md:w-[13rem]">
          SEE PRODUCT
        </button>
      </div>
    </div>
  );
}
