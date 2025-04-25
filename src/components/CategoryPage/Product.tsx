import data from "../../../data.json";
import { Link, useParams } from "react-router-dom";
import Info from "../homePage/Info";
import { useMediaQuery } from "usehooks-ts";
import { useState, useEffect } from "react";
import Category from "../homePage/Category";
import { ImageSet, ProductType } from "../../types/Types";

export default function Product() {
  const [numOfProducts, setNumOfProducts] = useState<number>(0);

  const isTablet = useMediaQuery("(min-width: 600px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const { productId } = useParams<{ productId: string }>();
  const [selectedProduct, setSelectedProduct] = useState<
    ProductType | undefined
  >(data.find((item) => item.slug === productId));

  useEffect(() => {
    const foundProduct = data.find((item) => item.slug === productId);
    setSelectedProduct(foundProduct);
  }, [productId]);
  const ImgUrl = isDesktop
    ? selectedProduct?.image.desktop
    : isTablet
    ? selectedProduct?.image.tablet
    : selectedProduct?.image.mobile;

  const getImageSrc = (imgSet?: ImageSet) => {
    if (isDesktop) return imgSet?.desktop;
    if (isTablet) return imgSet?.tablet;
    return imgSet?.mobile;
  };

  return (
    <>
      <div className="pt-[80px] flex flex-col items-center mt-10">
        <div className="w-full max-w-[1200px] px-4">
          <Link to={`/${selectedProduct?.category}`}>
            <p className="text-black mb-6 opacity-50 ">Go Back</p>
          </Link>
          <div className="flex flex-col md:flex-row gap-10 items-center md:justify-center lg:items-center">
            <img
              src={ImgUrl}
              alt={selectedProduct?.name}
              className="w-[327px] h-[327px] md:w-[17.5rem] md:h-[30rem] lg:w-[33.75rem] lg:h-[35rem]"
            />
            <div className="lg:w-[27.8rem] md:text-left lg:text-left items-center md:w-[339px] w-[327px] text-left">
              {selectedProduct?.new && (
                <h1 className="text-[#D87D4A] uppercase tracking-[10px] text-[0.9rem]">
                  New Product
                </h1>
              )}
              <h1 className="text-[40px] font-bold leading-tight mt-4">
                {selectedProduct?.name}
              </h1>
              <p className="text-left mt-4">{selectedProduct?.description}</p>
              <p>${selectedProduct?.price}</p>
              <div className="flex gap-4 mt-6  lg:justify-start justify-start">
                <div className="flex w-[7.5rem] h-[3rem] bg-[#F1F1F1] items-center gap-7 justify-center">
                  <button
                    className="text-[#000000] opacity-45 text-[20px] hover:text-[#D87D4A] hover:opacity-100"
                    onClick={() =>
                      setNumOfProducts(
                        numOfProducts > 0 ? numOfProducts - 1 : 0
                      )
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
        <div className="lg:flex-row flex flex-col gap-10 mt-6 items-start text-left justify-between lg:w-[1024px] md:w-[660px] w-[328px]">
          <div className="lg:w-[650px]">
            <h1 className="uppercase text-[24px] text-[#000000] font-bold">
              Features
            </h1>
            <p className="text-[#000000] opacity-50 mt-8">
              {selectedProduct?.features}
            </p>
          </div>

          <div className="flex flex-col md:flex-row lg:flex-col md:justify-between gap-4 text-left">
            <h1 className="uppercase text-[24px] text-[#000000] font-bold md:w-1/2">
              In The Box
            </h1>
            <div className="mt-4">
              {selectedProduct?.includes.map(({ quantity, item }, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-[#D87D4A] font-bold">{quantity}x</span>
                  <span className="text-[#000000] opacity-50">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="grid gap-4 
                grid-cols-1 
                md:grid-flow-col md:grid-rows-3 
                md:grid-cols-none lg:mt-28 mt-6"
        >
          <img
            src={getImageSrc(selectedProduct?.gallery.first)}
            alt="Gallery 1"
            className="w-[310px] h-[164] col-span-2 lg:w-[27.8rem] lg:h-[17.5rem] md:w-[17.3rem] md:h-[10.8rem]"
          />
          <img
            src={getImageSrc(selectedProduct?.gallery.second)}
            alt="Gallery 2"
            className="w-[310px] h-[164] col-span-2 lg:w-[27.8rem] lg:h-[16.5rem] md:w-[17.3rem] md:h-[10.8rem]"
          />
          <img
            src={getImageSrc(selectedProduct?.gallery.third)}
            alt="Gallery 3"
            className="w-[316px] h-[348px] row-span-3 lg:w-[35.2rem] lg:h-[35rem] md:w-[23.6rem] md:h-[22.6rem]"
          />
        </div>

        <div className="mt-28 lg:mt-[-200px] mr-3 text-center items-center md:mt-[-100px] mb-8">
          <p className="uppercase text-center font-bold text-[24px] tracking-[2px]">
            you may also like
          </p>
          <div className="md:flex md:gap-[34px] md:w-[655px] lg:w-[1024px]">
            {selectedProduct?.others.map((items) => (
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
                  className="w-[316px] mt-8 h-auto rounded-xl"
                />
                <p className="font-bold text-[#000000] text-[24px] uppercase tracking-[2px] mt-10">
                  {items.name}
                </p>
                <Link to={""}>
                  <button className="bg-[#D87D4A] hover:bg-[#FBAF85] text-white p-2 mt-10 lg:w-[10rem] lg:h-[50px]">
                    View Product
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Category />
      <Info />
    </>
  );
}
