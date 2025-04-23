import data from "../../../data.json";
import { Link, useParams } from "react-router-dom";
import Info from "../homePage/Info";
import { useMediaQuery } from "usehooks-ts";
import { useState } from "react";
import Category from "../homePage/Category";

export default function Product() {
  const [numOfProducts, setNumOfProducts] = useState<number>(0);

  const isTablet = useMediaQuery("(min-width: 600px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const { productId } = useParams<{ productId: string }>();
  const selectedProduct = data.find((item) => item.id === Number(productId));

  if (!selectedProduct) return <div>Product not found</div>;

  const ImgUrl = isDesktop
    ? selectedProduct.image.desktop
    : isTablet
    ? selectedProduct.image.tablet
    : selectedProduct.image.mobile;

  const getImageSrc = (imgSet: ImageSet) => {
    if (isDesktop) return imgSet.desktop;
    if (isTablet) return imgSet.tablet;
    return imgSet.mobile;
  };

  return (
    <div className="pt-[80px] flex flex-col items-center mt-10">
      <div className="w-full max-w-[1200px] px-4">
        <Link to={`/${selectedProduct.category}`}>
          <p className="text-black mb-6 opacity-50">Go Back</p>
        </Link>

        <div className="flex flex-col md:flex-row gap-10 items-center md:justify-center lg:items-center">
          <img
            src={ImgUrl}
            alt={selectedProduct.name}
            className="w-[327px] h-[327px] md:w-[17.5rem] md:h-[30rem] lg:w-[33.75rem] lg:h-[35rem]"
          />
          <div className="lg:w-[27.8rem] md:text-left lg:text-left items-center md:w-[339px] w-[327px] text-left">
            {selectedProduct.new && (
              <h1 className="text-[#D87D4A] uppercase tracking-[10px] text-[0.9rem]">
                New Product
              </h1>
            )}
            <h1 className="text-[40px] font-bold leading-tight mt-4">
              {selectedProduct.name}
            </h1>
            <p className="text-left mt-4">{selectedProduct.description}</p>
            <p>${selectedProduct.price}</p>
            <div className="flex gap-4 mt-6  lg:justify-start justify-start">
              <div className="flex w-[7.5rem] h-[3rem] bg-[#F1F1F1] items-center gap-7 justify-center">
                <button
                  className="text-[#000000] opacity-45 text-[20px] hover:text-[#D87D4A] hover:opacity-100"
                  onClick={() =>
                    setNumOfProducts(numOfProducts > 0 ? numOfProducts - 1 : 0)
                  }
                >
                  -
                </button>
                <p>{numOfProducts}</p>
                <button
                  className="text-[#000000] opacity-45 text-[20px] hover:text-[#D87D4A] hover:opacity-100"
                  onClick={() => setNumOfProducts(numOfProducts + 1)}
                >
                  +
                </button>
              </div>
              <div className="bg-[#D87D4A] hover:bg-[#FBAF85] w-[10rem] h-[3rem] text-[#ffffff] text-center flex justify-center items-center">
                <button className="uppercase">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex-row flex flex-col gap-10 mt-6 items-center text-left">
        <div className="lg:w-[635px] md:w-[660px] w-[327px]">
          <h1 className="uppercase text-[24px] text-[#000000] font-bold">
            Features
          </h1>
          <p className="text-[#000000] opacity-50 mt-8">
            {selectedProduct.features}
          </p>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col md:gap-32 lg:gap-0 text-left md:items-start">
          <h1 className="uppercase text-[24px] text-[#000000] font-bold">
            In The Box
          </h1>
          <div className="mt-4">
            {selectedProduct.includes.map(({ quantity, item }, index) => (
              <div key={index} className="flex items-center space-x-4">
                <span className="text-[#D87D4A] font-bold">{quantity}x</span>
                <span className="text-[#000000] opacity-50">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src={getImageSrc(selectedProduct.gallery.first)} alt="Gallery 1" />
        <img
          src={getImageSrc(selectedProduct.gallery.second)}
          alt="Gallery 2"
        />
        <img src={getImageSrc(selectedProduct.gallery.third)} alt="Gallery 3" />
      </div>

      <div>
        <p className="uppercase">you also may like</p>
        {selectedProduct.others.map((items) => (
          <div key={items.name}>
            <img
              src={
                isDesktop
                  ? items.image.desktop
                  : isTablet
                  ? items.image.tablet
                  : items.image.mobile
              }
              alt={items.name}
              className="w-full h-auto"
            />
            <p>{items.name}</p>
            <Link to="/">
              <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white p-2 mt-4">
                View Product
              </button>
            </Link>
          </div>
        ))}
      </div>
      <Category />
      <Info />
    </div>
  );
}
