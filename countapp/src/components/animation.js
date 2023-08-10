import React, { useEffect, useState } from 'react';
import '../styles/animation.css';
import CircleDraw from "./circleDraw"; 

function Animation({ onAnimationFinish }) {
  const [percent, setPercent] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      if (percent < 100) {
        setPercent((prevPercent) => prevPercent + 4);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setAnimationFinished(true);
        }, 1000);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [percent]);

  useEffect(() => {
    let progressEllipse = document.querySelector('.progress');
    let rx = parseFloat(progressEllipse.getAttribute('rx'));
    let ry = parseFloat(progressEllipse.getAttribute('ry'));
    let perimeter = Math.PI * (3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry)));
    progressEllipse.style.strokeDasharray = perimeter;
    progressEllipse.style.strokeDashoffset = perimeter - (percent * perimeter) / 100;

  }, [percent]);

  return (
    <div className='animation'>
      {animationFinished ? (
        <div>
          <div className="animation-svg">
            <svg width="400px" height="400px">
              <ellipse
                cx="200"
                cy="200"
                rx="150"
                ry="200"
                className="progress"
              ></ellipse>
            </svg>
          </div>
          <div className="circle-draw">
            <CircleDraw onAnimationFinish={onAnimationFinish} />
          </div>
        </div>
      ) : (
        <div className="animation-svg">
          <svg width="400px" height="400px">
            <ellipse
              cx="200"
              cy="200"
              rx="150"
              ry="200"
              className="progress"
            ></ellipse>
          </svg>
        </div>
      )}
    </div>
  );  
}

export default Animation;
