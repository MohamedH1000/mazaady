"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navlinks } from "../../../constants/constants";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CirclePlus } from "lucide-react";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full h-[68px] px-[100px] flex items-center justify-between">
      <div className="flex items-center justify-center gap-10">
        {/* Logo */}
        <Image
          src={"/assets/Logo.png"}
          alt="Logo"
          width={108}
          height={43}
          className="cursor-pointer"
        />
        {/* Links */}
        <div className="flex items-center justify-center gap-10 font-medium">
          {Navlinks.map((link, i) => {
            const isActive = pathname === link.href; // Check if the link is active
            return (
              <div
                key={i}
                className="relative flex flex-col h-full justify-between"
              >
                <Link
                  href={link.href}
                  className={`${
                    isActive ? "text-[#D20653]" : "text-[#828282]"
                  } hover:text-[#D20653] transition-colors `}
                >
                  {link.label}
                </Link>
                {/* Border as a separate element */}
                {isActive && (
                  <span className="absolute bottom-[-22px] left-0 w-[90%] h-[6px] bg-[#D20653] rounded-tl-md rounded-tr-md" />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 w-[490px] h-[40px]">
        <div className="flex items-center justify-center gap-5">
          <Image
            src={"/assets/search.svg"}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src={"/assets/line.svg"}
            alt="line"
            width={1}
            height={38}
            className="cursor-pointer h-[38px]"
          />
          <Image
            src={"/assets/notification.svg"}
            alt="notifications"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src={"/assets/line.svg"}
            alt="line"
            width={1}
            height={38}
            className="cursor-pointer h-[38px]"
          />
          <Avatar className="h-[40px] w-[40px] cursor-pointer">
            <AvatarImage src="/assets/image.jpeg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <button
            className="flex items-center justify-center gap-2 cursor-pointer w-[172px] h-[40px] 
          text-white bg-gradient-to-r from-[#D20653] to-[#FF951D] rounded-lg 
          hover:from-[#B00547] hover:to-[#E0841A] transition duration-300 text-sm"
          >
            <CirclePlus className="w-5 h-5" />
            Add New Product
          </button>
        </div>
        <div className="flex items-center justify-center gap-5">
          <Image
            src={"/assets/international.svg"}
            alt="international"
            width={24}
            height={24}
            className="cursor-pointer"
          />
          <Image
            src={"/assets/line.svg"}
            alt="line"
            width={1}
            height={22}
            className="cursor-pointer h-[22px]"
          />
          <Image
            src={"/assets/language.svg"}
            alt="language"
            width={24}
            height={24}
            className="cursor-pointer w-[25px] h-[23px]"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
