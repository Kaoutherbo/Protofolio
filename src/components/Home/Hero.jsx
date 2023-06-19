import React from 'react';
import'./Hero.css';
function Hero(){
    return (
      
        <div className='hero'>
     <div className="mask">
        
       </div>
        <div className="content">
            <div className="warper">
                <div className="cols">
                    <span className="topline">Hello</span>  
        <div ><h1>I'm <span className='multitext'></span></h1></div> 
        <p>Welcome to my protofolio, I'm <b>Boutheldja Kaouther</b> </p>
                </div>

            <a href="/"  className='btn'>Hire Me</a>
            <a href="/"  className='btn' >See More</a>
            </div>       
    </div>
</div> 
    ); 
}

export default Hero;