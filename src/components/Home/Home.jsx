import React from 'react';
import Hero from './Hero';
import Navbar from './Navbar';
function Home(props) {
    return (
        <section>   
        <Navbar /> 
        <Hero />
        </section>
    );
}

export default Home;