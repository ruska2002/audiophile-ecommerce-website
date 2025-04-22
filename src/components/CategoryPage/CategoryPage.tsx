import data from "../../../data.json";
import { useParams } from "react-router-dom";
import TopBar from "../homePage/TopBar";
import { useMediaQuery } from "usehooks-ts";

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const isTablet = useMediaQuery("(min-width: 600px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const filteredProducts = data.filter(
    (product) => product.category === categoryName
  );

  return (
    <div>
      <div className="bg-black text-white">
        <TopBar />
        <div className="py-[6.5rem]">
          <h1 className="text-3xl text-center uppercase">{categoryName}</h1>
        </div>
      </div>

      <div className="flex">
        {filteredProducts.map((product, index) => {
          const imageUrl = isDesktop
            ? product.categoryImage.desktop
            : isTablet
            ? product.categoryImage.tablet
            : product.categoryImage.mobile;

          return (
            <div
              key={product.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img src={imageUrl} alt={product.name} className="w-full" />
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
