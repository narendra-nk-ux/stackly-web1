import React from 'react';
import Hero from './Hero';
// import Services from './Services';
// import Contact from './Contact';

const Home = () => {
  return (
    <div style={{ paddingTop: "100px", color: "white" }}>
       {/* We add padding and color just to be sure it's visible */}
       <Hero />
       {/* <Services /> */}
       {/* <Contact /> */}
    </div>
  );
};

export default Home;