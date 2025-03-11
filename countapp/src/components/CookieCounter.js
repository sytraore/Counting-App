import React, { useState, useRef } from 'react';
import { textToSpeech } from '../helpers/textToSpeech';

const CookieCounter = ({cookies, activeCookieId, isWiggling}) => {

  // track the number of cookies clicked
    const [count, setCount] = useState(0);
    const clickedCookies = useRef(new Set());

    // handle the click event on the cookie
    const handleCookieClick = (cookieId) => {
      // if the cookie has not been clicked before, add it to the set and increment the count
        if (!clickedCookies.current.has(cookieId)) {
            clickedCookies.current.add(cookieId);
            setCount(prevCount => {
                const newCount = prevCount + 1;
                textToSpeech(`${newCount}`);
                return newCount;
            });
        }
    };

    // render the cookies
    return (
        <div className="cookieContainer">
          {cookies.map((cookie) => (
            <img
              key={cookie.id}
              src={cookie.img}
              id={cookie.id}
              className={`${activeCookieId === cookie.id ? "circle" : ""} ${activeCookieId === cookie.id && isWiggling ? "wiggle" : ""}`}
              //className="cookie"
              alt={`Cookie ${cookie.id}`}
              onClick={() => handleCookieClick(cookie.id)}
              style={{
                position: "absolute",
                top: cookie.top,
                left: cookie.left,
              }}
            />
          ))}
        </div>
    );
}

export default CookieCounter;