import React from "react";
import { Link } from 'react-router-dom';
import '../styles/profile.css';
import profileicon from '../assests/profileicon.png'

function profile({name}) {

    const handleLogout = () => {
        window.localStorage.clear();
      };

  return (
    <div>
      <div className="container">
        <div className="card p-4 profileCard">
          <div className=" profileimage d-flex flex-column">
            <button className="btn btn-secondary">
              <img src={profileicon} height="100" />
            </button>
            <span className="name mt-3">{name}</span>
            <div className=" d-flex mt-2">
            <button className="btn1 btn-dark" onClick={handleLogout}><Link to="/">Log Out</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile;
