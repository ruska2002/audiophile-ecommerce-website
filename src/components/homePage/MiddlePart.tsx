import earphones from "../../assets/home/desktop/image-earphones-yx1.jpg";
import earphonesMedium from "../../assets/home/tablet/image-earphones-yx1.jpg";
import earphonesMini from "../../assets/home/mobile/image-earphones-yx1.jpg";
import speaker from "../../assets/home/desktop/image-speaker-zx7.jpg";
import speakerMini from "../../assets/home/mobile/image-speaker-zx7.jpg";
import speakerMedium from "../../assets/home/tablet/image-speaker-zx7.jpg";
import Mainspeaker from "../../assets/home/desktop/image-speaker-zx9.png";
import MainspeakerMini from "../../assets/home/mobile/image-speaker-zx9.png";
import MainspeakerMedium from "../../assets/home/tablet/image-speaker-zx9.png";
import PatternSircle from "../../assets/home/desktop/pattern-circles.svg";
import { useMediaQuery } from "usehooks-ts";

export default function MiddlePart() {
  const Medium = useMediaQuery("(min-width: 600px)");
  const Big = useMediaQuery("(min-width: 1024px)");

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
              src={
                Big ? Mainspeaker : Medium ? MainspeakerMedium : MainspeakerMini
              }
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
            <button className="tracking-[1px] mt-8 w-[160px] h-[48px] bg-black hover:bg-[#4c4c4c] transition duration-200 text-white text-[15px] uppercase">
              See Product
            </button>
          </div>
        </div>
      </div>

      <div
        className="mt-6 w-full max-w-[327px] md:max-w-[689px] lg:max-w-[1110px] h-[320px] rounded-lg bg-cover bg-center flex items-center pl-6"
        style={{
          backgroundImage: `url(${
            Big ? speaker : Medium ? speakerMedium : speakerMini
          })`,
        }}
      >
        <div className="lg:ml-14  md:ml-[5%]">
          <h1 className="text-black text-[28px] font-bold tracking-[2px]">
            ZX7 SPEAKER
          </h1>
          <button className="tracking-[1px] mt-4 border border-black text-black px-6 py-2 text-sm hover:bg-black hover:text-white transition uppercase">
            See Product
          </button>
        </div>
      </div>

      <div className="lg:flex gap-6 md:flex ">
        <div className="md:max-w-[689px]">
          <img
            src={Big ? earphones : Medium ? earphonesMedium : earphonesMini}
            alt="earphones"
            className="w-[327px] h-[150px] lg:w-[542px] lg:h-[303px] md:w-[330px] md:h-[237px] rounded-lg mt-6"
          />
        </div>
        <div className="bg-[#F1F1F1] w-[327px] h-[150px] rounded-lg mt-6 lg:h-[303px] lg:w-[542px] md:w-[330px] md:h-[237px]">
          <h1 className="px-6 mt-[10%] text-2xl font-bold lg:ml-[10%] lg:mt-[20%] md:ml-[10%] md:mt-[20%]">
            YX1 EARPHONES
          </h1>
          <button className="mt-4 border ml-[7%] border-black text-black px-6 py-2 text-sm hover:bg-black hover:text-white transition uppercase tracking-[1px] lg:ml-[15%]  md:ml-[18%]">
            See Product
          </button>
        </div>
      </div>
    </div>
  );
}
