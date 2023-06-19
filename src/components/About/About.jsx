import React from "react";
import'./About.css';
import Profile from'./profile.jpg';
export default function About() {
  return (
    
      <div className="card">
      <div className="container">
        <div className="intro">
          <h1>About Me </h1>
          <p>I'm <b>Kaouther Boutheldja</b> a computer science student in the first year ,
             I'm honing my skils knowledge to excel in the field of informatics and
              create innovative solutions through both of web and app development</p></div>
          <img src={Profile}  height="250px" width="250px" alt="profile" />
        </div>
        <a href="/"  className='button'>Download CV</a>
      </div>
     
  );
}