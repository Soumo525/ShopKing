import React, { useEffect } from "react";
import MobileCat from "./MobileCat";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router';
function Catalog() {
  const isMobile = useMediaQuery({ maxWidth: 360 && 480  });
  const navigate = useNavigate();
  const handleTshirt = () => {
    navigate( "/catalog/tshirts");
  }
  const handleMobile = () => {
    navigate("/catalog")
  }
  const handleGift = () => {
    navigate("*")
  }
  return (
    <>
      <div className="flex items-center justify-start w-full pt-6 pb-8">
        <button
          type="button"
          onClick={handleMobile}
          className={`py-2.5 px-3 md:px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${isMobile ? 'text-xs' : ''}`}
        >
          Mobile Cover
        </button>
        <button
          type="button"
          onClick={handleTshirt}
          className={`py-2.5 px-3 md:px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${isMobile ? 'text-xs' : ''}`}
        >
          T-Shirt
        </button>
        <button
          type="button"
          onClick={handleGift}
          className={`py-2.5 px-3 md:px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${isMobile ? 'text-xs' : ''}`}
        >
          Gift
        </button>
      </div>


      <MobileCat />

  

  
    </>
  );
}

export default Catalog;
