import data from "../../../data.json";
import { useParams } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import Category from "../homePage/Category";
import Info from "../homePage/Info";
import { Link } from "react-router-dom";

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const isTablet = useMediaQuery("(min-width: 600px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const filteredProducts = data.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="font-manrope">
      <div className="bg-[#1f1f1f] text-white">
        <div className="py-[6.5rem]">
          <h1 className="text-3xl text-center uppercase">{categoryName}</h1>
        </div>
      </div>
      <div className="flex flex-col lg:gap-40 gap-30 lg:mt-40 md:mt-30 mt-16 items-center">
        {filteredProducts.map((product, index) => {
          const imageUrl = isDesktop
            ? product.categoryImage.desktop
            : isTablet
            ? product.categoryImage.tablet
            : product.categoryImage.mobile;

          return (
            <div
              key={product.id}
              className={`flex flex-col md:flex-col lg:flex-row items-center gap-8 md:gap-13 lg:gap-32  lg:w-[69.3rem] ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <img
                src={imageUrl}
                alt={product.name}
                className="w-[20.4rem] h-[20.4rem] md:h-[22rem] md:w-[43rem] lg:h-[35rem] lg:w-[33.7rem] rounded-lg"
              />
              <div className="text-center lg:text-left w-[327px] md:w-[572px] lg:w-[445px]">
                {product.new && (
                  <h1 className="text-[#D87D4A] uppercase tracking-[10px] text-[0.9rem]">
                    New Product
                  </h1>
                )}
                <h2 className="text-2xl font-bold mb-4 text-balance lg:text-[40px] mt-5">
                  {product.name}
                </h2>
                <p
                  className="text-[#000000] opacity-50 lg:text-[15px] mt-6
                "
                >
                  {product.description}
                </p>
                <Link to={`/${product.category}/${product.slug}`}>
                  <button className="w-[10rem] h-[3rem] text-[#ffffff] bg-[#D87D4A] hover:bg-[#FBAF85] mt-8 mb-10">
                    See Product
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Category />
      <Info />
    </div>
  );
}
