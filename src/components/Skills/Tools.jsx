import React from 'react';
import './Skils.css';
import Node from'./NodeJS.jpg';
import Dart from'./logo_dart.png';
import Css from'./CSS3_logo.svg.png';
import Html from'./html5.png';
import C from'./c.png';
import Js from './js.png';
import logo from './logo.png';
import Git from './git.webp';
import Github from './github.png';
import C2 from'./C#.png';
function Tools(props) {
    return (
        <>
        <h1>Tools & technologies </h1>
        <div className='Tools'>
            <img src={Node} width="190px" height="190px" alt="" />
            <img src={Dart} width="190px" height="190px" alt="" />
            <img src={Css} width="190px" height="190px" alt="" />
            <img src={Html} width="190px" height="190px" alt="" />
            <img src={Js} width="190px" height="190px" alt="" />
            </div>
            <div className="Tools2">
            <img src={logo} width="190px" height="190px" alt="" />
            <img src={C} width="190px" height="190px" alt="" />
            <img src={Git} width="190px" height="190px" alt="" />
            <img src={Github} width="190px" height="190px" alt="" />
            <img src={C2} width="190px" height="190px" alt="" />
        </div>
        <h1>Contact Me</h1>
        </>
    );
}

export default Tools;