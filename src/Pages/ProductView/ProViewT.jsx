import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { storage } from '../../appwrite/appwriteConf';
import conf from '../../conf/conf';
import { useMediaQuery } from "react-responsive";
import 'react-whatsapp-widget/dist/index.css';
import { useNavigate } from 'react-router';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
function ProView() {
  const location = useLocation();
  const { product } = location.state;
  const isMobile = useMediaQuery({ maxWidth: 360 && 460});
  const imageUrl = storage.getFilePreview(conf.appwriteBucketId_2, product.imagekey);
  const [num, setNum] = useState(1);
  const navigate = useNavigate();

  if (!product) {
    return <div>Product not found</div>;
  }

  const incrementNum = () => {
    if (num < 5) {
      setNum(num + 1);
    }
  };

  const decrementNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  const handleChange = (e) => {
    setNum(e.target.value);  
  };

  const handleAddToCart = () => {
    navigate("/cartt", { state: { product, quantity: num } });
  }

  return (
    <>
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 py-24">
          <div className="mx-auto flex flex-wrap items-start lg:w-4/5">
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
              {/*   Quantity Selector */}
              <div className="box-border h-10 w-32 p-4 border-2 rounded-md  flex items-center">
                <button onClick={decrementNum} className='text-center w-10 h-10 border-[#bfbfbf] text-xl'>
                  -
                </button>
                <input 
                  type="number" 
                  value={num} 
                  onChange={handleChange} 
                  className="w-10 text-center border-l border-r border-[#bfbfbf] outline-none text-sm" 
                />
                <button onClick={incrementNum} className='text-center w-10 h-10 border-[#bfbfbf] text-xl'>
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
       {/* WhatsApp widget */}
       <div className="fixed bottom-4 right-4 z-50">
                <WhatsAppWidget phoneNumber="+919007209647" />
         </div>
    </>
  );
}

export default ProView;
