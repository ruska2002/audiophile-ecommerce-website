import HomeImageDesktop from "../../../public/assets/shared/desktop/image-best-gear.jpg";
import HomeImageTablet from "../../../public/assets/shared/tablet/image-best-gear.jpg";
import HomeImageMobile from "../../../public/assets/shared/mobile/image-best-gear.jpg";
import { useMediaQuery } from "usehooks-ts";

export default function Info() {
  const Medium = useMediaQuery("(min-width: 600px)");
  const Big = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="flex flex-col justify-center items-center mt-28 lg:flex lg:flex-row lg:gap-12">
      <div className="order-1 lg:order-2 lg:ml-[8%]">
        <img
          src={`${
            Big ? HomeImageDesktop : Medium ? HomeImageTablet : HomeImageMobile
          }`}
          alt="Person Image"
          className="w-[327px] sm:h-[300px] lg:w-auto lg:h-auto rounded-lg md:h-auto md:w-[42.8rem]"
        />
      </div>
      <div className="w-[327px] text-center mt-[40px] order-2 lg:order-1 lg:w-[25rem] lg:text-left md:w-[39.8rem]">
        <p className="text-[30px] tracking-[1px] md:tracking-[2px] uppercase font-bold lg:text-[2.5rem] md:w-[30rem] md:ml-[10%]">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </p>
        <br />
        <p className="text-[#000000] opacity-[50%] text-sm mt-[20px] lg:ml-[10%]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
}
