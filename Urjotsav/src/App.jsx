import { useState } from 'react';
import Header from './components/Header';
import Layer1 from "./images/Layer1.jpg";
import '../src/App.css';
import About from '../src/components/About';
import planet from "../src/images/planet.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#image", {
      y: 200,
      scale: 3.2,
      scrollTrigger: {
        trigger: "#image",
        start: "top 19%",
        end: "bottom",
        scrub: true,
        fastScrollEnd: true,
      }
    });
    gsap.to("#name", {
      y: -200,
      scrollTrigger: {
        trigger: "#name",
        start: "top 1%",
        end: "bottom",
        scrub: true,
        fastScrollEnd: true,
      }
    });

  });

  return (
    <>
      <div style={{ backgroundImage: `url(${Layer1})`, backgroundPosition: "center", backgroundSize: "cover" }} className='w-full h-[200vh] overflow-hidden z-4'>

        <div className='w-full h-screen'>
          <Header />

          <div id='name' className='flex items-center justify-center h-screen w-full absolute'>
            <h1 className='text-9xl text-white font-Megrim'>URJOTSAV</h1>
          </div>

          <div className='h-screen flex p-16 justify-center mt-4'>
            <img id='image' src={planet} className='relative z-10' alt="Planet" />
          </div>
        </div>

        <div className=' flex items-center justify-center flex-col mt-10 '>
          <div id='Urjotsav_title' className='h-auto w-[75vw] ' style={{ textAlign: 'center', color: 'white', fontSize: 150, fontFamily: 'Megrim', fontWeight: '500', letterSpacing: 6, wordWrap: 'break-word' }}>ABOUT US</div>
          <div className='h-auto w-[79vw] z-20 relative' style={{ textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Jost', fontWeight: '300', letterSpacing: 1.20, wordWrap: 'break-word' }}>Urjotsav, a prestigious national-level inter-collegiate annual technical and entrepreneurial festival hosted by the Rajiv Gandhi Institute of Petroleum Technology, is orchestrated with meticulous care by the Science and Technical Council on an annual basis. This extraordinary endeavor stands as a testament to the proactive dedication of our students, who strive ceaselessly to craft an event that not only exudes grandeur but also sparks profound intellectual curiosity within the minds of the intellectually inclined.<br />The festival is deeply committed to furnishing a robust platform wherein the potential industry leaders of tomorrow can unveil their prodigious talents, and where the young minds of today can engage in collaboration, strategic planning, and execute a spectacular celebration, thus instilling in them invaluable leadership skills and fostering the spirit of teamwork among its participants.</div>

          <button className='border-gray-50  rounded-full  text-white text-2xl z-30 mt-7 p-3 mb-5 ' style={{ borderWidth: `2px` }}>Explore more</button>
        </div>

      </div>
    </>
  );
}

export default App;
