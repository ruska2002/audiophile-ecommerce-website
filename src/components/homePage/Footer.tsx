import NavBar from "./NavBar";
import Facebook from "../../../public/assets/shared/desktop/icon-facebook.svg";
import Insta from "../../../public/assets/shared/desktop/icon-instagram.svg";
import Twitter from "../../../public/assets/shared/desktop/icon-twitter.svg";

export default function Footer() {
  return (
    <div className="bg-[#1f1f1f] h-[665px] lg:h-[365px] lg:mt-[12.5rem] mt-[6rem] font-bold text-[#ffffff] md:h-[400px] ">
      <div className="md:w-[689px]">
        <div className="mx-auto bg-[#D87D4A] w-[101px] h-[4px] md:ml-[19%]"></div>
        <div className="lg:flex lg:items-center lg:justify-between px-4 lg:mx-[17%] lg:ml-[34%] lg:gap-[525px]">
          <h1 className="text-center lg:text-left text-[2rem] tracking-[1.5px] pt-[3.25rem] md:ml-[-38%]">
            audiophile
          </h1>
          <div className="flex justify-center mt-10 lg:mt-[3.25rem] tracking-[2px] md:ml-[6%]">
            <NavBar />
          </div>
        </div>

        <p className="opacity-[50%] mt-10 w-[21rem] text-center mx-auto md:w-[689px] md:text-left md:ml-[19%]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="md:flex md:justify-between md:items-center mt-10 md:ml-[19%] md:w-[689px]">
          <p className="text-center md:text-left md:mx-0 mx-auto opacity-[50%]">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex gap-4 justify-center md:justify-end mt-6 md:mt-0 lg:mr-[-71%]">
            <button>
              <img src={Facebook} alt="facebook icon" />
            </button>
            <button>
              <img src={Twitter} alt="twitter icon" />
            </button>
            <button>
              <img src={Insta} alt="instagram icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
