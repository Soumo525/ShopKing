import React, { useEffect } from 'react';
import { useAuth } from "../AuthProvider";
import { storage } from "../../appwrite/appwriteConf";
import conf from "../../conf/conf";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router';
function MobileCat() {
  // const bucketIdsArray = conf.appwriteBucketId.split(",").map((id) => id.trim());
  // const firstBucketId = bucketIdsArray[0];
  const { user, getPost, postNew, imgListNew, imageList, deleteMobilePost, deleteMobileImage, logoutUser } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 360 && 480 });
  const navigate = useNavigate()
  useEffect(() => {
    getPost();
    imageList();
  }, []);

  const handleMobilePost = (documentId) => {
    console.log(documentId);
    deleteMobilePost(documentId);
  };

  const handleMobileImg = (imageId) => {
    deleteMobileImage(imageId);
  };
  const handleView = (product) => {
    navigate("/productView", { state: { product } });
    window.scrollTo(0, 0);
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
      <div className="mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {postNew &&
          postNew.map((post, index ) => (
            <div key={index} className="rounded-md border flex flex-col w-full">
              {imgListNew &&
                imgListNew.map((img, i) => {
                  if (img.$id === post.imagekey) {
                    return (
                      <div onClick={() => handleView(post)}
                      key={i} className="aspect-w-16 aspect-h-9">
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
                      handleMobilePost(post.$id);
                      handleMobileImg(post.imagekey); // Fixed img.$id to post.imagekey
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
  );
}

export default MobileCat;
