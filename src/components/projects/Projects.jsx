import React from "react";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import elipse from "../../assets/images/elipse.png";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projects-area">
      <h1>Projects</h1>
      <div className="grad">
      
      <img src={p2} alt="" style={{ width: "400px" }} />
      <div className="project-img-row">
        <img src={p1} alt="" style={{ width: "500px", height: "350px" }} />
        <img src={p3} alt="" style={{ width: "500px", height: "350px" }} />
      </div>
    </div>
    </div>
    
  );
};

export default Projects;
