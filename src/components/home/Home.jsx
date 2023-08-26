import React from "react";
import homeImg from '../../assets/images/homeImg.png'

import "./home.css";

const Home = () => {
  return (
    <div className="home__container">
      <div>
        <h1>Cluster</h1>
        <p>
          Unleash your creativity, code your dreams, and forge connections in
          our digital playground - where websites come to life and students
          become real-world <br/>wizards, shaping their destinies one line of code at
          a time.
        </p>
        <div className="elipse">
        <div className="buttons">
          <button className="button-trans">Explore</button>
          <button className="button-fill">Contact Us</button>
        </div>
        <div>
          <img src={homeImg} alt="" style={{width:'350px'}}/>
        </div>

        </div>
       

        
      </div>
    </div>
  );
};

export default Home;
