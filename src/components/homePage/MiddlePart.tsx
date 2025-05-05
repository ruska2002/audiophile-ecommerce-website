import PatternSircle from "/public/assets/home/desktop/pattern-circles.svg";
import { useMediaQuery } from "usehooks-ts";
import data from "../../../data.json";
import { Link } from "react-router-dom";
export default function MiddlePart() {
  const Medium = useMediaQuery("(min-width: 600px)");
  const Big = useMediaQuery("(min-width: 1024px)");

  const zx9 = data.find((product) => product.slug === "zx9-speaker");
  const zx7 = data.find((product) => product.slug === "zx7-speaker");
  const yx1 = data.find((product) => product.slug === "yx1-earphones");

  if (!zx9 || !zx7 || !yx1) return null;

  const getImage = (
    middle: { mobile: string; tablet: string; desktop: string } | undefined
  ) => {
    if (!middle) return "";
    return Big ? middle.desktop : Medium ? middle.tablet : middle.mobile;
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center w-full">
        <div className="relative bg-[#D87D4A] w-full max-w-[327px] md:max-w-[689px] lg:max-w-[1110px] h-auto rounded-lg overflow-hidden flex flex-col lg:flex-row items-center justify-between text-white px-6 mt-6 py-10">
          <img
            src={PatternSircle}
            alt="Circle"
            className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-none pointer-events-none lg:left-[20%] lg:w-[90%] lg:h-[140%] lg:mt-[10%]"
          />
          <div className="relative z-20 mb-10 lg:mb-[-47px] lg:ml-10">
            <img
              src={getImage(zx9.middle)}
              alt="ZX9 Speaker"
              className="w-[150px] h-[180px] md:w-[200px] md:h-[250px] lg:w-[310px] lg:h-[403px]"
            />
          </div>
          <div className="z-30 text-center lg:text-left max-w-md mx-auto lg:mx-0 lg:mr-10">
            <h1 className="text-[36px] md:text-[56px] font-bold tracking-[1.5px] leading-tight">
              ZX9 <br />
              SPEAKER
            </h1>
            <p className="mt-6 text-[15px] md:text-[18px] leading-6 tracking-[1.5px]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to={`/${zx9.category}/${zx9.slug}`}>
              <button className="tracking-[1px] mt-8 w-[160px] h-[48px] bg-black hover:bg-[#4c4c4c] transition duration-200 text-white text-[15px] uppercase">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="mt-6 w-full max-w-[327px] md:max-w-[689px] lg:max-w-[1110px] h-[320px] rounded-lg bg-cover bg-center flex items-center pl-6"
        style={{
          backgroundImage: `url(${getImage(zx7.middle)})`,
        }}
      >
        <div className="lg:ml-14  md:ml-[5%]">
          <h1 className="text-black text-[28px] font-bold tracking-[2px]">
            ZX7 SPEAKER
          </h1>
          <Link to={`/${zx7.category}/${zx7.slug}`}>
            <button className="tracking-[1px] mt-4 border border-black text-black px-6 py-2 text-sm hover:bg-black hover:text-white transition uppercase">
              See Product
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:flex gap-6 md:flex">
        <div className="md:max-w-[689px]">
          <img
            src={getImage(yx1.middle)}
            alt="earphones"
            className="w-[327px] h-[150px] lg:w-[542px] lg:h-[303px] md:w-[330px] md:h-[237px] rounded-lg mt-6"
          />
        </div>
        <div className="bg-[#F1F1F1] w-[327px] h-[150px] rounded-lg mt-6 lg:h-[303px] lg:w-[542px] md:w-[330px] md:h-[237px]">
          <h1 className="px-6 mt-[10%] text-2xl font-bold lg:ml-[10%] lg:mt-[20%] md:ml-[10%] md:mt-[20%]">
            YX1 EARPHONES
          </h1>
          <Link to={`/${yx1.category}/${yx1.slug}`}>
            <button className="mt-4 border ml-[7%] border-black text-black px-6 py-2 text-sm hover:bg-black hover:text-white transition uppercase tracking-[1px] lg:ml-[15%]  md:ml-[18%]">
              See Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
