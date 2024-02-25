import React from 'react';
import { useLocation } from 'react-router-dom';
import { storage } from '../../appwrite/appwriteConf';
import conf from '../../conf/conf';
import { useMediaQuery } from "react-responsive"; 
function ProViewT() {
  const location = useLocation();
  const { product } = location.state;
 //console.log(product);
  const isMobile = useMediaQuery({ maxWidth: 360 && 480});
  if (!product) {
    return <div>Product not found</div>;
  }
  // const bucketIdsArray = conf.appwriteBucketId.split(",").map((id) => id.trim());
  // const secondBucketId = bucketIdsArray[1]; 
  // Determine which bucket ID to use based on the image key
  const imageUrl = storage.getFilePreview(conf.appwriteBucketId_2, product.imagekey);
  //console.log(imageUrl);
  const handleOrder = () => {
    // Construct the message to be sent
    const message = `Hello, I would like to order the following product:\n${product.productTitle}\n${product.price}\n\n${imageUrl}`;

    // Open WhatsApp with the message
    window.open(`https://wa.me/9007209647/?text=${encodeURIComponent(message)}`, '_blank');
  };
  return (
    <>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-24">
          <div className="mx-auto flex flex-wrap items-start lg:w-4/5">
            {/* Image */}
            <img
              alt={product.productTitle}
              className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
              src={imageUrl}
              style={{
                objectFit: 'cover',
                width: isMobile ? '100%' : '50%',
                height: isMobile ? '100%' : '50%',
                objectPosition: 'center'
              }}
            />
            {/* Text */}
            <div className="mt-6 w-full lg:w-1/2 lg:pl-10 flex flex-col justify-start">
              <h1 className="my-4 text-3xl font-semibold text-black">{product.productTitle}</h1>
              <p className="leading-relaxed text-left">{product.productDes}</p>
              <div className="mb-5 mt-6 flex items-center  pb-2">
                <span className="mr-3 text-sm font-semibold">Category:</span>
                <span className="text-sm font-semibold">{product.catagory}</span>
              </div>
              <div className="mb-4 mt-0 flex items-center  pb-2">
                <span className="mr-3 text-sm font-semibold">RS:</span>
                <span className="text-sm font-semibold">{product.price}</span>
              </div>
              <button 
                onClick={() => handleOrder()}
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProViewT;
