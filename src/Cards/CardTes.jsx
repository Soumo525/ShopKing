import React, { useEffect } from "react";
import { useAuth } from "../Pages/AuthProvider";
import { storage } from "../appwrite/appwriteConf";
import conf from "../conf/conf";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../App.css";
import "../index.css";
import { useMediaQuery } from "react-responsive"; 
import { useNavigate } from 'react-router';
function CardTes() {
  // const bucketIdsArray = conf.appwriteBucketId.split(',').map(id => id.trim()); // get the first bucket id if there are multiple separated by ,
  // const secondBucketId = bucketIdsArray[1]; 
  const {  imageListTshirt,imageTshirt,showPostTshirt,getPostTshirt } = useAuth();
  useEffect(() => {
    getPostTshirt();
    imageListTshirt();
  }, []);
  const isMobile = useMediaQuery({ maxWidth: 360 && 480 });
  // console.log("Is Mobile?", isMobile);
  const responsive = {
    0: { items: 1 },
    360: { items: 2 },
    1024: { items: 3 },
  };
  const navigate = useNavigate()
  const handleView = (product) => {
    navigate("productViewT", { state: { product } });
    window.scrollTo(0, 0);
  }
  return (
    <div className="mx-auto max-w-7xl">
      <div className="carousel-container">
        <AliceCarousel
          mouseTracking
          responsive={responsive}
          autoPlayInterval={5000}
          autoPlayDirection="ltr"
          autoPlay
          infinite
          
        >
          {showPostTshirt &&
            showPostTshirt.slice(0,4).map((post,index) => (
              <div key={index} className="rounded-md border flex flex-col">
                {imageTshirt &&
                  imageTshirt.slice(0,4).map((img,i) => {
                    if (img.$id === post.imagekey) {
                      return (
                        <div
                          onClick={() => handleView(post)}
                          key={i}
                          className="aspect-w-16 aspect-h-9"
                        >
                          <img
                            src={storage.getFilePreview(
                              conf.appwriteBucketId_2,
                              img.$id
                            )}
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
                  {post.productTitle.length > 15 && isMobile ? `${post.productTitle.substring(0, 13)}` : post.productTitle}
                </h1>
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

export default CardTes