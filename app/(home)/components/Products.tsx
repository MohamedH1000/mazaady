import { CirclePlus } from "lucide-react";
import React from "react";
import { products } from "@/constants/constants";
import Image from "next/image";
const Products = () => {
  return (
    <div className="w-[840px] min-h-screen bg-white rounded-[21px] p-[25px] mb-10 max-md:w-full max-md:rounded-[24px] max-md:p-[10px]">
      <div className="w-full flex items-center justify-between max-md:justify-center">
        <div className="flex items-center justify-center gap-[10px] ">
          <div
            className="w-[108px] h-[35px] rounded-[14px] border-[1px] border-[#FF951D] max-md:w-[97px]
            text-[#FF951D] bg-[#FFF5E9] p-[8px] flex items-center justify-center cursor-pointer"
          >
            Products
          </div>
          <div
            className="w-[108px] h-[35px] rounded-[14px] border-[1px] border-[#E0E0E0] max-md:w-[97px]
            text-[#828282] bg-[#FFFFFF] p-[8px] flex items-center justify-center cursor-pointer"
          >
            Articles
          </div>
          <div
            className="w-[108px] h-[35px] rounded-[14px] border-[1px] border-[#E0E0E0] max-md:w-[97px]
            text-[#828282] bg-[#FFFFFF] p-[8px] flex items-center justify-center cursor-pointer"
          >
            Reviews
          </div>
        </div>
        <button
          className="flex items-center justify-center gap-2 cursor-pointer w-[125px] h-[40px] 
          text-white bg-gradient-to-r from-[#D20653] to-[#FF951D] rounded-[10px] 
          hover:from-[#B00547] hover:to-[#E0841A] transition duration-300 text-[14px] font-bold max-md:hidden"
        >
          <CirclePlus className="w-5 h-5" />
          Add Review
        </button>
      </div>
      <div className="mt-5 w-[176px] h-[44px] flex items-center justify-between gap-[8px]">
        <h1 className="text-[32px] font-bold leading-[100%]">Products</h1>
        <span className="text-[14px] font-normal text-[#828282]">(12)</span>
      </div>
      <div className="mt-7 p-[4px] flex flex-col items-center justify-center gap-[24px]">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full flex items-start justify-start p-4 max-md:p-0 rounded-[10px] gap-[10px]"
          >
            <div className="w-[145px] h-[127px] max-md:w-[87px] max-md:h-[72.2px] relative">
              <Image
                src={product.image}
                alt={"image"}
                width={100}
                height={100}
                className="w-full h-full bg-cover bg-center rounded-[28px]"
              />
              <div
                className={`${
                  product.tags[0] === "LIVE AUCTION"
                    ? "bg-[#D20653]"
                    : "bg-[#FF951D]"
                } w-[114px] h-[37px] max-md:w-[66px] max-md:h-[20px] max-md:text-[8px] 
                rounded-tl-[33.8px] rounded-br-[33.8px] absolute 
                right-0 bottom-0 text-[12px] text-white
                flex items-center justify-center font-normal leading-[100%]`}
              >
                {product.tags[0]}
              </div>
              <div className="absolute top-1 left-0 cursor-pointer md:hidden">
                <Image
                  src={`${
                    product.wishlist ? "/wishlistfilled.svg" : "/wishlist.svg"
                  }`}
                  alt="wishlist"
                  width={40}
                  height={40}
                  className={`${
                    product.wishlist ? "w-[30px] h-[30px]" : "w-[40px] h-[40px]"
                  }`}
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-between relative w-full">
              <p className="text-[18px] max-md:text-[12px] leading-[100%] text-[#333333]">
                {product.name}
              </p>
              <p className="text-[18px] leading-[100%] text-[#828282] font-normal mt-6 max-md:text-[12px]">
                Starting Price{" "}
                <span className="text-[23.66px] font-bold leading-[100%] text-black max-md:text-[12px]">
                  {product.startingPrice}
                </span>
              </p>
              <div className="flex items-center justify-center gap-2 mt-6">
                <p className="text-[18px] font-normal leading-[100%] text-[#828282] max-md:text-[12px]">
                  Lot Starts In
                </p>
                <div className="flex items-center justify-center gap-5">
                  <div
                    className="w-[105px] h-[40px] rounded-[24px] bg-[#FFF5E9] gap-2 max-md:w-[57px] max-md:h-[28px] 
                  text-[#FF951D] flex items-center justify-center font-bold text-[14px] max-md:text-[8px]"
                  >
                    <span className="text-[20.28px] max-md:text-[12px]">
                      {product.lotStartsIn.days}
                    </span>{" "}
                    Days
                  </div>
                  <div
                    className="w-[105px] h-[40px] rounded-[24px] bg-[#FFF5E9] gap-2 max-md:w-[57px] max-md:h-[28px] 
                  text-[#FF951D] flex items-center justify-center font-bold text-[14px] max-md:text-[8px]"
                  >
                    <span className="text-[20.28px] max-md:text-[12px]">
                      {product.lotStartsIn.hours}
                    </span>{" "}
                    Hours
                  </div>
                  <div
                    className="w-[105px] h-[40px] rounded-[24px] bg-[#FFF5E9] gap-2 max-md:gap-1 max-md:w-[57px] max-md:h-[28px] 
                  text-[#FF951D] flex items-center justify-center font-bold text-[14px] max-md:text-[8px] max-md:px-2"
                  >
                    <span className="text-[20.28px] max-md:text-[12px]">
                      {product.lotStartsIn.minutes}
                    </span>{" "}
                    Minutes
                  </div>
                </div>
              </div>
              <div className="absolute top-1 right-0 cursor-pointer max-md:hidden">
                <Image
                  src={`${
                    product.wishlist ? "/wishlistfilled.svg" : "/wishlist.svg"
                  }`}
                  alt="wishlist"
                  width={40}
                  height={40}
                  className={`${
                    product.wishlist ? "w-[30px] h-[30px]" : "w-[40px] h-[40px]"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Products;
