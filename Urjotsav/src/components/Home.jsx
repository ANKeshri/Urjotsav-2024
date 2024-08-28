import React from 'react';

import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import About from './About';

import planet from "../images/planet.png";


function Home() {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#image", {
      y: 200,
      scale: 3.2,
      scrollTrigger: {
        trigger: "#image",
        start: "top %",
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
    
            <div className='w-full h-[200vh]'>
              <div id='name' className='flex items-center justify-center h-screen w-full absolute'>
                <h1 id='title' className='text-9xl text-white font-Megrim'>URJOTSAV</h1>
              </div>
              <div id='image' className='h-screen flex p-16 justify-center items-end mt-4'>
                <img src={planet} className='relative z-10 w-[75%]' alt="Planet" />
              </div>
              <About />
            </div>
          
     
  );
}

export default Home;