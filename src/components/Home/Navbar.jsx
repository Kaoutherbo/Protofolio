import React ,{ useState } from 'react';
import './Navbar.css';


function Navbar(props) {
const [click,setClick]= useState(false);
const handleClick = ()=> setClick(!click);
const [color,setColor]=useState(false);
const changeColor = ()=>{
  if(window.scrollY >= 100)
  setColor(true);
  else setColor(false);
}
window.addEventListener("scroll",changeColor);
 return (      
  <header className={color ? 'header header-bg' :'header'}>
  <div className='logo'><h1><a href="/">Protofolio <b>.</b></a></h1> </div> 
  <ul className={click? "nav_menu active" : 'nav_menu'}>
    <li><a href="/">Home</a></li>
    <li><a href="/">About</a></li>
    <li><a href="/">Projects</a></li>
    <li><a href="/">Skils</a></li>
    <li><a href="/">Contact</a></li>
  </ul>
  <div className='Icons' onClick={handleClick}>
    { click ? ( <a href=""className="closeIcone"><i class="uil uil-times"></i></a>)
    : (<a href="" className="hamburger"><i class="uil uil-bars"></i></a>)};
       
  </div>

  </header>
    );
}

export default Navbar;