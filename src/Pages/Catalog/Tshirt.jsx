import React, { useEffect } from 'react'; // Import useEffect
import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router';
import { useAuth } from "../AuthProvider";
import { storage } from "../../appwrite/appwriteConf";
import conf from "../../conf/conf";
function Tshirt() {
    // const bucketIdsArray = conf.appwriteBucketId.split(",").map((id) => id.trim());
    // const secondBucketId = bucketIdsArray[1]; 
    const { user,imageListTshirt,imageTshirt,showPostTshirt,getPostTshirt,logoutUser,deleteTshirtPost,deleteTshirtImage } = useAuth();
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
      useEffect(() => {
        getPostTshirt();
        imageListTshirt();
      }, []);
      const handleView = (product) => {
        navigate("/productViewT", { state: { product } });
        window.scrollTo(0, 0);
      }
      const handleTshirtPost = (documentId) => {
        deleteTshirtPost(documentId)
      }
      const handleTshirtImg = (imageId) => {
        deleteTshirtImage(imageId)
      }
  return (
   <>
     {user && (
        <button
          onClick={logoutUser}
          className="absolute top-0 right-0 m-4 bg-red-500 text-white px-2 py-1 rounded-md"
        >
          Logout
        </button>
      )}
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

      <div className="mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      {showPostTshirt &&
        showPostTshirt.map((post,index) => (
          <div key={index} className="rounded-md border flex flex-col w-full">
            {imageTshirt &&
                imageTshirt.map((img,i) => {
                if (img.$id === post.imagekey) {
                  return (
                    <div onClick={() => handleView(post)}
                    key={i} className="aspect-w-16 aspect-h-9">
                      <img
                        src={storage.getFilePreview(conf.appwriteBucketId_2, img.$id)}
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
              {!isMobile && (
                <p className="mt-3 text-sm text-gray-600">{post.productDes}</p>
              )}
              <div className="mt-5 flex items-center space-x-2">
                <span className="block text-sm font-semibold">{post.catagory}</span>
              </div>
              <button
                onClick={() => handleView(post)}
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                 Product View
              </button>
              {user && (
                  <button
                    onClick={() => {
                      handleTshirtPost(post.$id);
                      handleTshirtImg(post.imagekey); // Fixed img.$id to post.imagekey
                      console.log("Delete");
                      console.log(post);
                    }}
                    type="button"
                    className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Delete
                  </button>
                )}
            </div>
          </div>
        ))}
    </div>
   </>
  )
}

export default Tshirt