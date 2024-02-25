import React, { useEffect } from "react";
import MobileCat from "./MobileCat";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router";
function Catalog() {
  const isMobile = useMediaQuery({ maxWidth: 360 && 480 });
  const navigate = useNavigate();
  const handleTshirt = () => {
    navigate("/catalog/tshirts");
  };
  const handleMobile = () => {
    navigate("/catalog");
  };
  const handleGift = () => {
    navigate("*");
  };
  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <button
          onClick={handleMobile}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Mobile Cover
          </span>
        </button>

        <button
          onClick={handleTshirt}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            T-Shirt
          </span>
        </button>
        <button
          onClick={handleGift}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Gifts
          </span>
        </button>
      </div>

      <MobileCat />
    </>
  );
}

export default Catalog;
