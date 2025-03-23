"use client";
import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";
import QrCode from "./components/QrCode";
import Products from "./components/Products";
import axios from "axios";

const fetchCategories = async () => {
  try {
    const response = await axios.get(
      "https://stagingapi.mazaady.com/api/v1/all-categories/web",
      {
        headers: {
          "content-language": "en",
          Accept: "application/json",
          "private-key": "Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ",
          platform: "Postman",
          currency: "AED",
        },
      }
    );

    // console.log("API response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
const page = () => {
  const [categories, setCategories] = useState([]);
  console.log("categories", categories);
  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data.data.categories))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-[#F6F4F5] min-h-screen px-[100px] pt-13 flex items-start justify-center gap-5 max-md:flex-col max-md:items-center max-md:px-5">
      <div className="w-full flex flex-col items-start justify-start max-md:items-center">
        <Profile />
        <QrCode />
      </div>
      <div className="w-full flex flex-col items-center">
        <Products />
      </div>
    </div>
  );
};

export default page;
