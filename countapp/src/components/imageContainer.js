import React from 'react';
import trainData from  "../data/trainData.js";
import '../styles/imageContainer.css';


function imageContainer({currentpage}) {
  return (
    <div>
      <img src={trainData.pages[currentpage].img} alt="image101" className={trainData.pages[currentpage].className}></img>
      <div className="card">
            <div className="card-body">
            {trainData.pages[currentpage].message}
            </div>
      </div>
    </div>
  )
}

export default imageContainer
