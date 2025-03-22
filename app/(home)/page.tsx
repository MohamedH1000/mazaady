import React from "react";
import Profile from "./components/Profile";
import QrCode from "./components/QrCode";
import Products from "./components/Products";

const page = () => {
  return (
    <div className="bg-[#F6F4F5] min-h-screen px-[100px] pt-13 flex items-start justify-center gap-5">
      <div className="w-full flex flex-col items-start justify-start">
        <Profile />
        <QrCode />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default page;
