import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';
import pic1 from './img/mobile.jpg';
import pic2 from './img/anime.jpg';
import pic3 from './img/mugs.jpg';

function Banner() {
  const items = [
    <Link to="/catalog" >
    <img src={pic1} alt="Mobile" />,
    </Link>,

    <Link to= "/catalog/tshirts" >
    <img src={pic2} alt="Anime" />
    </Link>,
    <Link to= "/catalog/gift">
    <img src={pic3} alt="Mugs" />
    </Link>,
  ];
  const isMobile = useMediaQuery({ maxWidth: 360 });

  return (
    <AliceCarousel
      mouseTracking
      items={items.map((item, index) => (
        <div key={index} style={isMobile ? { width: 360, height: 66 } : {}}>
          {item}
        </div>
      ))}
      autoPlay
      autoPlayInterval={3000}
      animationDuration={1000}
      disableButtonsControls
      infinite
      responsive={{ 0: { items: 1 } }}
    />
  );
}

export default Banner;
