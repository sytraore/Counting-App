import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";

const TouchData = () => {
  const [touchData, setTouchData] = useState({});
  const location = useLocation();

  const updateTouchData = (touchX, touchY) => {
    const currentPage = location.pathname;
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    setTouchData((prevData) => ({
      ...prevData,
      [currentPage]: [...(prevData[currentPage] || []), { x: touchX, y: touchY, date: date, time: time }],
    }));
  };

  useEffect(() => {
    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      const touchX = touch.clientX;
      const touchY = touch.clientY;

      updateTouchData(touchX, touchY);
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: false });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  useEffect(() => {
    console.log('allTouchData:', touchData);
    if (Object.keys(touchData).length > 0) {
      axios.post('/touchdata', { touchData })
        .then((response) => {
          console.log('Touch data sent to the backend successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error sending touch data to the backend:', error);
        });
    }
  }, [touchData]);

  return null; 
};

export default TouchData;
