import React from "react";
import assets from '../../assets/index';
import './top.css'

const Top = () => {
  return (
    <div className="Top">
      <div className="nav-link">
        <a href="http://lisehoeg.dk/" rel="home">
          <span className="logo">Lh</span>
          <span className="logotext">Unika-Keramik</span>
        </a>
      </div>
      <div className="container-top">
        <img src={assets.Canvas} alt="Keramik" />
        <h1>Lise Høg Keramik</h1>
      </div>
      <div className="profile">
          <div className="user" style={{ backgroundImage: `url(${assets.User})` }}></div>
          <p>{assets.Usertext}</p>
      </div>
    </div>
  );
}

export default Top;