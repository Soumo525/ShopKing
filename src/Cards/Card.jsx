import React, { useEffect, useState } from "react";
import { useAuth } from "../Pages/AuthProvider";
import { storage } from "../appwrite/appwriteConf";
import conf from "../conf/conf";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useMediaQuery } from "react-responsive"; // Import useMediaQuery
import "../App.css";
import "../index.css";
import { useNavigate } from 'react-router';

function Card() {
  // const bucketIdsArray = conf.appwriteBucketId.split(",").map((id) => id.trim());
  // const firstBucketId = bucketIdsArray[0];
  const { getPost, postNew, imgListNew, imageList } = useAuth();
  const navigate = useNavigate()
  const [shouldScrollTop, setShouldScrollTop] = useState(true);

  useEffect(() => {
    getPost();
    imageList();
  }, []);

  useEffect(() => {
    if (postNew.length > 0 && shouldScrollTop) {
      window.scrollTo(0, 0);
      setShouldScrollTop(false);
    }
  }, [postNew, shouldScrollTop]);

  const isMobile = useMediaQuery({ maxWidth: 360 }); // Determine if viewport is in mobile view

  const responsive = {
    0: { items: 1 },
    360: { items: 2 }, // Change the breakpoint to 640 to target mobile view and show 2 items per slide
    1024: { items: 3 },
  };

  const handleView = (product) => {
    navigate("productView", { state: { product } });
    window.scrollTo(0, 0);
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="carousel-container">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          autoPlayInterval={5000}
          autoPlayDirection="lrt"
          autoPlay
          infinite
        >
          {postNew &&
            postNew.slice(0,4).map((post,index) => (
              <div key={index} className="rounded-md border flex flex-col">
                {imgListNew &&
                  imgListNew.slice(0,4).map((img,i) => {
                    if (img.$id === post.imagekey) {
                      return (
                        <div
                          key={i}
                          className="aspect-w-16 aspect-h-9"
                        >
                          <img
                            src={storage.getFilePreview(conf.appwriteBucketId_1, img.$id)}
                            alt="Product"
                            className="object-cover w-full h-full rounded-t-md"
                          />
                        </div>
                      );
                    }
                    return null;
                  })}
                <div className="p-4 flex-grow">
                <h1 className={`inline-flex items-center font-semibold ${isMobile ? 'text-sm' : 'text-lg'}`} style={{ fontSize: isMobile ? '15px' : '18px' }}>
                  {post.productTitle.length > 15 && isMobile ? `${post.productTitle.substring(0, 15)}..` : post.productTitle}
                </h1>

                  {/* <h1 className="inline-flex items-center text-lg font-semibold">
                    {post.productTitle}
                  </h1> */}
                  {/* Hide description in mobile view */}
                  {!isMobile && (
                    <p className="mt-3 text-sm text-gray-600">{post.productDes}</p>
                  )}
                  <div className="mt-5 flex items-center space-x-2">
                    <span className="block text-sm font-semibold">
                      {post.catagory}
                    </span>
                  </div>
                  <div className="mt-5 flex items-center space-x-2">
                    <span className="block text-sm font-semibold">
                      RS. {post.price}
                    </span>
                  </div>
                  <button 
                  onClick={() => handleView(post)}
                  type="button"
                  className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                  Product View
                </button>
                </div>
              </div>
            ))}
        </AliceCarousel>
      </div>
    </div>
  );
}

export default Card;
