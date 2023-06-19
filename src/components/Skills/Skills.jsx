
import React from 'react';
import './Skils.css';
import Desktop from'./desktop.webp';
import Flutter from './flutter.png';
import Web from'./css profile.webp';
import Html from'./Html.jpeg';
import Css from'./Css.jpeg';
import Js from'./Js.jpeg';
import C from'./C.jpeg';
import Tools from './Tools';
function Skills(props) {
    return (
        <div className='services'>
         <h1>My Skills</h1> 
        <div className='skils'>
        <div className='first'>
            <img src={Web} width="210px" height="210px"alt="" />
            <h4>Web development 💻</h4>
            <p>I have the ability to create a responsive web site using <b>Html</b> & <b>Css</b> &<b> js</b>&<b>react</b> in front-end ,and <b>Node js</b> in back-end</p>
        </div>
        <div className='second'>
        <img src={Flutter} width="210px" height="210px" alt="" />
        <h4>Mobile development 📱</h4>
            <p>I have a good experience to create a mobile application using <b>dart</b> language </p>
        </div>
        <div className='third'>
        <img src={Desktop} width="210px" height="210px" alt="" />
        <h4>Desktop development 🖥️</h4>
            <p>I have the ability to create a desktop app using <b> C#</b> language </p>
        </div>
        </div>
        <h1>My Certeficates </h1>
        <div className='certeficates'>
            <img src={Html} width="210px" height="210px" alt="" />
            <img src={Css} width="210px" height="210px" alt="" />
            <img src={Js} width="210px" height="210px" alt="" />
            <img src={C} width="210px" height="210px" alt="" />
        </div>
            <Tools/>
        </div>
    );
}

export default Skills;