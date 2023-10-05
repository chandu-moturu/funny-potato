import React from "react";
import "./skills.css";
import skills from '../../assets/images/skills.png'

const Skills = () => {
  return (
    <div className="skills-area">
      <h1>Skills</h1>
      <p>Those who know what they are looking for</p>
      <div className="skills-list">
        <img src={skills} alt="" className="skills-img" />
      </div>
    </div>
  );
};

export default Skills;
