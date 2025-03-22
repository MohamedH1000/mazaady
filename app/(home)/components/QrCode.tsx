import Image from "next/image";
import React from "react";

const QrCode = () => {
  return (
    <div className="w-[407px] h-[475px] bg-white rounded-3xl p-6 flex flex-col items-start my-[20px]">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[24px] font-bold leading-[23px]">QR Code</h1>
        <div className="flex items-center justify-center gap-7">
          <Image
            src={"/assets/view.svg"}
            alt="view"
            width={24}
            height={24}
            className="w-[24px] h-[24px] cursor-pointer"
          />
          <Image
            src={"/assets/share.svg"}
            alt="share"
            width={24}
            height={24}
            className="w-[24px] h-[24px] cursor-pointer"
          />
          <Image
            src={"/assets/document.svg"}
            alt="document"
            width={24}
            height={24}
            className="w-[24px] h-[24px] cursor-pointer"
          />
          <Image
            src={"/assets/arrow.svg"}
            alt="arrow"
            width={24}
            height={24}
            className="w-[24px] h-[24px] hidden max-sm:block cursor-pointer"
          />
        </div>
      </div>
      <div className="mt-5 h-[59px] w-full px-4 py-2 bg-[#FFF5E9] rounded-2xl flex items-center justify-center gap-2">
        <Image
          src={"/assets/orangedocument.svg"}
          alt="document"
          width={24}
          height={24}
          className="w-[24px] h-[24px] cursor-pointer"
        />
        <p className="text-[12px] font-normal leading-[100%]">
          Download the QR code or share it with your friends.
        </p>
      </div>

      <div className=" bg-gradient-to-r from-[#D20653] to-[#FF951D] w-[358px] h-[313px] rounded-[25px] mt-5 p-5">
        <div className="w-full h-full bg-white rounded-[18px] flex flex-col items-center justify-between py-3">
          <Image
            src={"/assets/Logo.png"}
            alt="Logo"
            width={152}
            height={48}
            className="w-[152px] h-[48px] cursor-pointer"
          />
          <h1 className="text-[24px] font-bold leading-[100%]">Hala Ahmed</h1>
          <Image
            src={"/assets/qr-code.jpeg"}
            alt="qr code"
            width={135}
            height={135}
            className="w-[135px] h-[135px] cursor-pointer"
          />
          <p className="text-[14px] font-normal leading-[100%]">
            Follow Us on Mazaady
          </p>
        </div>
      </div>
    </div>
  );
};

export default QrCode;
