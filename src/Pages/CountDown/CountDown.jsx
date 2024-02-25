import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
const CountDown = () => {
  const navigate = useNavigate();
  const initialTime = 5 * 60 * 60; // 5 hours in seconds
  const [time, setTime] = useState(() => {
    const storedTime = localStorage.getItem("countdownTime");
    return storedTime ? parseInt(storedTime, 10) : initialTime;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          localStorage.setItem("countdownTime", initialTime.toString());
          return initialTime; // Reset to 5 hours
        }
        localStorage.setItem("countdownTime", (prevTime - 1).toString());
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [initialTime]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  const handleSale = () => {
    navigate('/catalog')
  }
  return (
    <>
      <div 
      onClick={handleSale}
      className="flex items-center bg-teal-500 justify-center">
        <h1 className="text-1xl  text-white p-2">Hurry Up! Sale Ends In:</h1>
        <p className="text-1xl text-white font-bold ml-2">{`${hours
          .toString()
          .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`}</p>
      </div>
      <div>
        <p>Free shipping on all prepaid orders ✈️</p>
      </div>
    </>
  );
};

export default CountDown;
