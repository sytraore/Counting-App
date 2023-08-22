import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import "../styles/practice.css";
import practiceData from '../data/practiceData';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function practice() {
    const { page } = useParams();
    const currentPage = parseInt(page);
   
    return (
        <div>
          <div>
              {practiceData.pages[currentPage].animals.map((animal) => (
                <img
                  key={animal.id}
                  src={animal.img}
                  id={animal.id}
                  style={{
                    position: "absolute",
                    top: animal.top,
                    left: animal.left,
                    height: animal.height,
                  }}
                />
              )) }
          </div>
          <div className="buttons">
              {currentPage > 0 
                ? (<button><Link to={`/game/practice/${currentPage - 1}`}><ArrowBackIosIcon /></Link></button>) 
                : (<button disabled> <ArrowBackIosIcon /></button>)}
              {currentPage < 21 
                ?  ( <button><Link to={`/game/practice/${currentPage + 1}`}><ArrowForwardIosIcon /></Link></button>) 
                : (<button> <Link to="/game/home"><ArrowForwardIosIcon /></Link></button>)}
          </div>
        </div>
  )
}

export default practice;
