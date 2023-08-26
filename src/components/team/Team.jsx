import React from "react";
import profile from "../../assets/profile.png";


import whatsapp from "../../assets/icons8-whatsapp.svg";
import "./team.css";
const Team = () => {
  return (
    <div className="team-area">
      <h1>Meet Our Team</h1>
      <div className="cards">
        <div className="profile-card">
          <div
            className="bubble-1"
            style={{ background: `rgb(164, 229, 255)` }}
          ></div>
          <div
            className="bubble-2"
            style={{ background: "rgb(164, 229, 255)" }}
          ></div>
          <div className="profile-img">
            <img src={profile} alt="image" />
          </div>
          <div className="profile-back"></div>
          <div className="profile-info">
            <div className="info-head">
              <div className="info-head-text">
                <p>Chandra Sekhar Moturu</p>
                <p>sekharmoturu08@gmial.com</p>
              </div>

              <div className="info-icon">
                <img src={whatsapp} alt="img" style={{ width: "24px" }} />
              </div>
            </div>

            <div className="info-skills">
              <p>a</p>
              <p>b</p>
              <p>c</p>
              <p>c</p>
              <p>c</p>
            </div>

            <div className="info-buttons">
              <a href="">Message</a>
              <a href="">Hire</a>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <div
            className="bubble-1"
            style={{ background: `rgb(199, 199, 26)` }}
          ></div>
          <div
            className="bubble-2"
            style={{ background: `rgb(199, 199, 26)` }}
          ></div>
          <div className="profile-img">
            <img src={profile} alt="" />
          </div>
          <div className="profile-back"></div>
          <div className="profile-info">
            <div className="info-head">
              <div className="info-head-text">
                <p>Chandra Sekhar Moturu</p>
                <p>sekharmoturu08@gmial.com</p>
              </div>

              <div className="info-icon">
                <img src={whatsapp} alt="img" style={{ width: "24px" }} />
              </div>
            </div>
            <div className="info-skills">
              <p>a</p>
              <p>b</p>
              <p>c</p>
              <p>c</p>
              <p>c</p>
            </div>
            <div className="info-buttons">
              <a href="">Message</a>
              <a href="">Hire</a>
            </div>
          </div>
        </div>

        <div className="profile-card">
          <div
            className="bubble-1"
            style={{ background: `rgb(231, 140, 140)` }}
          ></div>
          <div
            className="bubble-2"
            style={{ background: `rgb(231, 140, 140)` }}
          ></div>
          <div className="profile-img">
            <img src={profile} alt="" />
          </div>
          <div className="profile-back"></div>
          <div className="profile-info">
            <div className="info-head">
              <div className="info-head-text">
                <p>Chandra Sekhar Moturu</p>
                <p>sekharmoturu08@gmial.com</p>
              </div>

              <div className="info-icon">
                <img src={whatsapp} alt="img" style={{ width: "24px" }} />
              </div>
            </div>
            <div className="info-skills">
              <p>a</p>
              <p>b</p>
              <p>c</p>
              <p>c</p>
              <p>c</p>
            </div>
            <div className="info-buttons">
              <a href="">Message</a>
              <a href="">Hire</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
