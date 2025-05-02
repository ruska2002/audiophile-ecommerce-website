import { useMediaQuery } from "usehooks-ts";
import data from "../../../data.json";
import { Link } from "react-router-dom";

export default function Header() {
  const Medium = useMediaQuery("(min-width: 600px)");
  const Big = useMediaQuery("(min-width: 1024px)");

  const featured = data.find((product) => product?.home);

  if (!featured) return null;

  const imageSrc = Big
    ? featured.home?.desktop
    : Medium
    ? featured.home?.tablet
    : featured.home?.mobile;

  return (
    <div className="relative w-screen overflow-hidden">
      <img src={imageSrc} className="w-full" alt={featured.name} />

      <hr className="absolute top-[80px] w-full h-[1px] opacity-20 bg-[white]" />
      <div className="absolute top-1/3 lg:left-[165px] text-[#ffffff] lg:w-[24.8rem] lg:text-left lg:items-start w-full flex flex-col justify-center text-center items-center">
        <p className="text-[14px] uppercase mb-4 tracking-[15px] opacity-80">
          NEW PRODUCT
        </p>
        <h1 className="text-[32px] sm:text-[46px] font-bold leading-tight tracking-[2px] mb-6 w-[380px] ">
          {featured.name}
        </h1>
        <p className="text-sm opacity-80 mb-6 lg:w-[20.8rem] w-[15rem] md:w-[20rem]">
          {featured.description}
        </p>
        <Link to={`/${featured.category}/${featured.slug}`}>
          <button className="bg-[#D87D4A] text-white px-6 py-3 hover:bg-[#FBAF85] transition md:w-[13rem]">
            SEE PRODUCT
          </button>
        </Link>
      </div>
    </div>
  );
}
