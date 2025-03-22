import Image from "next/image";
import React from "react";

const Profile = () => {
  return (
    <div className="w-[407px] h-[391px] bg-white rounded-3xl p-6 flex flex-col items-start">
      <Image
        src="/assets/image.jpeg"
        alt="profile"
        width={100}
        height={100}
        className="w-[100px] h-[100px] rounded-3xl"
      />
      <div className="w-full flex flex-col h-[38px] items-start justify-between">
        <h1 className="font-bold text-[24px] mt-3 leading-[23px]">
          Hala Ahmed
        </h1>
        <p className="font-normal leading-[20px] text-[14px] mt-3">
          I am Hala Ahmed, I am the owner of the local brand called Beauty which
          is for Mackeup and Skin Care.
        </p>
      </div>
      <div className="mt-20  flex items-center justify-center gap-4">
        <div className="w-[108px] h-[59px] rounded-[18px] bg-[#FFF5E9] flex items-center justify-start gap-2 relative">
          <Image
            src={"/assets/following.svg"}
            alt="following"
            width={24}
            height={24}
            className="h-[24px] w-[24px] absolute top-[18px] left-[8px]"
          />
          <div className="absolute w-[53px] h-[35px] top-[12px] left-[38px] flex flex-col items-start justify-between">
            <p className="text-[14px] font-bold">5</p>
            <p className="text-[#FF951D] text-[12px] font-normal">Following</p>
          </div>
        </div>
        <div className="w-[108px] h-[59px] rounded-[18px] bg-[#FFF5E9] flex items-center justify-start gap-2 relative">
          <Image
            src={"/followers.svg"}
            alt="followers"
            width={24}
            height={24}
            className="h-[24px] w-[24px] absolute top-[18px] left-[8px]"
          />
          <div className="absolute w-[53px] h-[35px] top-[12px] left-[38px] flex flex-col items-start justify-between">
            <p className="text-[14px] font-bold">20</p>
            <p className="text-[#FF951D] text-[12px] font-normal">Followers</p>
          </div>
        </div>
        <div className="w-[108px] h-[59px] rounded-[18px] bg-[#FFF5E9] flex items-center justify-start gap-2 relative">
          <Image
            src={"/rate.svg"}
            alt="rate"
            width={24}
            height={24}
            className="h-[24px] w-[24px] absolute top-[18px] left-[8px]"
          />
          <div className="absolute w-[53px] h-[35px] top-[12px] left-[38px] flex flex-col items-start justify-between">
            <p className="text-[14px] font-bold">
              4.2{" "}
              <span className="font-normal text-[10px] leading-[100%] text-gray-500">
                (15)
              </span>
            </p>
            <p className="text-[#FF951D] text-[12px] font-normal">Rate</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <button
          className="flex items-center justify-center gap-2 cursor-pointer w-full h-[48px] 
  text-white bg-gradient-to-r from-[#D20653] to-[#FF951D] rounded-[14px] font-bold
   text-[16px]"
        >
          Follow
        </button>
      </div>
    </div>
  );
};

export default Profile;
