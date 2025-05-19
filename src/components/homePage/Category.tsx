import { Link } from "react-router-dom";
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import arrowRight from "/assets/shared/desktop/icon-arrow-right.svg";

const categories = [
  {
    name: "Headphones",
    image: headphones,
    link: "/headphones",
  },
  {
    name: "Speakers",
    image: speakers,
    link: "/speakers",
  },
  {
    name: "Earphones",
    image: earphones,
    link: "/earphones",
  },
];

export default function Category() {
  return (
    <div className="w-full flex justify-center mt-6 overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-16 md:gap-6 lg:gap-8 md:h-[300px] md:justify-center md:w-full md:items-center justify-center items-center lg:mt-20 lg:w-full flex-wrap">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="relative h-[165px] mt-[50px] md:mt-0 bg-[#F1F1F1] rounded-lg text-black flex flex-col items-center w-[327px] sm:w-[327px] md:w-[350px] lg:w-[350px] lg:h-[200px] lg:mt-10"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute top-[-45px] w-[130px]"
            />
            <h1 className="uppercase text-lg font-bold tracking-[1px] mt-[80px]">
              {cat.name}
            </h1>
            <Link
              to={cat.link}
              className="flex items-center gap-2 mt-4 text-sm text-[#000000] hover:text-orange-500 transition"
            >
              <span>Shop</span>
              <img src={arrowRight} alt="arrow icon" className="h-3" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
