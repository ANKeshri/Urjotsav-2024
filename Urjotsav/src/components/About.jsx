import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap/gsap-core'
function About() {

   
  return (
    <div className=' flex items-center justify-center flex-col  h-[90vh]'>
    <div id='Urjotsav_title' className='h-auto w-[65vw] ' style={{ textAlign: 'center', color: 'white', fontSize: 130, fontFamily: 'megrim', fontWeight: '500', letterSpacing: 6, wordWrap: 'break-word' }}>ABOUT US</div>
    <div className='h-auto w-[90vw] z-20 relative' style={{ textAlign: 'center', color: 'white', fontSize: 30, fontFamily: 'Jost', fontWeight: '300', letterSpacing: 1.20, wordWrap: 'break-word' }}>Urjotsav, a prestigious national-level inter-collegiate annual technical and entrepreneurial festival hosted by the Rajiv Gandhi Institute of Petroleum Technology, is orchestrated with meticulous care by the Science and Technical Council on an annual basis. This extraordinary endeavor stands as a testament to the proactive dedication of our students, who strive ceaselessly to craft an event that not only exudes grandeur but also sparks profound intellectual curiosity within the minds of the intellectually inclined.<br />The festival is deeply committed to furnishing a robust platform wherein the potential industry leaders of tomorrow can unveil their prodigious talents, and where the young minds of today can engage in collaboration, strategic planning, and execute a spectacular celebration, thus instilling in them invaluable leadership skills and fostering the spirit of teamwork among its participants.</div>

    <button id='expand'  className='border-gray-50 font-Megrim font-bold rounded-full  text-white text-2xl z-30 mt-7 p-3  transition-all hover:bg-white hover:text-black' style={{ borderWidth: `2px` }}>Explore more</button>
  </div>  )
}

export default About