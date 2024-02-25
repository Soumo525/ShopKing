import React from 'react';
import Button from './Button';
import { useNavigate } from 'react-router';
function ButtonMove() {
  const navigate = useNavigate();
  const handleMobileCoverClick = () => {
    //console.log('Mobile Cover clicked');
    navigate("/catalog")

  };

  const handleTShirtClick = () => {
    //console.log('T-Shirt clicked');
    navigate("catalog/tshirts")
  };

  const handleGiftClick = () => {
    //console.log('Gift clicked');
    navigate("catalog/gifts");
  };

  return (
    <div>
      <Button label="Mobile Cover" onClick={handleMobileCoverClick} />
      <Button label="T-Shirt" onClick={handleTShirtClick} />
      <Button label="Gift" onClick={handleGiftClick} />
    </div>
  );
}

export default ButtonMove;
