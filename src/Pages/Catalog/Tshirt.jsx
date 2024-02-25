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