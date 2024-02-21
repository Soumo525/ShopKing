import React, { useEffect } from "react";
import { useAuth } from "../Pages/AuthProvider";
import { storage } from "../appwrite/appwriteConf";
import conf from "../conf/conf";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router';
function ShowMobile() {
  // const bucketIdsArray = conf.appwriteBucketId.split(",").map((id) => id.trim());
  // const firstBucketId = bucketIdsArray[0];
  const { getPost, postNew, imgListNew, imageList } = useAuth();
  const isMobile = useMediaQuery({ maxWidth: 360 });
  const navigateItem = useNavigate()
  const navigate = useNavigate()
  useEffect(() => { // Adding useEffect
    getPost();
    imageList();
  }, []);
  const handleViewMore = () => {
    navigateItem('/catalog')
    window.scrollTo(0, 0);
  }
  const handleView = (product) => {
    navigate("productView", { state: { product } });
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className="mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {postNew &&
          postNew.slice(4,8).map((post,index) => (
            <div key={index} className="rounded-md border flex flex-col w-full">
              {imgListNew &&
                imgListNew.map((img,i) => {
                  if (img.$id === post.imagekey) {
                    return (
                      <div key={i} className="aspect-w-16 aspect-h-9">
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
              </div>
            </div>
          ))}
      </div>
      <div className="mt-4">
  <button
    onClick={handleViewMore}
    className=" bg-black text-white rounded-sm px-4 py-2 text-sm font-semibold shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >
    View More
  </button>
</div>

    </>
  )
}

export default ShowMobile;
