
import React from "react";
import Image from './projects.PNG';
import './Projects.css';
function Projects(props) {
    return (
        <div className="hero-img">
           
             <div className="heading">
             <h1>My Projects</h1>
            <p>I did this web site and all my projects are on github if you want to see them just <b>Click here</b> </p>
            <a href="https://github.com/Kaoutherbo">
            <i class="uil uil-github"></i>
            </a>
        </div>
        <div className="Image">
            <img src={Image} height="300px" width="300px" alt="" />
        </div>
        </div>
    );
}

export default Projects;