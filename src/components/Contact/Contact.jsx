import React from 'react';
import './Contact.css';
function Contact(props) {
    return ( 
            <div className="Contact">
                <div className="left">
                <div className="location">
               <h4><a href="/"><i class="uil uil-location-point"></i></a><p>Algeria,Chlef</p></h4> 
                    </div>
                  
                    <div className="phone">
                   <h4><a href="/"> <i class="uil uil-phone"></i></a><p>+213 557 46 96 71</p></h4>   
                    </div>
                    
                    <div className="email">
                     <h4><a href="/"> <i class="uil uil-envelope-alt"></i> </a><p>kaoutherboutheldja@gamil.com</p></h4>   
                    </div>
                </div>

                <div className="right">
               <form action="#">
                    <label htmlFor="name"><h4>Name</h4>
                        <input type="text" id="name" placeholder='Enter your name'/>
                    </label>
                   <label htmlFor="email"><h4>Email</h4>
                        <input type="text" id="email" placeholder='Enter your email'/>
                    </label>
                    <label htmlFor=""><h4>Your message</h4></label>
                    <textarea id='subject' rows={13} placeholder='Enter your message'/>
                    <div className='btn'>Send</div>
               </form>
                </div>
            </div>
       
    );
}

export default Contact;